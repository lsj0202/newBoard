import styled from "@emotion/styled";

export const Table = styled.table`
  width: 70%;
  height: 630px;
  margin: 0 auto;
  margin-top: 50px;
`;
export const Container = styled.tr`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;

export const ContainerBody = styled.tr`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;
export const Number = styled.td`
  width: 7%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const Title = styled.td`
  width: 51%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const Writer = styled.td`
  width: 35%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const Date = styled.td`
  width: 12%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const Body = styled.tbody``;

export const NewBoard = styled.div`
  width: 170px;
  height: 40px;
  border: 1px solid silver;
  border-radius: 8px;
  display: flex;
  margin-bottom: 10px;
  padding-left: 10px;
  &:hover {
    background-color: #ffd400;
    cursor: pointer;
    border: none;
  }
`;
export const Registration = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const Div = styled.div`
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: space-between;
`;
