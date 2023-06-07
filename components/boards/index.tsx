import * as S from './style'
import { useState } from 'react'
import { useMutation, gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`

const EDIT_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!){
    updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId){
      _id
    }
  }
`
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function index(props) {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [createBoard] = useMutation(CREATE_BOARD);
  const [editBoard] = useMutation(EDIT_BOARD);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [complete, setComplete] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');

  const onChangeWriter = (e) => {
    const write = e.target.value;
    setWriter(write);
  }

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    console.log(password)
  }

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  }

  const onChangeContents = (e) => {
    const content = e.target.value;
    setContents(content);
  }

  const onClickEdit = async () => {
    try{
      const result = await editBoard({
        variables: {
          updateBoardInput: {
            title,
            contents
          },
          boardId: router.query.boardId,
          password
        }
      })
      console.log(data);
      router.push(`/boards/${router.query.boardId}`);
    } catch(error){
      alert(error.message);
    }
  }
  
  const onClickSubmit = async () => {
    if(!writer){
      setWriterError('이름을 작성해 주세요.');
      console.log(writerError);
    } if(!password){
      setPasswordError('비밀번호를 작성해 주세요.');
    } if(!title){
      setTitleError('제목을 작성해 주세요.');
    } if(!contents){
      setContentsError('내용을 작성해 주세요.');
    } if(writer && password && title && contents){
      try{
        const result = await createBoard({
          variables: {
            createBoardInput:{
              writer,
              password,
              title,
              contents,
            }
          }
        })
        router.push(`/boards`)
        console.log(result.data.createBoard._id);
      } catch(error){
        alert(error.message);
      }
    }
  }

  return (
    <S.Container>
      <S.Doc>
        <S.TitleDiv>
          게시물 {props.isEdit ? '수정' : '등록'}
        </S.TitleDiv>
        <S.WriteDiv>
          <S.Tag>
            <S.Text>작성자</S.Text>
            <S.Inputed type='text' placeholder='이름을 작성해주세요.' onChange={onChangeWriter} defaultValue={data?.fetchBoard.writer}/>
            <S.ErrorMessage>{writerError}</S.ErrorMessage>
          </S.Tag>
          <S.Tag>
            <S.Text>비밀번호</S.Text>
            <S.Inputed type='password' placeholder='비밀번호를 작성해주세요.' onChange={onChangePassword} defaultValue={data?.fetchBoard.password}/>
            <S.ErrorMessage>{passwordError}</S.ErrorMessage>
          </S.Tag>
        </S.WriteDiv>
        <S.TextDiv>
          <S.Tag2>
            <S.Text>제목</S.Text>
            <S.Inputed2 type='text' placeholder='제목을 작성해주세요.' onChange={onChangeTitle} defaultValue={data?.fetchBoard.title}/>
            <S.ErrorMessage>{titleError}</S.ErrorMessage>
          </S.Tag2>
        </S.TextDiv>
        <S.TextDiv2>
          <S.Tag2>
            <S.Text>내용</S.Text>
            <S.Inputed3 type='text' placeholder='내용을 작성해주세요.' onChange={onChangeContents} defaultValue={data?.fetchBoard.contents}/>
            <S.ErrorMessage>{contentsError}</S.ErrorMessage>
          </S.Tag2>
        </S.TextDiv2>
        <S.AddressDiv>
          <S.Tag2>
            <S.Text>주소</S.Text>
            <S.SectionAdd>
              <S.Inputed5 placeholder='07250'/>
              <S.BtnBlack>우편번호 검색</S.BtnBlack>
            </S.SectionAdd>
            <S.Tag2>
              <S.Inputed2 type='text'/>
            </S.Tag2>
            <S.Tag2>
              <S.Inputed2 type='text'/>
          </S.Tag2>
          </S.Tag2>
        </S.AddressDiv>
        <S.TextDiv>
          <S.Tag2>
            <S.Text>유튜브</S.Text>
            <S.Inputed2 type='text' placeholder='링크를 복사해주세요.'/>
          </S.Tag2>
        </S.TextDiv>
        <S.TextDiv3>
          <S.Tag2>
            <S.Text>사진첨부</S.Text>
            <S.Pictures>
              <S.Picture>
                <S.Plus>+</S.Plus>
                <S.Upload>upload</S.Upload>
              </S.Picture>

              <S.Picture>
                <S.Plus>+</S.Plus>
                <S.Upload>upload</S.Upload>
              </S.Picture>

              <S.Picture>
                <S.Plus>+</S.Plus>
                <S.Upload>upload</S.Upload>
              </S.Picture>
            </S.Pictures>
          </S.Tag2>
        </S.TextDiv3>
        <S.TextDiv3>
          <S.Tag2>
            <S.Text>메인설정</S.Text>
            <S.SectionAdded>
              <S.Log><S.Inputs type="radio" name="btn"/>유튜브</S.Log>
              <S.Inputs type="radio" name="btn"/>사진
            </S.SectionAdded>
          </S.Tag2>
        </S.TextDiv3>
        <S.TextDiv2>
          <S.Complete onClick={props.isEdit ? onClickEdit : onClickSubmit}>
          {props.isEdit ? '수정' : '등록'}하기
          </S.Complete>
        </S.TextDiv2>
      </S.Doc>
    </S.Container>
  )
}