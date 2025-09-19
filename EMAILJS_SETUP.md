# EmailJS 설정 가이드

## 개요
EmailJS를 사용하여 클라이언트 사이드에서 직접 `pluto.bssm@gmail.com`으로 문의 이메일을 전송합니다.

## 설정 단계

### 1. EmailJS 계정 생성
1. https://www.emailjs.com/ 접속
2. 계정 생성 및 로그인

### 2. Email Service 설정
1. Dashboard → Email Services → Add New Service
2. Gmail 선택
3. Service ID 기록 (예: service_abc123)
4. Gmail 계정 연결

### 3. Email Template 생성
1. Dashboard → Email Templates → Create New Template
2. Template ID 기록 (예: template_xyz789)
3. 다음 템플릿 사용:

```
Subject: [{{inquiry_type}}] {{subject}}

안녕하세요,

{{from_name}}님으로부터 문의가 도착했습니다.

문의 유형: {{inquiry_type}}
제목: {{subject}}
이메일: {{from_email}}
전송 시간: {{timestamp}}

문의 내용:
{{message}}

---
답변은 {{reply_to}}로 보내주세요.
```

### 4. Public Key 확인
1. Dashboard → Account → General
2. Public Key 복사 (예: abc123xyz789)

### 5. 환경 변수 설정
`.env.local` 파일에 다음 내용 추가:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123xyz789
```

## 템플릿 변수 설명

| 변수 | 설명 | 예시 |
|------|------|------|
| `to_email` | 수신 이메일 | pluto.bssm@gmail.com |
| `from_name` | 발신자 이름 | 홍길동 |
| `from_email` | 발신자 이메일 | user@example.com |
| `inquiry_type` | 문의 유형 | 일반 문의 |
| `subject` | 문의 제목 | 로그인 문제 |
| `message` | 문의 내용 | 로그인이 안 됩니다... |
| `timestamp` | 전송 시간 | 2024.1.15 오후 3:30:25 |
| `reply_to` | 답장 이메일 | user@example.com |

## 사용 방법

### useInquiry 훅 사용
```tsx
import { useInquiry } from '@/hooks/useInquiry';

const { submitInquiry, loading, error } = useInquiry();

const handleSubmit = async () => {
  const result = await submitInquiry({
    title: '문의 제목',
    content: '문의 내용',
    type: '일반 문의',
    email: 'user@example.com'
  });
  
  if (result.success) {
    console.log('전송 성공');
  } else {
    console.error('전송 실패:', result.error);
  }
};
```

## 주의사항

1. **환경 변수**: `NEXT_PUBLIC_` 접두사로 클라이언트에서 접근 가능
2. **보안**: Public Key는 클라이언트에 노출되므로 도메인 제한 설정 권장
3. **제한**: EmailJS 무료 플랜은 월 200회 전송 제한
4. **템플릿**: 이메일 템플릿의 변수명과 코드의 templateParams 키가 일치해야 함

## 트러블슈팅

### 전송 실패 시 확인사항
1. 환경 변수 설정 확인
2. EmailJS 서비스 상태 확인
3. 템플릿 변수명 일치 확인
4. 브라우저 콘솔에서 에러 메시지 확인

### 일반적인 오류
- `Invalid service ID`: SERVICE_ID 확인
- `Invalid template ID`: TEMPLATE_ID 확인  
- `Invalid public key`: PUBLIC_KEY 확인
- `Template not found`: 템플릿 ID 및 활성화 상태 확인

## 개발자 노트

EmailJS는 클라이언트 사이드에서 직접 이메일을 전송하므로:
- 서버 설정 불필요
- CORS 문제 없음
- 간단한 설정
- 빠른 구현 가능

단점:
- API 키가 클라이언트에 노출
- 전송량 제한
- 고급 기능 제한
