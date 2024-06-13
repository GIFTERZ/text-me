import React, { Fragment, useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import Image from "next/image";
import { Letter } from "../../types";
import { Overlay } from "../../styles/components/Modal";
import Button from "../../common/button/Button";
import {
  WhiteLeftButton,
  WhiteRightButton,
} from "../../styles/components/Button";

interface Props {
  letter: Letter;
  close: () => void;
}

function LetterView({ letter, close }: Props) {
  const lineBreak = (content: string) => {
    return (
      <>
        {content?.split("\n").map((value) => (
          <Fragment key={uuid()}>
            {value.split("[img]").map((v, i) => (
              <Fragment key={i}>
                {i === 0 ? (
                  <>{v}</>
                ) : (
                  <Image
                    src={v}
                    width={250}
                    height={250}
                    alt={"기프티콘"}
                    style={{ width: "250px", display: "block" }}
                  />
                )}
              </Fragment>
            ))}
            <br />
          </Fragment>
        ))}
      </>
    );
  };

  if (!letter) {
    return <></>;
  }

  return (
    <>
      <Overlay onClick={close} />
      <Card imgUrl={letter?.imageUrl}>
        <ToText>To. {letter.receiverName}</ToText>
        <Content>
          {lineBreak(
            letter?.contents +
              `${
                letter.contactInfo
                  ? `\n\n•:‧• 연락처 •:‧•\n${letter.contactInfo}`
                  : ""
              }`
          )}
          {letter.contactInfo && (
            <ButtonContainer>
              <Button
                Style={WhiteRightButton}
                props={{
                  onClick: () =>
                    navigator.clipboard.writeText(letter.contactInfo),
                }}
              >
                연락처 복사하기
              </Button>
            </ButtonContainer>
          )}
        </Content>
        <FromText>From. {letter?.senderName}</FromText>
      </Card>
    </>
  );
}

export default LetterView;

const Card = styled.div<{ imgUrl: string }>`
  position: relative;
  padding: 24px 24px 48px 24px;
  width: 320px;
  height: 400px;
  box-shadow: 1px 1px 8px 3px rgba(62, 78, 82, 0.4),
    inset -2px -2px 2px rgba(106, 106, 106, 0.25),
    inset 2px 2px 2px rgba(255, 255, 255, 0.3);
  border-radius: 5px;

  background-color: #ffffff;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;

  display: grid;
  grid-template-rows: 80px 230px 80px;
  padding: 0;

  background: ${(p) => `linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.8)
    ),
    url(${p.imgUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: 5px;

  font-family: "UhBeeMiMi";

  @media ${({ theme }) => theme.device.small} {
    width: 240px;
  }
`;

const ToText = styled.div`
  display: flex;
  align-items: center;

  margin: 0 27px;

  font-weight: 400;
  font-size: 22px;
  line-height: 27px;

  color: #222222;

  @media ${({ theme }) => theme.device.small} {
    font-size: 18px;
  }
`;

const Content = styled.p`
  margin: 0 30px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  color: #222222;

  overflow-y: scroll;
`;

const FromText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0 27px;

  font-weight: 400;
  font-size: 22px;
  line-height: 27px;

  color: #222222;

  @media ${({ theme }) => theme.device.small} {
    font-size: 18px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;

  button {
    width: 100%;
  }
`;
