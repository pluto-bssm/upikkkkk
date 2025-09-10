import { css } from '@emotion/react';

const fontGenerator = (
  weight: number,
  size: number,
) => css`
  font-family: 'Pretendard Variable';
  font-weight: ${weight};
  font-size: ${size}px;
`;

const font = {
  D1: fontGenerator(700, 28),
  D2: fontGenerator(700, 22),
  D3: fontGenerator(700, 20),

  P1: fontGenerator(400,15),
  P2: fontGenerator(400,14),
  P3: fontGenerator(400,13),
  P4: fontGenerator(400,12),
  P5: fontGenerator(400,11),
  P6: fontGenerator(400,10),

  P7: fontGenerator(700,15),
  P8: fontGenerator(700,14),
  P9: fontGenerator(700,13),
  P10: fontGenerator(700,12),
  P11: fontGenerator(700,11),
  P12: fontGenerator(700,10),

  P13: fontGenerator(600, 15),
  P14: fontGenerator(600, 14),
  P15: fontGenerator(600, 13),
  P16: fontGenerator(600, 12),
  P17: fontGenerator(600, 11),
  P18: fontGenerator(600, 10),

  P19: fontGenerator(400, 15),
  P20: fontGenerator(400, 14),
  P21: fontGenerator(400, 13),
  P22: fontGenerator(400, 12),
  P23: fontGenerator(400, 11),
  P24: fontGenerator(400, 10),

  p1: fontGenerator(500,10),
  p2: fontGenerator(500,8),
  p3: fontGenerator(500,6),

  btn1: fontGenerator(500,12),
  btn2: fontGenerator(500,10),
  btn3: fontGenerator(500,8),
};

export default font;