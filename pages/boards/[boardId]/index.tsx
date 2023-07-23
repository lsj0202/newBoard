import React from "react";
import * as S from "./style";
import Image from "next/image";
import profileIcon from "../../images/profile.svg";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Tooltip } from "antd";
import Links from "../../images/board/detail/link.png";
import Locations from "../../images/board/detail/location.png";
import BoardCommentWrite from "../../../components/boards/write";
import BoardCommentList from "../../../components/boards/list";

const FEAT_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      contents
      title
      createdAt
      youtubeUrl
      likeCount
      dislikeCount
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function Boards() {
  const router = useRouter();

  const { data } = useQuery(FEAT_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  console.log(data);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickEdit = (e: React.MouseEvent) => {
    router.push(`${router.query.boardId}/edit`).then(() => router.reload());
  };
  const onClickDelete = async () => {
    const deleteB = await deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });
    console.log(deleteB);
    alert("목록 삭제가 완료되었습니다!");
    router.push("/boards");
  };
  const moveToList = () => {
    router.push("/boards").then(() => router.reload());
  };
  return (
    <S.Container>
      <S.Doc>
        <S.DocBorder>
          <S.HeaderContainer>
            <Image src={profileIcon} alt="" />
            <S.Profile>
              <S.Title>{data?.fetchBoard.writer}</S.Title>
              <S.CreateDate>{data?.fetchBoard.createdAt}</S.CreateDate>
            </S.Profile>
            <S.LeftBox>
              <Image src={Links} alt="" />

              <Tooltip
                placement="topRight"
                title={`${data?.fetchBoard.boardAddress?.address ?? ""} ${
                  data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }`}
              >
                <Image src={Locations} alt="" />
              </Tooltip>
            </S.LeftBox>
          </S.HeaderContainer>
          <S.Contents>
            <S.Text>{data?.fetchBoard.title}</S.Text>
          </S.Contents>

          <S.ContentsText>
            <S.content>{data?.fetchBoard.contents}</S.content>
            {data?.fetchBoard.youtubeUrl !== "" && (
              <S.Youtube
                url={data?.fetchBoard.youtubeUrl ?? ""}
                width="486px"
                height="240px"
              />
            )}
          </S.ContentsText>
        </S.DocBorder>
      </S.Doc>
      <BoardCommentWrite />
      <BoardCommentList />
      <S.ContainterButtons>
        <S.buttons>
          <S.button onClick={moveToList}>목록으로</S.button>
          <S.button onClick={onClickEdit}>수정하기</S.button>
          <S.button onClick={onClickDelete}>삭제하기</S.button>
        </S.buttons>
      </S.ContainterButtons>
    </S.Container>
  );
}
