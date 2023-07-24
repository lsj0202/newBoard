import React from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import Carousel from "../carousel";
import Nav from "../nav";

const index = () => {
  const router = useRouter();
  return (
    <>
      <S.Header>
        <S.HeaderDiv>
          <S.LeftDiv
            onClick={() => {
              router.push("/boards");
            }}
          >
            👋🏼 LIVE
          </S.LeftDiv>
          <S.RightDiv>
            <S.RightDiv2
              onClick={() => {
                router.push("/login");
              }}
            >
              로그인
            </S.RightDiv2>
            <S.RightDiv2
              onClick={() => {
                router.push("/register");
              }}
            >
              회원가입
            </S.RightDiv2>
          </S.RightDiv>
        </S.HeaderDiv>
      </S.Header>
      <Carousel />
      <Nav />
    </>
  );
};

export default index;
