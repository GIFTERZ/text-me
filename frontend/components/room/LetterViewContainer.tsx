import React from "react";
import LetterView from "./LetterView";
import ReportIcon from "../common/icons/ReportIcon";
import styled from "styled-components";
import { useConfirmModal } from "../../stores/useConfirmModal";
import { Letter } from "../../types";

interface Props {
  reportLetter?: (id: number, callback?: () => void) => void;
  letter: Letter;
  close: () => void;
}

function LetterViewContainer({ reportLetter, letter, close }: Props) {
  const { openConfirmModal } = useConfirmModal();

  const confirmReportLetter = async () => {
    const confirm = await openConfirmModal({
      content: "편지를 신고하시겠습니까?",
    });

    if (!confirm) {
      return;
    }

    reportLetter(letter.id, close);
  };

  return (
    <>
      {letter && reportLetter && (
        <Report type="button" onClick={confirmReportLetter}>
          신고
          <ReportIcon />
        </Report>
      )}
      <LetterView letter={letter} close={close} />
    </>
  );
}

export default LetterViewContainer;

const Report = styled.button`
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  gap: 2px;
  position: fixed;
  opacity: 1;
  color: white;
  background-color: navy;
  z-index: 100;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
`;
