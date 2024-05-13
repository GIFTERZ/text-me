import React from "react";
import styled from "styled-components";
import { Modal } from "../../styles/components/Modal";
import { useConfirmModal } from "../../stores/useConfirmModal";
import TextParser from "../TextParser";

const ConfirmModal = () => {
  const { content, yesButtonText, noButtonText, clickYesButton, clickNoButton } = useConfirmModal();

  if (!content){
    return <></>
  }

  return (
    <Container>
      <TextParser text={content} />
      <RowLayout>
        <Button type="button" onClick={clickNoButton}>
          {noButtonText}
        </Button>
        <Button type="button" onClick={clickYesButton}>
          {yesButtonText}
        </Button>
      </RowLayout>
    </Container>
  );
};

export default ConfirmModal;

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

const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background: #ffffff;
  border: none;
  border-radius: 5px;
`;
