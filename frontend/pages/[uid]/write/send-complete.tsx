import React, { useEffect } from "react";
import styled from "styled-components";
import { useCardPicture } from "../../../stores/useCardPicture";
import { Frame } from "../../../styles/components/Frame";
import { LeftButton, RightButton } from "../../../styles/components/Button";
import { useRoomInfo } from "../../../stores/useRoomInfo";
import Link from "next/link";
import { useMembers } from "../../../stores/useMembers";
import Head from "next/head";
import { useSearchParams } from "next/navigation";

export default function SendComplete() {
  const userId = useSearchParams().get("uid");

  const { pictureUrl } = useCardPicture();
  const { roomInfo, getRoomInfo } = useRoomInfo();
  const { member, getMember } = useMembers();

  useEffect(() => {
    getRoomInfo(userId);
  }, [userId]);

  useEffect(() => {
    getMember();
  }, []);

  const textLimitChangeLine = (nickname: string) => {
    if (nickname?.length < 7) {
      return <p>{nickname}님께 편지를 보냈어요</p>;
    } else {
      return (
        <p>
          {nickname}님께
          <br />
          편지를 보냈어요
        </p>
      );
    }
  };

  return (
    <Frame>
      <Head>
        <title>편지 전달 완료 - Text me!</title>
      </Head>

      <Container>
        <Title>{textLimitChangeLine(roomInfo?.userName)}</Title>
        {pictureUrl && <CardImage src={pictureUrl} />}
        <div>
          {member ? (
            <Link href={`/${member?.id}`}>
              <LeftButton>내 방으로 가기 </LeftButton>
            </Link>
          ) : (
            <Link href="/signup">
              <LeftButton>내 방 만들기 </LeftButton>
            </Link>
          )}
          <Link href={`/${roomInfo?.id}`}>
            <RightButton>확인하기</RightButton>
          </Link>
        </div>
      </Container>
    </Frame>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  margin-top: 20px;

  ${LeftButton} {
    width: 180px;
    height: 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 17px;
    color: white;
    margin: 0 auto;
  }
  ${RightButton} {
    width: 180px;
    height: 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 17px;
    color: white;
    margin: 17px auto;
  }
`;

const Title = styled.p`
  margin: 0;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 17px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 140px;
  height: 175px;
  border-radius: 10px;

  object-fit: cover;
`;
