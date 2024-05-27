import React, { Fragment } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Button from "../../common/button/Button";
import { GreenRightCorner } from "../../common/button/ButtonStyle";
import uuid from "react-uuid";
import BackgroundTemplate from "../../components/slow/BackgroundTemplate";
import TextParser from "../../common/TextParser";

function SlowLetter() {
  const router = useRouter();
  const enter = (paragraph: string) => {
    return paragraph.split("\n").map((sentence) => (
      <Fragment key={uuid()}>
        {sentence}
        <br />
      </Fragment>
    ));
  };

  return (
    <BackgroundTemplate imageUrl={"/static/images/room-background.webp"}>
      <TextContainer>
        <Head>
          1년 뒤의 나에게
          <br />
          <Green>편지</Green>를 보내보세요
        </Head>
        <Sub>
          <TextParser
            text={
              "오늘 나에게 편지를 보내면\n2024년 12월 31일에\n다시 나에게 돌아와요.\n\n2023년을 보내는 소감,\n2024년을 맞이하는 마음가짐,\n무엇이든 좋아요.\n하고싶은 말을 적어보세요!\n"
            }
          />
        </Sub>
      </TextContainer>
      <Button
        props={{ onClick: () => router.push("/slow-letter/get-info") }}
        Style={ButtonStyle}
      >
        나에게 편지 쓰러 가기
      </Button>
    </BackgroundTemplate>
  );
}

export default SlowLetter;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
  top: 20px;
`;

const Head = styled.p`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

const Sub = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
`;

const Green = styled.span`
  color: #2db674;
`;

const ButtonStyle = styled(GreenRightCorner)`
  position: relative;
  z-index: 1;
  width: 90%;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
`;
