import React from 'react';
import styled from '@emotion/styled';



// EditInfo.tsx
export default function EditInfo({
  title,
  setTitle,
}: {
  title: string;
  setTitle: (v: string) => void;
}) {
  return (
    <Container>
      <Title>투표 제작하기</Title>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 작성해주세요"
      />
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap : 8px;
  max-width: 600px;
  width: 90%;
`

const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color : #FF9F1C;
`

const Input = styled.input`
  border: none;
  font-size: 23px;
  background-color: #ffffff;
  text-align: start;
  outline: none;
  width: 100%;
  

  color : #011627;
  font-weight: 600;

  ::placeholder {
    color: #B3B3B3;
    font-weight: 600;

  ::focus {
    outline: none;
  }

  
`