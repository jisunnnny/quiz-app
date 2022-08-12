import { css } from "styled-components";

const font = css`
  body,
  button,
  input,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    font-feature-settings: "tnum";
    color: #333;
  }
  input {
    font-feature-settings: "tnum";
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      appearance: none;
    }
  }
`;

export default font;
