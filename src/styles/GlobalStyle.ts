import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* fonts */
  @font-face {
    font-family: 'ADLaMDisplay';
    src: url('/fonts/ADLaMDisplay-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  a{
    text-decoration: none;
  }

  input {
    outline: none;
  }
`;

export default GlobalStyle;

