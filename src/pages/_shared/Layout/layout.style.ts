import styled from "styled-components";

const CommonLayout = styled.div`
  width: 100wh;
  height: 100vh;
`;

const ContentsBox = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  max-width: 300px;
  margin: 0 auto;
`;

export { CommonLayout, ContentsBox };
