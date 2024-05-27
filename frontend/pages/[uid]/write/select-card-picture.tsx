import React, { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCardPicture } from "../../../stores/useCardPicture";
import { Frame } from "../../../styles/components/Frame";
import styled from "styled-components";
import CameraIcon from "../../../components/write/icons/CameraIcon";
import { HeaderLayout, LayoutSpan } from "../../../styles/components/Layout";
import { WhiteLeftButton } from "../../../styles/components/Button";
import ArrowBackIcon from "../../../components/common/icons/ArrowBackIcon";
import Head from "next/head";
import Compressor from "compressorjs";
import BackHeader from "../../../components/common/BackHeader";
import { cardAlt } from "../../../public/static/images/card-alt";

export default function SelectCardPicture() {
  const router = useRouter();
  const userId = useSearchParams().get("uid");
  const { setPictureUrl, constCard, setConstCard, setPictureImage } =
    useCardPicture();

  useEffect(() => {
    return setConstCard(
      Array.from({ length: 4 }, () => "/static/images/card").map((v, i) => {
        return { src: `${v}-${i + 1}.webp`, alt: cardAlt[`card-${i + 1}`] };
      })
    );
  }, []);

  const fileRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    fileRef?.current?.click();
  };

  const select = (pictureUrl: string) => {
    setPictureUrl(pictureUrl);
    router.push(`/${userId}/write/preview-card-picture`);
  };

  // const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { files },
  //   } = e;
  //   let file = files[0];
  //   new Compressor(file, {
  //     maxWidth: 550,
  //     maxHeight: 550,
  //     success(result) {
  //       file = new File([result], "image", { type: result.type });
  //       setPictureImage(file, () =>
  //         router.push(`/${userId}/write/preview-card-picture`)
  //       );
  //     },
  //     error() {
  //       setPictureImage(file, () =>
  //         router.push(`/${userId}/write/preview-card-picture`)
  //       );
  //     },
  //   });
  // };

  return (
    <SelectFrame>
      <Head>
        <title>카드 사진 선택 - Text me!</title>
      </Head>
      <BackHeader>
        <Title>카드 선택하기</Title>
      </BackHeader>
      <PictureContainer>
        {/* <InputDiv id="image" onClick={handleClick}>
          <CameraIcon />
        </InputDiv>
        <input
          style={{ display: "none" }}
          ref={fileRef}
          name="file"
          type="file"
          accept="image/*"
          onChange={(e) => fileUploadHandler(e)}
        /> */}
        {constCard?.map((cards, index) => (
          <CardImage
            key={index}
            src={cards.src}
            onClick={() => select(cards.src)}
          />
        ))}
      </PictureContainer>
    </SelectFrame>
  );
}

const SelectFrame = styled(Frame)`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

const PictureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  border-radius: 10px;
  text-align: center;
  background-color: #d9d9d9;

  box-shadow: 2px 2px 5px 1px rgba(62, 78, 82, 0.4);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;

  border-radius: 10px;

  box-shadow: 2px 2px 5px 1px rgba(62, 78, 82, 0.4);
`;
