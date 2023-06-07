import React, { ChangeEvent } from 'react'
import * as S from './style'
import Image from 'next/image'
import profileIcon from '../../images/profile.svg'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

const FEAT_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId){
      _id
      writer
      contents
      title
      createdAt
    }
  }
`
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`

export default function Boards() {
  const router = useRouter();

  const { data } = useQuery(FEAT_BOARD, {
    variables: {
      boardId: router.query.boardId
    }
  });
  console.log(data);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickEdit = (e: React.MouseEvent) => {
    router.push(`${router.query.boardId}/edit`)
  }
  const onClickDelete = async () => {
    const deleteB = await deleteBoard({
      variables: {
        boardId: router.query.boardId
      }
    })
    console.log(deleteB);
    alert('목록 삭제가 완료되었습니다!');
    router.push('/boards')
  }
  const moveToList = () => {
    router.push('/boards')
  }
  return (
    <S.Container>
      <S.Doc>
        <S.DocBorder>
          <S.HeaderContainer>
            <Image src={profileIcon}/>
            <S.Profile>
              <S.Title>{data?.fetchBoard.writer}</S.Title>
              <S.CreateDate>{data?.fetchBoard.createdAt}</S.CreateDate>
            </S.Profile>
          </S.HeaderContainer>
          <S.Contents>
            <S.Text>
              {data?.fetchBoard.title}
            </S.Text>
          </S.Contents>
          <S.ContentsText>
            <S.content>
              {data?.fetchBoard.contents}
            </S.content>
          </S.ContentsText>
        </S.DocBorder>
      </S.Doc>
      <S.ContainterButtons>
        <S.buttons>
          <S.button onClick={moveToList}>목록으로</S.button>
          <S.button onClick={onClickEdit}>수정하기</S.button>
          <S.button onClick={onClickDelete}>삭제하기</S.button>
        </S.buttons>
      </S.ContainterButtons>
    </S.Container>
  )
}
