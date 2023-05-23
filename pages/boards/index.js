import React from 'react'
import * as S from './style'

export default function index() {
  return (
    <S.Container>
      <S.Doc>
        <S.TitleDiv>
          게시물 등록
        </S.TitleDiv>
        <S.WriteDiv>
          <S.Tag>
            <S.Text>작성자</S.Text>
            <S.Inputed type='text' placeholder='이름을 작성해주세요.'/>
          </S.Tag>
          <S.Tag>
            <S.Text>비밀번호</S.Text>
            <S.Inputed type='text' placeholder='비밀번호를 작성해주세요.'/>
          </S.Tag>
        </S.WriteDiv>
        <S.TextDiv>
          <S.Tag2>
            <S.Text>제목</S.Text>
            <S.Inputed2 type='text' placeholder='제목을 작성해주세요.'/>
          </S.Tag2>
        </S.TextDiv>
        <S.TextDiv2>
          <S.Tag2>
            <S.Text>내용</S.Text>
            <S.Inputed3 type='text' placeholder='내용을 작성해주세요.'/>
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
          <S.Complete>
            등록하기
          </S.Complete>
        </S.TextDiv2>
      </S.Doc>
    </S.Container>
  )
}