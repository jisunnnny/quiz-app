import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import more from "./base/more";
import font from "./base/font";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${more}
  ${font}
`;

export default GlobalStyle;
