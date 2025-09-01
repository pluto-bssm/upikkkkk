'use client'

import Header from '@/components/common/Header'
import NavigationBar from '@/components/common/NavigationBar'
import styled from '@emotion/styled'
import HeaderItemsBox from '@/components/Header/HeaderItemBox'
import color from '@/packages/design-system/src/color'
import font from '@/packages/design-system/src/font'

const RecoVote = () => {
  return (
    <RecoVotePageLayout>
        <Text fontType={font.p1} color={color.primary}>오늘의 추천 투표는?</Text>
    
    </RecoVotePageLayout>
  );
}


export default RecoVote;

const RecoVotePageLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  background-color : ${color.white};
  
`


const ContentArea = styled.div`
  width: 100%;
  flex: 1;
  margin-top : 100px;
`;