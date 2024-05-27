import Head from "next/head";
import React, { useEffect } from "react";
import { Frame } from "../../../styles/components/Frame";
import { Title } from "../../../styles/components/Title";
import styled from "styled-components";
import LetterView from "../../../components/room/LetterView";
import Link from "next/link";
import { WhiteButton } from "../../../styles/components/Button";
import { useMyLetters } from "../../../stores/dku/danfesta/useMyLetters";
import PostBoxIcon from "../../../components/common/icons/PostBoxIcon";
import { useLetterView } from "../../../stores/dku/danfesta/useLetterView";
import { useRouter } from "next/router";

const MyLetter = () => {
  const { letter, close, setLetter } = useLetterView();
  const { letters, getLetters, error } = useMyLetters();
  const router = useRouter();
  useEffect(() => {
    getLetters();
  }, []);

  useEffect(() => {
    if (error) {
      router.push("/dku/danfesta");
    }
  }, [error]);

  return (
    <>
      <Head>
        <title>열람한 편지함 - 랑데부: 낭만의 우편함</title>
        <link rel="icon" href="/static/images/danfesta-card-4.png" />
      </Head>
      <Frame>
        <SubTitle>단국대 X Text Me!</SubTitle>
        <Title>열람한 편지함</Title>
        <MenuSpan>
          <Link href="/dku/danfesta">
            <WhiteButton type="button">
              <PostBoxIcon />
            </WhiteButton>
          </Link>
        </MenuSpan>
        <LettersContainer>
          {letters.length === 0 && <div>열람한 편지가 없어요.</div>}
          {letters.map((value) => (
            <PreviewDiv key={value.id} onClick={() => setLetter(value)}>
              <CardImage src={value.imageUrl} />
            </PreviewDiv>
          ))}
        </LettersContainer>
        <LetterView
          letter={letter && { ...letter, receiverName: "익명의 학우" }}
          close={close}
        />
      </Frame>
    </>
  );
};

export default MyLetter;

const SubTitle = styled(Title)`
  margin-bottom: 0;
  color: #0eca92;
  font-size: 16px;
`;

const MenuSpan = styled.span`
  position: absolute;
  top: 32px;
  right: 24px;
`;

const LettersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
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
