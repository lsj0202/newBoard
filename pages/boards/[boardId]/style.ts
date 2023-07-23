import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 205vh;
  display: flex;
  flex-direction: column;
`;
export const Doc = styled.div`
  width: 60%;
  height: 120vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DocBorder = styled.div`
  width: 80%;
  height: 110vh;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;
export const Profile = styled.div`
  width: 40%;
  height: 10vh;
  font-size: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.div`
  margin: 0 0 3px 15px;
  font-size: 20px;
`;
export const CreateDate = styled.div`
  margin-left: 15px;
  color: #828282;
`;
export const Contents = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: end;
`;
export const Text = styled.h2`
  font-weight: 500;
`;
export const ContentsText = styled.div`
  width: 100%;
  height: 30vh;
`;
export const content = styled.div`
  padding-top: 20px;
`;

export const ContainterButtons = styled.div`
  width: 60%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const buttons = styled.div`
  width: 80%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const button = styled.div`
  border: 1px solid #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 45px;
  margin-right: 25px;
  cursor: pointer;
  &:active {
    background-color: #bdbdbd;
    color: white;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  margin-left: 45%;
`;

export const Youtube = styled(ReactPlayer)`
  // 리액트 영상 라이브러리
  margin: auto;
`;
