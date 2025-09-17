'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import Chart from 'chart.js/auto';
import styled from '@emotion/styled';
import color from '@/packages/design-system/src/color';
import font from '@/packages/design-system/src/font';

type ChartDatum = { label: string; value: number; color: string };

type ChartComponentProps = {
  data?: ChartDatum[];
};

const ChartComponent = ({ data }: ChartComponentProps) => {
const canvasRef = useRef<HTMLCanvasElement>(null);
const chartRef = useRef<Chart | null>(null);

// 📊 차트 데이터
const chartData: ChartDatum[] = useMemo(() => {
  if (data && data.length > 0) return data;
  return [
    { label: '선지1', value: 34, color: '#FF3B3B' },
    { label: '선지2', value: 33, color: '#FF6D38' },
    { label: '선지3', value: 33, color: '#FFBE3C' }
  ];
}, [data]);

useEffect(() => {
  // 클라이언트 사이드에서만 실행
  if (typeof window === 'undefined' || !canvasRef.current) return;

  const ctx = canvasRef.current.getContext('2d');
  if (!ctx) return;

  // 기존 차트가 있으면 제거
  if (chartRef.current) {
    chartRef.current.destroy();
  }

  chartRef.current = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: chartData.map(item => item.label),
      datasets: [{
        data: chartData.map(item => item.value),
        backgroundColor: chartData.map(item => item.color),
        borderWidth: 2,
        borderColor: '#ffffff',
        hoverOffset: 8,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false, // 🚫 기본 범례 숨기기
        },
        tooltip: {
          backgroundColor: 'rgba(0,0,0,0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          cornerRadius: 8,
        }
      }
    }
  });

  // 컴포넌트 언마운트 시 차트 정리
  return () => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  };
}, [chartData]);

// 🎨 커스텀 선지 컴포넌트 (useEffect 밖으로!)
const CustomLegend = () => {
  return (
    <LegendBox>
      <LegendRowTop>
        {chartData.slice(0, 2).map((d) => (
          <LegendItem key={d.label}>
            <LegendDot style={{ backgroundColor: d.color }} />
            <LegendLabel>{d.label}</LegendLabel>
          </LegendItem>
        ))}
      </LegendRowTop>
      <LegendRowBottom>
        {chartData.slice(2).map((d) => (
          <LegendItem key={d.label}>
            <LegendDot style={{ backgroundColor: d.color }} />
            <LegendLabel>{d.label}</LegendLabel>
          </LegendItem>
        ))}
      </LegendRowBottom>
    </LegendBox>
  );
};

return (
    <Root>
      <ChartCard>
        <Canvas ref={canvasRef} id="myChart" />
      </ChartCard>
      <LegendWrap>
        <CustomLegend />
      </LegendWrap>
    </Root>
);
};

export default ChartComponent;

// Styled components for pixel-perfect publishing
const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const ChartCard = styled.div`
  width: 200px;
  height: 200px;
  background: ${color.white};
  border-radius: 200px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Canvas = styled.canvas`
  width: 100% !important;
  height: 100% !important;
`;

const LegendWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LegendBox = styled.div`
  background-color:${color.gray100};
  width: 318px;
  min-height: 94px;
  border-radius: 8px;
  padding: 10%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  row-gap: 12px;
`;

const LegendRowTop = styled.div`
  display: contents;
`;

const LegendRowBottom = styled.div`
  display: contents;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const LegendDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
`;

const LegendLabel = styled.span`
  font-family: ${font.P2};
  color:${color.black};
`;