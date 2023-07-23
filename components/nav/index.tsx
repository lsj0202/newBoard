import React from "react";
import * as S from "./style";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  return (
    <S.Nav>
      <S.Nav2>
        <S.Items>
          <S.Item>라이브 게시판</S.Item>
        </S.Items>
        <S.Items>
          <S.Item>라이브 상품</S.Item>
        </S.Items>
        <S.Items>
          <S.Item>마이페이지</S.Item>
        </S.Items>
      </S.Nav2>
    </S.Nav>
  );
};

export default index;
