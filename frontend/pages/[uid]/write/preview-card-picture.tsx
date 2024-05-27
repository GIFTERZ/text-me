import React, { useEffect } from "react";
import { useCardPicture } from "../../../stores/useCardPicture";
import { useRouter, useSearchParams } from "next/navigation";
import { Frame } from "../../../styles/components/Frame";
import styled from "styled-components";
import { WhiteLeftButton } from "../../../styles/components/Button";
import Head from "next/head";
import { HeaderLayout } from "../../../styles/components/Layout";
import BackHeader from "../../../components/common/BackHeader";

export default function PreviewCardPicture() {
  const router = useRouter();
  const userId = useSearchParams().get("uid");
  const { pictureUrl, setPictureUrl } = useCardPicture();

  const pushWriteScreen = () => {
    router.push(`/${userId}/write/write-letter`);
  };

  useEffect(() => {
    if (!pictureUrl) {
      alert("카드의 배경 사진을 선택해주세요.");
      router.back();
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
      <BackHeader>
        <Title>카드 미리보기</Title>
        <WhiteRightButton type="button" onClick={pushWriteScreen}>
          선택
        </WhiteRightButton>
      </BackHeader>
      <PreviewDiv>{pictureUrl && <CardImage src={pictureUrl} />}</PreviewDiv>
    </PreviewFrame>
  );
}

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
