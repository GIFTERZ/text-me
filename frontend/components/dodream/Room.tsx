import Head from "next/head";
import React, { useEffect } from "react";
import LettersContainer from "../room/LettersContainer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { WhiteRightButton } from "../../styles/components/Button";
import { useLetters } from "../../stores/dku/dodream/useLetters";

const DoDreamRoom = () => {
  const { letterInfos, getLetters, error } = useLetters();
  const pathname = usePathname();

  useEffect(() => {
    getLetters();
  }, [getLetters]);

  return (
    <>
      <Head>
        <title>랑데부: 만남의 우편함</title>
        <link rel="icon" href="/static/images/danfesta-card-4.png" />
      </Head>
      <LettersContainer
        letters={letterInfos}
        backgroundImage={"/static/images/dodream-background.jpeg"}
        defaultCardImage={"/static/images/dodream-card-default.png"}
      />
      <Link href={`${pathname}/write`}>
        <CTAButton>편지 남기기</CTAButton>
      </Link>
    </>
  );
};

export default DoDreamRoom;

const CTAButton = styled(WhiteRightButton)`
  position: fixed;
  left: 50%;
  bottom: 8%;
  transform: translate(-50%, -50%);

  padding: 13px 24px;

  box-shadow: 2px 2px 5px 1px rgba(62, 78, 82, 0.4),
    inset -2px -2px 3px rgba(106, 106, 106, 0.25),
    inset 2px 2px 3px rgba(255, 255, 255, 0.5);

  color: #ff8000;

  @media ${({ theme }) => theme.device.small} {
    font-size: 12px;
    padding: 8px 16px;
  }
`;
