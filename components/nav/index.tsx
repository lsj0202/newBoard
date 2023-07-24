import React from "react";
import * as S from "./style";
import { useRouter } from "next/router";

const dummy = [
  { page: "/boards", name: "라이브게시판" },
  { page: "/markets", name: "라이브마켓" },
  { page: "/mypages", name: "마이페이지" },
  { page: "/payments", name: "결제페이지" },
];
const index = () => {
  const router = useRouter();

  const onClickMenu = (e: any) => {
    router.push(e.target.id);
  };
  return (
    <S.Nav>
      <S.Nav2>
        {dummy.map((el, i) => (
          <S.Items key={i}>
            <S.Item id={el.page} onClick={onClickMenu}>
              {el.name}
            </S.Item>
          </S.Items>
        ))}
      </S.Nav2>
    </S.Nav>
  );
};

export default index;
