import { addons } from 'storybook/manager-api';
import { CURRENT_STORY_WAS_SET } from 'storybook/internal/core-events';
import RedTheme from './theme';

addons.setConfig({
  theme: RedTheme,
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
