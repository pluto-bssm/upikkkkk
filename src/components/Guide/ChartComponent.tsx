'use client';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
const canvasRef = useRef<HTMLCanvasElement>(null);
const chartRef = useRef<Chart | null>(null);

// 📊 차트 데이터 (한 곳에서 관리)
const chartData = [
  { label: '선지1', value: 34, color: '#FF3B3B' },
  { label: '선지2', value: 33, color: '#FF6D38' },
  { label: '선지3', value: 33, color: '#FFBE3C' }
];

useEffect(() => {
  // 클라이언트 사이드에서만 실행
  if (typeof window === 'undefined' || !canvasRef.current) return;

  const ctx = canvasRef.current.getContext('2d');
  if (!ctx) return;

  // 기존 차트가 있으면 제거
  if (chartRef.current) {
    chartRef.current.destroy();
  }

  const total = chartData.reduce((sum, item) => sum + item.value, 0);

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
          callbacks: {
            label: function(context: any) {
              const percentage = ((context.parsed / total) * 100).toFixed(0);
              return `${context.label}: ${percentage}% (${context.parsed}명)`;
            }
          }
        }
      }
    },
    // 🎯 커스텀 플러그인으로 퍼센티지 표시
    plugins: [{
      id: 'centerText',
      afterDatasetsDraw: function(chart: any) {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        
        chart.data.datasets.forEach((dataset: any, i: number) => {
          const meta = chart.getDatasetMeta(i);
          
          meta.data.forEach((element: any, index: number) => {
            const value = dataset.data[index];
            const percentage = ((value / total) * 100).toFixed(0);
            
            // 각 섹션의 중심점 계산
            const model = element;
            const startAngle = model.startAngle;
            const endAngle = model.endAngle;
            const midAngle = startAngle + (endAngle - startAngle) / 2;
            
            // 반지름 계산 (차트 중심에서 70% 지점)
            const radius = (model.outerRadius - model.innerRadius) * 0.7 + model.innerRadius;
            
            // 텍스트 위치 계산
            const x = model.x + Math.cos(midAngle) * radius;
            const y = model.y + Math.sin(midAngle) * radius;
            
            // 텍스트 스타일 설정
            ctx.save();
            ctx.fillStyle = 'white';
            ctx.font = 'bold 18px Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // 텍스트에 그림자 효과 추가 (가독성 향상)
            ctx.shadowColor = 'rgba(0,0,0,0.7)';
            ctx.shadowBlur = 3;
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 1;
            
            // 퍼센티지 표시
            ctx.fillText(`${percentage}%`, x, y - 10);
            
            // 인원수 표시
            ctx.font = 'bold 14px Arial, sans-serif';
            ctx.fillText(`(${value}명)`, x, y + 10);
            
            ctx.restore();
          });
        });
      }
    }]
  });

  // 컴포넌트 언마운트 시 차트 정리
  return () => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  };
}, []);

// 🎨 커스텀 선지 컴포넌트 (이미지와 동일)
const CustomLegend = () => {
  return (
    <div 
      className="rounded-lg p-4"
      style={{ 
        backgroundColor: '#e6e6e6',
        width: '318px',
        height: '94px'
      }}
    >
      {/* 첫 번째 행: 선지1, 선지2 */}
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <div 
            className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: '#FF3B3B' }}
          ></div>
          <span 
            className="text-sm"
            style={{ 
              fontFamily: 'Pretendard',
              fontWeight: 400,
              fontSize: '14px',
              color: '#011627'
            }}
          >
            선지1
          </span>
        </div>
        
        <div className="flex items-center">
          <div 
            className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: '#FF6D38' }}
          ></div>
          <span 
            className="text-sm"
            style={{ 
              fontFamily: 'Pretendard',
              fontWeight: 400,
              fontSize: '14px',
              color: '#011627'
            }}
          >
            선지2
          </span>
        </div>
      </div>
      
      {/* 두 번째 행: 선지3 */}
      <div className="flex items-center">
        <div 
          className="w-3 h-3 rounded-full mr-2" 
          style={{ backgroundColor: '#FFBE3C' }}
        ></div>
        <span 
          className="text-sm"
          style={{ 
            fontFamily: 'Pretendard',
            fontWeight: 400,
            fontSize: '14px',
            color: '#011627'
          }}
        >
          선지3
        </span>
      </div>
    </div>
  );
};

return (
  <div className="flex flex-col items-center gap-8 p-8">
    {/* 🎯 차트 영역 */}
    <div className="flex justify-center items-start">
      <div className="w-80 h-80 bg-white rounded-xl shadow-lg p-6">
        <canvas ref={canvasRef} id="myChart" />
      </div>
    </div>

    {/* 📊 커스텀 선지 영역 */}
    <div className="flex justify-center">
      <CustomLegend />
    </div>
  </div>
);
};

export default ChartComponent;