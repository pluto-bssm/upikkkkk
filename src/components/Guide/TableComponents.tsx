'use client'

import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import { mockMainGuideData } from "@/mock/MoreGuide";
import font from "@/packages/design-system/src/font";
 

const TableComponents = () => {
  const guide = mockMainGuideData[0]; 

  return (
    <GuidePageLayout>
        
      <OptionsList>
        {guide.option.map((opt, idx) => {
          const percent = opt.percent;
          const size = Math.round(56 + (percent / 100) * (96 - 56)); // 56px ~ 96px
          const stroke = 8;
          const radius = (size - stroke) / 2;
          const circumference = 2 * Math.PI * radius;
          const dash = (percent / 100) * circumference;
          const colorToken = idx % 3 === 0 ? color.primary : idx % 3 === 1 ? color.secondary : color.accent;

          return (
            <OptionRow key={opt.label}>
              <ChartWrapper style={{ width: size, height: size }}>
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                  <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke={color.gray100}
                      strokeWidth={stroke}
                    />
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke={colorToken}
                      strokeWidth={stroke}
                      strokeLinecap="round"
                      strokeDasharray={`${dash} ${circumference - dash}`}
                    />
                  </g>
                </svg>
                <CenterText>
                  <PercentText>{percent}%</PercentText>
                </CenterText>
              </ChartWrapper>

              <Meta>
                <OptionLabel>{opt.label}</OptionLabel>
              </Meta>
            </OptionRow>
          );
        })}
      </OptionsList>
    </GuidePageLayout>
  );
}

export default TableComponents;

const GuidePageLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  background-color : ${color.white};
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
`;

const OptionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ChartWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const CenterText = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PercentText = styled.span`
  color: ${color.black};
  ${font.P8};
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionLabel = styled.span`
  color: ${color.gray700};
  font-family: ${font.P5};
`;
