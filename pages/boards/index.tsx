import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as S from "./style";
import Pen from "../images/pen.svg";
import Image from "next/image";

const SEARCH = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;
export default function index() {
  const getDate = (date: string | number) => {
    const _date = new Date(date);
    const yyyy = _date.getFullYear();
    const mm = _date.getMonth() + 1;
    const dd = _date.getDate();
    return `${yyyy}-${mm}-${dd}`;
  };
  const router = useRouter();
  const { data } = useQuery(SEARCH);

  const moveToBoard = (e) => {
    router.push(`/boards/${e.target.id}`);
  };
  const moveToMain = () => {
    router.push("/boards/new");
  };
  console.log(data);
  return (
    <>
      <S.Table>
        <S.Body>
          <S.Container>
            <S.Number>ID</S.Number>
            <S.Title>제목</S.Title>
            <S.Writer>작성자</S.Writer>
            <S.Date>날짜</S.Date>
          </S.Container>
          {data?.fetchBoards.map((data: any) => (
            <S.ContainerBody key={data._id}>
              <S.Number>{String(data._id).slice(-4).toUpperCase()}</S.Number>
              <S.Title id={data._id} onClick={moveToBoard}>
                {data.title}
              </S.Title>
              <S.Writer>{data.writer}</S.Writer>
              <S.Date>{getDate(data.createdAt)}</S.Date>
            </S.ContainerBody>
          ))}
        </S.Body>
        <S.NewBoard>
          <Image src={Pen} alt="" />
          <S.Registration onClick={moveToMain}>게시글 등록하기</S.Registration>
        </S.NewBoard>
      </S.Table>
    </>
  );
}
