import React from "react";
import { RightButton } from "../../styles/components/Button";
import { Modal, Overlay } from "../../styles/components/Modal";
import styled from "styled-components";

interface Props {
  close: () => void;
}

function ShareModal({ close }: Props) {
  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("링크를 복사했습니다.");
    });
  };

  return (
    <>
      <Overlay onClick={close} />
      <Container>
        <Title>방 공유하기</Title>
        <RightButton onClick={copyLink} type="button">
          링크 복사하기
        </RightButton>
      </Container>
    </>
  );
}

export default ShareModal;

const Container = styled(Modal)`
  height: fit-content;
  padding: 40px 30px;
  gap: 33px;

  ${RightButton} {
    width: 100%;

    font-weight: 700;
    font-size: 17px;
    line-height: 17px;
  }
`;

const Title = styled.h1`
  margin: 0;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 17px;

  color: #222222;
`;
