import React from "react";
import styled from "styled-components";
import { useAlertModal } from "../../stores/useAlertModal";
import { Modal } from "../../styles/components/Modal";
import TextParser from "../TextParser";

interface Props {
  onClick?: () => void;
}

function AlertModal({ onClick = () => {} }: Props) {
  const { text, closeAlertModal } = useAlertModal();

  if (!text) {
    return <></>;
  }

  return (
    <Container>
      <TextParser text={text} />
      <Button
        type="button"
        onClick={() => {
          onClick();
          closeAlertModal();
        }}
      >
        확인
      </Button>
    </Container>
  );
}

export default AlertModal;

const Container = styled(Modal)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 32px;

  width: 70%;
  height: fit-content;

  background: rgba(21, 21, 21, 0.75);
  color: #ffffff;
`;

const Button = styled.button`
  padding: 5px 10px;
  background: #ffffff;
  border: none;
  border-radius: 5px;
`;
