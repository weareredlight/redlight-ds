import RedTheme from './theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        'Get Started',
        'Style Guides', ['Typography', 'Colors'],
        'Components'
      ],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: RedTheme,
    previewSource: 'open',
  },
  viewMode: 'docs'
}

export const globalTypes = {
  containerSize: {
    name: 'Container size',
    description: 'Global container\'s size',
    defaultValue: '400px',
    toolbar: {
      icon: 'circlehollow',
      items: ['400px', '100%'],
      // showName: true,
    },
  },
};

// this little bit of hacky code opens code samples
window.addEventListener('load', () => {
  let loc = window.location.href
  showCodeSamples()

  window.setInterval(() => {
    let newLoc = window.location.href

    if (newLoc !== loc) {
      loc = newLoc
      showCodeSamples()
    }
  }, 300)
})

const showCodeSamples = () => {
  try {
    const docs = document.querySelectorAll('.sbdocs')

      ;[].forEach.call(docs, (el) => {
        const buttons = el.querySelectorAll('button')
        const codeButton = [].find.call(buttons, (el) => el.textContent === 'Show code')
        if (codeButton) {
          codeButton.click()
        }
      })
  } catch (e) {
    console.warn(e)
  }
}