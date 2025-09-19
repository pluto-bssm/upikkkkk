"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

const LoginPage = (): React.ReactElement => {
  const handleGoogleLogin = () => {
    const currentHost = window.location.origin;
    const redirectUri = `${currentHost}/login/oauth2/code/google`;
    
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
      `response_type=code&` +
      `client_id=659794985248-s017trlnodfo5ta9l3qf2lg3dbv9a7dd.apps.googleusercontent.com&` +
      `scope=profile%20email&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `state=local_dev`;
    
    window.location.href = googleAuthUrl;
  };

  return (
    <Container data-name="로그인">
      <ContentWrapper>
        <LogoSection>
          <LogoSubtext>재학생이 만드는 학교 가이드</LogoSubtext>
          <LogoImage>
            <img src="/svg/Logo.svg" alt="upik" />
          </LogoImage>
        </LogoSection>
        
        <LoginButton onClick={handleGoogleLogin}>
          <GoogleIcon />
          <ButtonText>구글로 로그인</ButtonText>
        </LoginButton>
        
        <FooterText>PLUTO</FooterText>
      </ContentWrapper>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  background-color: ${color.white};
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 40px 20px;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
`;

const LogoSubtext = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${color.black};
  text-align: center;
  margin: 0 0 20px 0;
  line-height: normal;
`;

const LogoImage = styled.div`
  width: 137px;
  height: 57px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 165px;
  height: 36px;
  border: 1px solid ${color.gray300};
  border-radius: 16px;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 160px;
  gap: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${color.gray50};
  }
`;

const GoogleIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDguMTgxODJWMTEuODE4MkgxNS40NTQ1QzE1LjIzNjMgMTMuMDE4MiAxNC40NTQ1IDE0IDEzLjI3MjcgMTQuNjM2NEwxNi4yMjczIDE2Ljk0NTVDMTguNDU0NSAxNC45MDkxIDIwIDEyLjI3MjcgMjAgMTBDMjAgOS4yNzI3MyAxOS45MDkxIDguNTQ1NDUgMTkuNzI3MyA3LjgxODE4SDEwWiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBkPSJNMTAgMjBDMTIuNzI3MyAyMCAxNC45MDkxIDE5LjA5MDkgMTYuMjI3MyAxNi45NDU1TDEzLjI3MjcgMTQuNjM2NEMxMi40NTQ1IDE1LjA5MDkgMTEuMzYzNiAxNS40NTQ1IDEwIDE1LjQ1NDVDNy4zNjM2NCAxNS40NTQ1IDUuMjI3MjcgMTMuNDE4MiA0LjU0NTQ1IDEwLjgxODJIMUwxLjM2MzY0IDEzLjIyNzNDMi43MjcyNyAxNi4wOTA5IDYuMDkwOTEgMjAgMTAgMjBaIiBmaWxsPSIjMzRBODUzIi8+CjxwYXRoIGQ9Ik00LjU0NTQ1IDEwLjgxODJDNC4xODE4MiA5LjkwOTA5IDQuMTgxODIgOC4wOTA5MSA0LjU0NTQ1IDcuMTgxODJWNC43NzI3M0gxQzAuMzYzNjM2IDYuMDQ1NDUgMCA3Ljk1NDU1IDAgMTBDMCAxMi4wNDU1IDAuMzYzNjM2IDEzLjk1NDUgMSAxNS4yMjczTDQuNTQ1NDUgMTAuODE4MloiIGZpbGw9IiNGQkJDMDQiLz4KPHBhdGggZD0iTTEwIDQuNTQ1NDVDMTEuNDU0NSA0LjU0NTQ1IDEyLjc3MjcgNS4wOTA5MSAxMy44MTgyIDYuMDkwOTFMMTYuNDA5MSAzLjVDMTQuODYzNiAyLjA0NTQ1IDEyLjc3MjcgMS4zNjM2NCAxMCAxLjM2MzY0QzYuMDkwOTEgMS4zNjM2NCAyLjcyNzI3IDQuOTA5MDkgMS4zNjM2NCA3LjgxODE4TDQuNTQ1NDUgMTAuODE4MkM1LjIyNzI3IDguMTgxODIgNy4zNjM2NCA2LjM2MzY0IDEwIDQuNTQ1NDVaIiBmaWxsPSIjRUE0MzM1Ii8+Cjwvc3ZnPgo=');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ButtonText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: ${color.gray300};
`;

const FooterText = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${color.gray200};
  text-align: center;
  margin: 0;
  position: absolute;
  bottom: 40px;
`;
