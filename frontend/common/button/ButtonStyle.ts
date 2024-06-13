import styled, { css } from "styled-components";

const Default = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-block: 13px;

  font-weight: 700;
  line-height: 17px;

  border: none;

  box-shadow: 2px 2px 5px 1px rgba(62, 78, 82, 0.4),
    inset -2px -2px 3px rgba(106, 106, 106, 0.25),
    inset 2px 2px 3px rgba(255, 255, 255, 0.5);

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const color = {
  green: css`
    color: #ffffff;
    background: #0eca92;

    &:focus {
      background: #8cebb8;
      color: #0eca92;
    }
  `,
  white: css`
    color: #0e976e;
    background: #ffffff;
  `,
  kakao: css`
    color: #000000 75%;
    background: #fee500;
  `,
};

const corner = {
  left: css`
    border-radius: 10px 10px 10px 0px;
  `,
  right: css`
    border-radius: 10px 10px 0px 10px;
  `,
};

const layout = {
  icon: css`
    justify-content: space-around;
  `,
  square: css`
    width: 40px !important;
    height: 40px;

    svg {
      width: 18px;
      height: 18px;
    }
  `,
};

const GreenRightCorner = styled(Default)`
  ${color.green}
  ${corner.right}
`;

const GreenLeftCorner = styled(Default)`
  ${color.green}
  ${corner.left}
`;

const WhiteLeftCorner = styled(Default)`
  ${color.white}
  ${corner.left}
`;

const Kakao = styled(Default)`
  ${layout.icon}
  ${color.kakao}
  ${corner.right}

  svg {
    width: 18px;
    height: 18px;
  }
`;

const WhiteLeftSquare = styled(Default)`
  ${color.white}
  ${corner.left}
  ${layout.square}
`;

const WhiteRightSquare = styled(Default)`
  ${color.white}
  ${corner.right}
  ${layout.square}
`;

export {
  color,
  corner,
  layout,
  Default,
  WhiteLeftSquare,
  GreenRightCorner,
  GreenLeftCorner,
  Kakao,
  WhiteRightSquare,
};
