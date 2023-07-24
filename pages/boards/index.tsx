import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as S from "./style";
import Pen from "../images/pen.svg";
import Image from "next/image";

const SEARCH = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function index() {
  const [startPage, setStartPage] = useState(1);

  const getDate = (date: string | number) => {
    const _date = new Date(date);
    const yyyy = _date.getFullYear();
    const mm = _date.getMonth() + 1;
    const dd = _date.getDate();
    return `${yyyy}-${mm}-${dd}`;
  };
  const router = useRouter();
  const { data, refetch } = useQuery(SEARCH, { variables: { page: 1 } });
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const moveToBoard = (e: any) => {
    router.push(`/boards/${e.target.id}`);
  };
  const moveToMain = () => {
    router.push("/boards/new");
  };
  console.log(data);

  const onClickPage = (e: any) => {
    refetch({ page: Number(e.target.id) });
  };

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPrevPage = () => {
    if (startPage < 2) return;
    setStartPage((prev) => prev - 10);
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  };

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
          {data?.fetchBoards?.map((el) => (
            <S.ContainerBody key={el._id}>
              <S.Number>{String(el._id).slice(-4).toUpperCase()}</S.Number>
              <S.Title id={el._id} onClick={moveToBoard}>
                {el.title}
              </S.Title>
              <S.Writer>{el.writer}</S.Writer>
              <S.Date>{getDate(el.createdAt)}</S.Date>
            </S.ContainerBody>
          ))}
        </S.Body>
        <S.Div>
          <S.Spand onClick={onClickPrevPage}> {"<"} </S.Spand>

          {Array(10)
            .fill(1)
            .map((el, index) => (
              <S.Spand
                onClick={onClickPage}
                id={String(index + startPage)}
                key={index + startPage}
              >
                {` ${index + startPage} `}
              </S.Spand>
            ))}

          <S.Spand onClick={onClickNextPage}> {">"} </S.Spand>
          <S.NewBoard>
            <Image src={Pen} alt="" />
            <S.Registration onClick={moveToMain}>
              게시글 등록하기
            </S.Registration>
          </S.NewBoard>
        </S.Div>
      </S.Table>
    </>
  );
}
