import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode"; // 우편 번호

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220vh;
`;
export const Doc = styled.div`
  width: 60%;
  height: 180vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const TitleDiv = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 400;
`;
export const WriteDiv = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Inputed = styled.input`
  width: 24vw;
  height: 40px;
  border-radius: #bdbdbd;
  padding: 10px;
  margin-top: 10px;
`;
export const Tag = styled.div`
  width: 40%;
  height: 80px;
`;
export const Text = styled.span`
  color: black;
`;
export const TextDiv = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Inputed2 = styled.input`
  margin-top: 10px;
  width: 51.5vw;
  height: 40px;
  padding: 10px;
`;
export const Tag2 = styled.div`
  width: 86%;
  height: 80px;
  display: flex;
  flex-direction: column;
`;
export const TextDiv2 = styled.div`
  width: 100%;
  height: 38vh;
  display: flex;
  justify-content: center;
`;
export const Inputed3 = styled.textarea`
  margin-top: 10px;
  padding: 10px;
  width: 51.5vw;
  height: 100px;
  resize: none;
  padding: 10px 0px 200px 10px;
  overflow-y: hidden;
`;
export const AddressDiv = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
`;
export const Inputed4 = styled.input`
  width: 5vw;
  padding-left: 15px;
  height: 5vh;
  margin-top: 10px;
  overflow-y: hidden;
`;
export const SectionAdd = styled.div`
  margin-top: 10px;
  width: 29vh;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Inputed5 = styled.input`
  width: 75px;
  height: 5vh;
  padding-left: 15px;
`;
export const BtnBlack = styled.button`
  width: 110px;
  height: 5vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextDiv3 = styled.div`
  width: 100%;
  height: 18vh;
  display: flex;
  justify-content: center;
`;
export const Pictures = styled.div`
  width: 50%;
  height: 100px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;
export const Picture = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: gray;
  margin: 0 20px 0 0;
`;
export const Plus = styled.div`
  font-size: 25px;
  color: black;
`;
export const Upload = styled.div`
  font-size: 15px;
  color: black;
`;
export const Inputs = styled.input`
  &:hover {
    cursor: pointer;
  }
  accent-color: #ffd600;
`;
export const SectionAdded = styled.div`
  width: 18vw;
  height: 10vh;
  display: flex;
  align-items: center;
`;
export const Log = styled.div`
  width: 6vw;
`;
export const Complete = styled.button`
  width: 10vw;
  height: 5vh;
  border: none;
  background-color: #ffd600;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: orange;
  }
`;
export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const AddressModal = styled(Modal)``; // 라이브러리 이모션으로 감싸기

export const AddressSearchInput = styled(DaumPostcode)``; // 라이브러리 이모션으로 감싸기

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
