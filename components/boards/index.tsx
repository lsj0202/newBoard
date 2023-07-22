import * as S from "./style";
import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { TextChange } from "typescript";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const EDIT_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
    }
  }
`;
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

interface Props {
  isEdit: boolean;
}

export default function index(props: Props) {
  interface EBoard {
    boardId: string | number;
    password: string | number;
  }

  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [createBoard] = useMutation(CREATE_BOARD);
  const [editBoard] = useMutation<EBoard>(EDIT_BOARD);

  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const [writerError, setWriterError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  const [contentsError, setContentsError] = useState<string>("");

  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [addressDetail, setAddressDetail] = useState<string>("");

  useEffect(() => {
    // Fetch된 데이터가 있을 때만 해당 상태 변수들을 업데이트합니다.
    if (data?.fetchBoard) {
      setWriter(data.fetchBoard.writer);
      setPassword(data.fetchBoard.password);
      setTitle(data.fetchBoard.title);
      setContents(data.fetchBoard.contents);
    }
  }, [data?.fetchBoard]);

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    const write = e.target.value;
    setWriter(write);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
    console.log(password);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTitle(title);
  };

  const onChangeContents = (e) => {
    const content = e.target.value;
    setContents(content);
  };

  const onClickEdit = async () => {
    try {
      const result = await editBoard({
        variables: {
          updateBoardInput: {
            title,
            contents,
          },
          boardId: router.query.boardId,
          password,
        },
      });
      console.log(data);
      router
        .push(`/boards/${router.query.boardId}`)
        .then(() => router.reload());
    } catch (error) {
      alert(error.message);
    }
  };
  const onChangeYoutubeUrl = (e: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(e.target.value);
  };

  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>): void => {
    setAddressDetail(e.target.value);
  };

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: any): void => {
    // 주소 저장
    console.log(data);
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("이름을 작성해 주세요.");
      console.log(writerError);
    }
    if (!password) {
      setPasswordError("비밀번호를 작성해 주세요.");
    }
    if (!title) {
      setTitleError("제목을 작성해 주세요.");
    }
    if (!contents) {
      setContentsError("내용을 작성해 주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        router.push(`/boards`).then(() => router.reload());
        console.log(result.data.createBoard._id);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <>
      {isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Container>
        <S.Doc>
          <S.TitleDiv>게시물 {props.isEdit ? "수정" : "등록"}</S.TitleDiv>
          <S.WriteDiv>
            <S.Tag>
              <S.Text>작성자</S.Text>
              <S.Inputed
                type="text"
                placeholder="이름을 작성해주세요."
                onChange={onChangeWriter}
                defaultValue={data?.fetchBoard.writer}
              />
              <S.ErrorMessage>{writerError}</S.ErrorMessage>
            </S.Tag>
            <S.Tag>
              <S.Text>비밀번호</S.Text>
              <S.Inputed
                type="password"
                placeholder="비밀번호를 작성해주세요."
                onChange={onChangePassword}
                defaultValue={data?.fetchBoard.password}
              />
              <S.ErrorMessage>{passwordError}</S.ErrorMessage>
            </S.Tag>
          </S.WriteDiv>
          <S.TextDiv>
            <S.Tag2>
              <S.Text>제목</S.Text>
              <S.Inputed2
                type="text"
                placeholder="제목을 작성해주세요."
                onChange={onChangeTitle}
                defaultValue={data?.fetchBoard.title}
              />
              <S.ErrorMessage>{titleError}</S.ErrorMessage>
            </S.Tag2>
          </S.TextDiv>
          <S.TextDiv2>
            <S.Tag2>
              <S.Text>내용</S.Text>
              <S.Inputed3
                placeholder="내용을 작성해주세요."
                onChange={onChangeContents}
                defaultValue={data?.fetchBoard.contents}
              />
              <S.ErrorMessage>{contentsError}</S.ErrorMessage>
            </S.Tag2>
          </S.TextDiv2>
          <S.AddressDiv>
            <S.Tag2>
              <S.Text>주소</S.Text>
              <S.SectionAdd>
                <S.Inputed5 // value가 있으면 default value 무시
                  placeholder="07250"
                  readOnly
                  value={
                    zipcode !== ""
                      ? zipcode
                      : data?.fetchBoard.boardAddress?.zipcode ?? ""
                  }
                />
                <S.BtnBlack onClick={onClickAddressSearch}>
                  우편번호 검색
                </S.BtnBlack>
              </S.SectionAdd>
              <S.Tag2>
                <S.Inputed2
                  type="text"
                  readOnly
                  value={
                    address !== ""
                      ? address
                      : data?.fetchBoard.boardAddress?.address ?? "" // ?? 는 null 또는 undefined일 경우 "" 으로 값을 대체함
                  } // value는 바꿀 수 없고 default value는 바꿀 수 있다.
                />
              </S.Tag2>
              <S.Tag2>
                <S.Inputed2
                  type="text"
                  onChange={onChangeAddressDetail}
                  defaultValue={
                    data?.fetchBoard.boardAddress?.addressDetail ?? ""
                  }
                />
              </S.Tag2>
            </S.Tag2>
          </S.AddressDiv>
          <S.TextDiv>
            <S.Tag2>
              <S.Text>유튜브</S.Text>
              <S.Inputed2
                type="text"
                placeholder="링크를 복사해주세요."
                onChange={onChangeYoutubeUrl}
              />
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
                <S.Log>
                  <S.Inputs type="radio" name="btn" />
                  유튜브
                </S.Log>
                <S.Inputs type="radio" name="btn" />
                사진
              </S.SectionAdded>
            </S.Tag2>
          </S.TextDiv3>
          <S.TextDiv2>
            <S.Complete onClick={props.isEdit ? onClickEdit : onClickSubmit}>
              {props.isEdit ? "수정" : "등록"}하기
            </S.Complete>
          </S.TextDiv2>
        </S.Doc>
      </S.Container>
    </>
  );
}
