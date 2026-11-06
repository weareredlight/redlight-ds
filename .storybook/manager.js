import { createElement, useState } from 'react';
import { addons, types } from 'storybook/manager-api';
import { IconButton } from 'storybook/internal/components';
import { CURRENT_STORY_WAS_SET } from 'storybook/internal/core-events';
import { getColorMode, setColorMode } from './colorMode';
import { themes } from './theme';

addons.setConfig({
  theme: themes[getColorMode()],
});

// Light / dark toggle in the toolbar. The manager switches its own theme here; the preview
// (stories and docs pages) follows through localStorage (see colorMode.js)
const icon = (...children) => createElement('svg', {
  width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
}, ...children);

const moonIcon = icon(createElement('path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' }));
const sunIcon = icon(
  createElement('circle', { cx: 12, cy: 12, r: 4 }),
  createElement('path', { d: 'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41' }),
);

const ColorModeToggle = ({ api }) => {
  const [mode, setMode] = useState(getColorMode);
  const next = mode === 'dark' ? 'light' : 'dark';

  const toggle = () => {
    setColorMode(next);
    api.setOptions({ theme: themes[next] });
    setMode(next);
  };

  return createElement(IconButton, {
    key: 'redlight-ds/color-mode',
    variant: 'ghost',
    padding: 'small',
    ariaLabel: `Switch to ${next} mode`,
    onClick: toggle,
  }, mode === 'dark' ? sunIcon : moonIcon);
};

addons.register('redlight-ds/color-mode', (api) => {
  addons.add('redlight-ds/color-mode', {
    type: types.TOOL,
    title: 'Light / dark mode',
    match: () => true,
    render: () => createElement(ColorModeToggle, { api }),
  });
});

// Stories rendered without the addons panel (Controls, Actions, ...)
const STORIES_WITHOUT_PANEL = ['playground--playground'];
// Remembers that we hid the panel, so it's restored when leaving the story (survives reloadss
const HIDDEN_FLAG = 'redlight-ds:panel-hidden';

const getFlag = () => {
  try {
    return localStorage.getItem(HIDDEN_FLAG) === 'true';
  } catch {
    return false;
  }
};

const setFlag = (value) => {
  try {
    if (value) localStorage.setItem(HIDDEN_FLAG, 'true');
    else localStorage.removeItem(HIDDEN_FLAG);
  } catch {
    // Storage unavailable, the panel just won't be restored after a reload
  }
};

// Automatically expands all sidebar groups (folders) in the Storybook explorer tree when they first render.
const expandedGroups = new Set();

const expandGroups = () => {
  document
    .querySelectorAll('#storybook-explorer-tree [data-nodetype="group"][data-item-id]')
    .forEach((group) => {
      const id = group.getAttribute('data-item-id');
      if (expandedGroups.has(id)) return;

      expandedGroups.add(id);

      group.removeAttribute('data-item-id');
      group.querySelector('[aria-expanded="false"]')?.click();
      group.setAttribute('data-item-id', id);
    });
};

new MutationObserver(expandGroups).observe(document.body, { childList: true, subtree: true });

addons.register('redlight-ds/hide-panel', (api) => {
  api.on(CURRENT_STORY_WAS_SET, ({ storyId }) => {
    const shouldHide = STORIES_WITHOUT_PANEL.includes(storyId);

    if (shouldHide && api.getIsPanelShown()) {
      api.togglePanel(false);
      setFlag(true);
    } else if (!shouldHide && getFlag()) {
      api.togglePanel(true);
      setFlag(false);
    }
  });
});
