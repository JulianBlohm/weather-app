import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --main-blue: #40798C;
  }

  body {
    font-size: 100%;
    font-family: 'Quicksand', sans-serif;  }
`
