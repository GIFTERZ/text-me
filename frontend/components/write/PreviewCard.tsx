import Head from "next/head";
import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../common/button/Button";
import { WhiteRightSquare } from "../../common/button/ButtonStyle";
import { useCardPicture } from "../../stores/useCardPicture";
import { WhiteLeftButton } from "../../styles/components/Button";
import { Frame } from "../../styles/components/Frame";
import { HeaderLayout } from "../../styles/components/Layout";
import BackHeader from "../common/BackHeader";

interface Props {
  prev: () => void;
  next: () => void;
}
function PreviewCard({ prev, next }: Props) {
  const { pictureUrl, setPictureUrl } = useCardPicture();

  useEffect(() => {
    if (!pictureUrl) {
      alert("카드의 배경 사진을 선택해주세요.");
    }

    return () => {
      setPictureUrl(null);
    };
  }, []);
  return (
    <PreviewFrame>
      <Head>
        <title>카드 사진 미리보기</title>
      </Head>
      <BackHeader onBackClick={prev}>
        <Title>카드 미리보기</Title>
        <Button props={{ onClick: next }} Style={WhiteRightSquare}>
          선택
        </Button>
      </BackHeader>
      <PreviewDiv>{pictureUrl && <CardImage src={pictureUrl} />}</PreviewDiv>
    </PreviewFrame>
  );
}

export default PreviewCard;

const PreviewFrame = styled(Frame)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  ${HeaderLayout} {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

const PreviewDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 90%;
  height: 450px;
  padding: 22px 22px 111px 22px;

  background: #f7fafc;

  box-shadow: 1px 1px 8px 3px rgba(0, 0, 0, 0.25), inset 2px 2px 2px #ffffff;
  border-radius: 5px;

  @media ${({ theme }) => theme.device.large} {
    width: 358px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`;

const WhiteRightButton = styled(WhiteLeftButton)`
  border-radius: 10px 10px 0px 10px;
  color: #0eca92;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;
