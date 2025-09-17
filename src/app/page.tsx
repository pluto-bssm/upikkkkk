'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/Main')
  }, [router])
  
  return (
    <MainPageLayout>
      <Header LeftItem={
        <img
          src="/svg/Logo.svg"
          width={50}
          height={50}
        />
      }
        RightItem={<HeaderItemsBox type={'main'} />}
        types='None' />


      <ContentArea>
        <div>스크롤해서 sticky 테스트</div>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
            콘텐츠 {i + 1}
          </div>
        ))}
      </ContentArea>

      <NavigationBar />
    </MainPageLayout>
  );
}
