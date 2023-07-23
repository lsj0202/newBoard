import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    list-style: none;
    font-size: 20px;
    font-weight: 400;
    font-family: "myFont";
  }

  @font-face {
    font-family: "myFont";
    src: url("/fonts/NanumPenScript-Regular.ttf");
  }
`;
