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
  D4: fontGenerator(600,19),

  H1: fontGenerator(400,15),
  H2: fontGenerator(400,14),
  H3: fontGenerator(400,13),
  H4: fontGenerator(400,12),
  H5: fontGenerator(400,11),
  H6: fontGenerator(400,10),

  H7: fontGenerator(700,15),
  H8: fontGenerator(700,14),
  H9: fontGenerator(700,13),
  H10: fontGenerator(700,12),
  H11: fontGenerator(700,11),
  H12: fontGenerator(700,10),

  p1: fontGenerator(400,10),
  p2: fontGenerator(400,8),
  p3: fontGenerator(400,6),

  btn1: fontGenerator(400,12),
  btn2: fontGenerator(400,10),
  btn3: fontGenerator(400,8),
};

export default font;