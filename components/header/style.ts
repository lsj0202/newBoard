import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  height: 90px;
  background-color: #c7d3ef;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderDiv = styled.div`
  width: 90%;
  height: 90px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftDiv = styled.div`
  width: 10vw;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const RightDiv = styled.div`
  width: 12vw;
  height: 60%;
  display: flex;
  cursor: pointer;
`;

export const RightDiv2 = styled.div`
  width: 6vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active {
    color: gray;
  }
`;
