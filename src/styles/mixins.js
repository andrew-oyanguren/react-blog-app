import { css } from 'styled-components';

const container = css`
  width: 100%;
  max-width: 1200px;
`;

const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const flex = css`
  display: flex;
  align-items: center;
`;

const flexColumn = css`
  ${flex}
  flex-direction: column;
  justify-content: center;
`;

const flexCenter = css`
  ${flex}
  justify-content: center;
`;

const flexSpaceBetween = css`
  ${flex}
  justify-content: space-between;
  align-items: center;
`;

const flexSpaceEvenly = css`
  ${flex}
  justify-content: space-evenly;
`;

const mixins = {
  container,
  absoluteCenter,
  flex,
  flexColumn,
  flexCenter,
  flexSpaceBetween,
  flexSpaceEvenly,
};

export default mixins;