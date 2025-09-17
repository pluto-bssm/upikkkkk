import React from 'react';
import styled from '@emotion/styled';

export default function Ballot({
  Info,
  value,
  onChange,
  minusBallot,
}: {
  Info: string;
  value: string;
  onChange: (v: string) => void;
  minusBallot: () => void;
}) {
  return (
    <Container>
      <BallotForm>
        <CountDiv>
          <Infos>{Info}</Infos>
        </CountDiv>
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="선지를 입력해주세요"
        />
        <StyledImage src="/svg/Close.svg" alt="close" width={24} height={24} onClick={minusBallot} />
      </BallotForm>
    </Container>
  );
}


const CountDiv = styled.div`
    background-color : #E6E6E6;
    width : 40px;
    height : 40px;

    display : flex;

    border-radius : 50%;

    align-items: center;
    justify-content: center;

    aspect-ratio: 1;

`
const StyledImage = styled.img`
  filter: invert(86%) sepia(5%) saturate(0%) hue-rotate(284deg) brightness(88%) contrast(78%);
`;


const Infos = styled.span`
    font-weight : 500;
    color : #B3B3B3;

`

const BallotForm = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;

    align-items : center;
    justify-content : center; 
` 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  max-width: 600px;
  width: 100%;

  border-radius : 16px;

  padding :12px 20px;

  border : 1px solid #B3B3B3;
  
`
const Input = styled.input`
    background-color : #FFFFFF;
    width: 100%;

    border :none;
    outline : none;
    color : #011627;

    font-size : 15px;
    font-weight : 600;

    padding : 0px 8px;
    
    :: placeholder{
    color : #B3B3B3;
    }

`
