# Welcome to RedLight's Design System 🚀

<img src="https://drive.google.com/uc?export=view&id=1OQ3SB2QUmhRCWMIwqz46ZExeJ4A20FRQ" width="100%" alt="banner"/>

- Our Design System is a comprehensive collection of design and development resources that aims to streamline and enhance the creation of consistent, user-centric digital experiences.

- It provides a unified framework for designers and developers to work together seamlessly, fostering collaboration, efficiency, and creativity.

## Documentation

https://weareredlight.github.io/redlight-ds

## Installation

```sh
$ yarn add @weareredlight/design-system
# or
$ npm install --save @weareredlight/design-system
```

# Setting up

Now it's time to start using the components.

- Import the styles once, at your app's entry point:

```jsx
import '@weareredlight/design-system/dist/style.css'
```

- Import the component into the desired file:

```jsx
import { Button } from '@weareredlight/design-system'
```

- Now the component is ready to use. Change its variants and properties so you can use it to your liking.

```jsx
() => {
  <Button
    variant='primary'
    size='large'
    onCick={yourFunction()}
  >
    Button Text
  </Button>
}
```

## Theming

Theme tokens are CSS variables (`--colors-primary`, `--space-xxsm`, `--radii-sm`, ...).
`setupTheme` overrides them globally and returns a class that scopes the theme to an element:

```jsx
import { setupTheme } from '@weareredlight/design-system'

const { className } = setupTheme({
  userColors: { primary: '#F472B6' },
  fontFamily: "'Inter', sans-serif",
})
```

You can also override any variable in your own CSS, or restyle a component through its
selector export (e.g. `buttonSelector`), or with the `className` / `style` props every component accepts.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td style="text-align: center">
      <a href="https://github.com/dbgfribeiro">
        <img src="https://avatars.githubusercontent.com/u/44748017?v=4" width="100px;" alt="Diogo Ribeiro"/>
        <br />
        <sub><b>Diogo Ribeiro</b></sub>
      </a>
      <br />
      <sub>Principal designer & developer</sub>
    </td>
    <td style="text-align: center">
      <a href="https://github.com/samuthekid">
        <img src="https://avatars.githubusercontent.com/u/6068533?v=4" width="100px;" alt="Samuel Nunes"/>
        <br />
        <sub><b>Samuel Nunes</b></sub>
      </a>
      <br />
      <sub>Developer & maintainer</sub>
    </td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->