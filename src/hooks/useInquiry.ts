import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface InquiryData {
  title: string;
  content: string;
  type: string;
  email: string;
  userName?: string;
}

interface InquiryResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export function useInquiry() {
  const [loading, setLoading] = useState(false);

  const submitInquiry = async (data: InquiryData): Promise<InquiryResponse> => {
    setLoading(true);
    
    try {
      // EmailJS 초기화
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

      const templateParams = {
        from_name: data.userName || '익명 사용자',
        from_email: data.email,
        inquiry_type: data.type,
        subject: data.title,
        message: data.content,
        reply_to: data.email,
        timestamp: new Date().toLocaleString('ko-KR')
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      );

      return {
        success: true,
        message: '문의가 성공적으로 전송되었습니다.'
      };
    } catch (error) {
      console.error('EmailJS 전송 에러:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : '문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.'
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    submitInquiry,
    loading
  };
}