import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  red: '#E66767',
  lightBeige: '#FFF8F2',
  beige: '#FFEBD9',
  yellow: '#FFB930'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.lightBeige};
    color: ${colors.red};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 8px;
  }

  a {
    text-decoration: none;
  }
`
