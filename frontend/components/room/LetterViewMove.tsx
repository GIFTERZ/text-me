import React from "react";
import styled from "styled-components";
import { useLetters } from "../../stores/useLetters";
import MoveNextIcon from "./icons/MoveNextIcon";
import MovePrevIcon from "./icons/MovePrevIcon";

interface Props {
  id: number;
  open: (id: number) => void;
}

type Move = "PREV" | "NEXT";

function LetterViewMove({ id, open }: Props) {
  const { letters } = useLetters();

  const getCurrentIndex = () => {
    return letters.findIndex((letter) => letter.id === id);
  };

  const isFirst = () => {
    const currentIndex = getCurrentIndex();

    if (currentIndex === 0) {
      return true;
    }

    return false;
  };

  const isLast = () => {
    const currentIndex = getCurrentIndex();

    if (currentIndex === letters.length - 1) {
      return true;
    }

    return false;
  };

  const getLetterId = (index: number) => {
    return letters[index].id;
  };

  const moveLetter = (move: Move) => {
    const currentIndex = getCurrentIndex();

    if (move === "PREV") {
      return getLetterId(currentIndex - 1);
    } else {
      return getLetterId(currentIndex + 1);
    }
  };

  const openMove = (move: Move) => {
    if (move === "PREV" && isFirst()) {
      return;
    }
    if (move === "NEXT" && isLast()) {
      return;
    }

    return open(moveLetter(move));
  };

  return (
    <Container>
      <Button
        onClick={() => openMove("PREV")}
        disabled={isFirst()}
        disabledStyle={isFirst()}
        type="button"
      >
        <MovePrevIcon />
      </Button>
      <Button
        onClick={() => openMove("NEXT")}
        disabled={isLast()}
        disabledStyle={isLast()}
        type="button"
      >
        <MoveNextIcon />
      </Button>
    </Container>
  );
}

export default LetterViewMove;

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-between;

  width: 100%;

  padding: 0 3px;
  z-index: 30;
`;

const Button = styled.button<{ disabledStyle: boolean }>`
  background: none;
  border: none;
  z-index: 10;
  visibility: ${(p) => (p.disabledStyle ? "hidden" : "visible")};
  svg {
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 1));
  }
`;
