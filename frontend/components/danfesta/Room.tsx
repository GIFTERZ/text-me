import { usePathname } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useCaptureMode } from "../../stores/useCaptureMode";
import styled from "styled-components";
import {
  RightButton,
  WhiteButton,
  WhiteRightButton,
} from "../../styles/components/Button";
import Head from "next/head";
import LettersContainer from "../room/LettersContainer";
import Link from "next/link";
import LetterViewContainer from "../room/LetterViewContainer";
import { useConfirmModal } from "../../stores/useConfirmModal";
import { useLetters } from "../../stores/dku/danfesta/useLetters";
import { useMyLetters } from "../../stores/dku/danfesta/useMyLetters";
import { useAlertModal } from "../../stores/useAlertModal";
import { useReportLetter } from "../../stores/dku/danfesta/useReportLetter";
import OpenedLetterIcon from "../common/icons/OpenedLetterIcon";
import { useLetterView } from "../../stores/dku/danfesta/useLetterView";
import { LetterInfo } from "../../types";

interface QueryParams {
  gender: "women" | "men" | null;
  hasContact: boolean;
}

const DanfestaRoom = () => {
  const pathname = usePathname();

  const { isCaptureMode, toggleCaptureMode } = useCaptureMode();
  const { openConfirmModal } = useConfirmModal();
  const { openAlertModal } = useAlertModal();
  const { letterInfos, getLetters } = useLetters();
  const { letters, getLetters: getMyLetters } = useMyLetters();
  const { reportLetter } = useReportLetter();
  const { open, letter, close, error, setErrorNull } = useLetterView();

  const [checkboxes, setCheckboxes] = useState({
    women: true,
    men: true,
    contact: false,
  });

  useEffect(() => {
    getMyLetters();
  }, []);

  useEffect(() => {
    shuffle(letterInfos);
  }, [letterInfos]);

  useEffect(() => {
    const query: QueryParams = {
      gender: null,
      hasContact: false,
    };
    if (checkboxes.women && checkboxes.men) {
      query.gender = null;
    } else if (checkboxes.women) {
      query.gender = "women";
    } else if (checkboxes.men) {
      query.gender = "men";
    }

    query.hasContact = checkboxes.contact;

    getLetters(query);
  }, [checkboxes, getLetters]);

  useEffect(() => {
    if (error) {
      openAlertModal(error.response.data.message);
      setErrorNull();
    }
  }, [error]);

  const shuffle = (array: LetterInfo[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, checked },
    } = e;

    if (!checkboxes.women && name === "men" && !checked) {
      return;
    }
    if (!checkboxes.men && name === "women" && !checked) {
      return;
    }

    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const confirmOpen = async () => {
    const currentRemaining = 3 - letters.length;

    if (currentRemaining === 0) {
      openAlertModal("편지 열람 한도를 초과했어요.");
      return;
    }

    const confirm = await openConfirmModal({
      content: `편지를 열면 열 수 있는 편지 개수가 차감돼요. 열람하시겠어요?\n(현재 열람 가능 편지 수: ${currentRemaining})`,
      yesButtonText: "열기",
    });

    if (!confirm) {
      return false;
    }

    return true;
  };

  return (
    <>
      <Head>
        <title>랑데부: 만남의 우편함</title>
        <link rel="icon" href="/static/images/danfesta-card-4.png" />
      </Head>
      <Header>
        <Logo src="/static/images/danfesta-logo.png" />
        {!isCaptureMode && (
          <ButtonContainer>
            <Link href="/dku/danfesta/my-letter">
              <WhiteButton type="button">
                <OpenedLetterIcon />
              </WhiteButton>
            </Link>
          </ButtonContainer>
        )}
      </Header>
      {!isCaptureMode && (
        <FilterContainer>
          <CheckboxContainer>
            <HiddenCheckBox
              name="women"
              checked={checkboxes.women}
              onChange={onCheckboxChange}
            />
            <SaveIDCheckBox checked={checkboxes.women}>
              <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Icon>
            </SaveIDCheckBox>
            여학우 편지
          </CheckboxContainer>

          <CheckboxContainer>
            <HiddenCheckBox
              name="men"
              checked={checkboxes.men}
              onChange={onCheckboxChange}
            />
            <SaveIDCheckBox checked={checkboxes.men}>
              <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Icon>
            </SaveIDCheckBox>
            남학우 편지
          </CheckboxContainer>
          <CheckboxContainer>
            <HiddenCheckBox
              name="contact"
              checked={checkboxes.contact}
              onChange={onCheckboxChange}
            />
            <SaveIDCheckBox checked={checkboxes.contact}>
              <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Icon>
            </SaveIDCheckBox>
            연락처 있는 편지
          </CheckboxContainer>
        </FilterContainer>
      )}
      <LettersContainer
        letters={letterInfos.filter((letter) => !letter.mine)}
        backgroundImage={"/static/images/danfesta-background.jpeg"}
        defaultCardImage={"/static/images/danfesta-card-default.png"}
        confirmOpen={confirmOpen}
        open={open}
      />
      {!isCaptureMode && (
        <Link href={`${pathname}/write`}>
          <CTAButton>편지 남기기</CTAButton>
        </Link>
      )}
      <LetterViewContainer
        reportLetter={reportLetter}
        letter={letter ? { ...letter, receiverName: "익명의 학우" } : null}
        close={() => {
          close();
          getMyLetters();
        }}
      />
      {isCaptureMode && (
        <CaptureModeButton type="button" onClick={toggleCaptureMode}>
          캡처 모드 종료
        </CaptureModeButton>
      )}
    </>
  );
};

export default DanfestaRoom;

const Logo = styled.img`
  width: 180px;
  position: fixed;
  top: -10px;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;

  height: 130px;

  margin: 0;
  z-index: 1;

  @media ${({ theme }) => theme.device.small} {
    padding: 13px;
    height: 40px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CTAButton = styled(WhiteRightButton)`
  position: fixed;
  left: 50%;
  bottom: 8%;
  transform: translate(-50%, -50%);

  padding: 13px 24px;

  box-shadow: 2px 2px 5px 1px rgba(62, 78, 82, 0.4),
    inset -2px -2px 3px rgba(106, 106, 106, 0.25),
    inset 2px 2px 3px rgba(255, 255, 255, 0.5);

  color: navy;

  @media ${({ theme }) => theme.device.small} {
    font-size: 12px;
    padding: 8px 16px;
  }
`;

const FilterContainer = styled.div`
  position: fixed;
  z-index: 10;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 110px;
  left: 30px;
  font-size: 14px;
`;

const CheckboxContainer = styled.label`
  color: white;
  display: flex;
  align-items: center;
`;

const HiddenCheckBox = styled.input.attrs((props) => ({
  type: "checkbox",
  checked: props.checked,
  onChange: props.onChange,
}))`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #44332a;
  stroke-width: 2px;
`;

const SaveIDCheckBox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "#ffef78" : "white")};
  opacity: ${(props) => !props.checked && 0.7};
  border-radius: 3px;
  transition: all 100ms;
  margin-right: 8px;

  &:hover {
    background: "brown";
    opacity: 1;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const CaptureModeButton = styled(RightButton)`
  position: fixed;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 5vh;
  margin: 10px auto;
  border-radius: 0;
`;

const Button = styled.button`
  padding: 5px 10px;
  background: #ffffff;
  border: none;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 32px;
  right: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  z-index: 10;
`;
