import Link from "next/link";
import { useAlertModal } from "../../stores/useAlertModal";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useRoomInfo } from "../../stores/useRoomInfo";
import styled from "styled-components";
import ButtonsContainer from "../../components/room/ButtonsContainer";
import { RightButton } from "../../styles/components/Button";
import { useCaptureMode } from "../../stores/useCaptureMode";
import ErrorContainer from "../../components/common/ErrorContainer";
import Head from "next/head";
import LoadingContainer from "../../components/common/LoadingContainer";
import LettersContainer from "../../components/room/LettersContainer";
import dynamic from "next/dynamic";
import { useLetters } from "../../stores/useLetters";
import { useLetterView } from "../../stores/useLetterView";
const SnowFall = dynamic(() => import("react-snowfall"));
const LetterViewContainer = dynamic(
  () => import("../../components/room/LetterViewContainer")
);

const LETTER_NOT_OWN_MESSAGE = "본인의 편지만 열어볼 수 있어요!";
const LETTER_NOT_ARRIVE_MESSAGE = "아직 편지가 도착하지 않았어요!";

function Room() {
  const { get } = useSearchParams();
  const pathname = usePathname();

  const userId = get("uid");

  const { roomInfo, getRoomInfo, error, isLoading } = useRoomInfo();
  const { isCaptureMode, toggleCaptureMode } = useCaptureMode();

  const { letters, getLetters } = useLetters();
  const { open, letter, close } = useLetterView();

  useEffect(() => {
    if (userId) {
      getRoomInfo(userId);
    }
  }, [userId, getRoomInfo]);

  useEffect(() => {
    if (roomInfo) {
      getLetters(roomInfo.id);
    }
  }, [roomInfo, getLetters]);

  if (isLoading) {
    return <LoadingContainer />;
  }

  if (error) {
    return <ErrorContainer />;
  }

  const confirmOpen = async () => {
    return Promise.resolve().then(() => {
      return true;
    });
  };

  return (
    <>
      <Head>
        <title>{roomInfo?.userName}님의 방 - Text me!</title>
      </Head>
      <Header>
        <Title>{roomInfo?.userName}&apos;s room</Title>
        {!isCaptureMode && <ButtonsContainer />}
      </Header>
      <LettersContainer
        open={open}
        letters={letters}
        backgroundImage={"/static/images/room-background.webp"}
        defaultCardImage="/static/images/room-default.webp"
        confirmOpen={confirmOpen}
      />
      <SnowFall speed={[0.5, 0.8]} wind={[-0.5, 1.0]} />
      {!isCaptureMode && (
        <Link href={`${pathname}/write`}>
          <CTAButton>
            TEXT <br />
            {roomInfo?.userName}
          </CTAButton>
        </Link>
      )}
      <LetterViewContainer letter={letter} close={close} />
      {isCaptureMode && (
        <CaptureModeButton type="button" onClick={toggleCaptureMode}>
          캡처 모드 종료
        </CaptureModeButton>
      )}
    </>
  );
}

export default Room;

const Title = styled.h1`
  position: fixed;
  top: 32px;
  left: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;

  width: fit-content;
  height: 48px;

  margin: 0;

  background: #ffffff;
  border-radius: 10px 10px 10px 0px;

  font-weight: 700;
  font-size: 17px;
  line-height: 17px;

  color: #0eca92;

  z-index: 10;

  box-shadow: 2px 2px 5px 1px rgba(62, 78, 82, 0.4),
    inset -2px -2px 3px rgba(106, 106, 106, 0.25),
    inset 2px 2px 3px rgba(255, 255, 255, 0.5);

  @media ${({ theme }) => theme.device.small} {
    font-size: 14px;
    padding: 13px;
    height: 40px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CTAButton = styled(RightButton)`
  position: fixed;
  left: 50%;
  bottom: 8%;
  transform: translate(-50%, -50%);

  padding: 13px 24px;

  box-shadow: 2px 2px 5px 1px rgba(62, 78, 82, 0.4),
    inset -2px -2px 3px rgba(106, 106, 106, 0.25),
    inset 2px 2px 3px rgba(255, 255, 255, 0.5);

  @media ${({ theme }) => theme.device.small} {
    font-size: 12px;
    padding: 8px 16px;
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
