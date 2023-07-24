import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState, MouseEvent, ChangeEvent } from "react";
import * as S from "./style";
import Image from "next/image";
import Avartar from "../../../pages/images/profile.svg";
import Update from "../../../pages/images/board/list/option_update_icon.png";
import Delete from "../../../pages/images/board/list/option_delete_icon.png";
import Write from "../write";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

const index = () => {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  const getDate = (date: string | number) => {
    const _date = new Date(date);
    const yyyy = _date.getFullYear();
    const mm = _date.getMonth() + 1;
    const dd = _date.getDate();
    return `${yyyy}-${mm}-${dd}`;
  };

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [password, setPassword] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>
  ): void => {
    setBoardCommentId(event.currentTarget.id);
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {isOpenDeleteModal && (
        <S.PasswordModal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {data?.fetchBoardComments.map((el: any) => (
        <>
          {isEdit ? (
            <Write isEdit={isEdit} />
          ) : (
            <S.ItemWrapper key={el._id}>
              <S.FlexWrapper>
                <Image src={Avartar} alt="" />
                <S.MainWrapper>
                  <S.WriterWrapper>
                    <S.Writer>{el.writer}</S.Writer>
                    <S.Star value={el.rating} disabled />
                  </S.WriterWrapper>
                  <S.Contents>{el.contents}</S.Contents>
                </S.MainWrapper>
                <S.OptionWrapper>
                  <Image
                    src={Update}
                    alt=""
                    width={40}
                    height={10}
                    onClick={() => {
                      setIsEdit(!isEdit);
                    }}
                  />
                  <Image
                    id={el._id}
                    src={Delete}
                    alt=""
                    onClick={onClickOpenDeleteModal}
                    width={40}
                    height={10}
                  />
                </S.OptionWrapper>
              </S.FlexWrapper>
              <S.DateString>{getDate(el?.createdAt)}</S.DateString>
            </S.ItemWrapper>
          )}
        </>
      ))}
    </div>
  );
};

export default index;
