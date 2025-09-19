"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

const OAuth2CallbackPage = (): React.ReactElement => {
  const router = useRouter();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      router.push('/');
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Container>
      <LoadingSection>
        <Spinner />
        <Title>로그인 처리 중...</Title>
        <Description>메인 페이지로 이동합니다</Description>
      </LoadingSection>
    </Container>
  );
};

export default OAuth2CallbackPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: ${color.white};
  max-width: 600px;
  margin: 0 auto;
`;

const LoadingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${color.gray200};
  border-top: 3px solid ${color.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Title = styled.h2`
  ${font.H2}
  color: ${color.black};
  margin: 0;
`;

const Description = styled.p`
  ${font.H4}
  color: ${color.gray600};
  margin: 0;
`;
