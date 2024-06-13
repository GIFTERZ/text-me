import React from "react";
import BackgroundTemplate from "../slow/BackgroundTemplate";
import styled from "styled-components";
import dynamic from "next/dynamic";
import TextParser from "../../common/TextParser";
import { useLogin } from "../../stores/dku/useLogin";
import { useRouter } from "next/router";
import { useLetters } from "../../stores/dku/danfesta/useLetters";
const DankookStudentCouncilLogin = dynamic(
  () => import("dankook-student-council-login"),
  {
    ssr: false,
  }
);

interface Props {
  loginCallback: () => void;
}

const EventDescription = ({ loginCallback }: Props) => {
  const { getToken } = useLogin();
  const router = useRouter();
  const { getLetters } = useLetters();
  return (
    <>
      <BackgroundTemplate
        imageUrl={"/static/images/danfesta-background.jpeg"}
      ></BackgroundTemplate>
      <TextContainer>
        <Head>랑데부: 만남의 우편함</Head>
        <Sub>
          <TextParser
            text={
              "익명의 학우에게 편지를 남겨보세요.\n편지 하나를 남기면 세 장의 편지를 읽을 수 있어요.\n편지를 남긴 사람이 궁금하다면,\n편지에 적혀있는 연락처로 만남을 추진해요.\n당신의 새로운 만남을 응원합니다❤︎ \n\n˖◛⁺˖♡ﾟ･♪⁺\n본 이벤트는 5월 22-23일 이틀 간 운영됩니다.\n\n˖◛⁺˖♡ﾟ･♪⁺\n총학생회 계정으로 로그인한 단국대학교 학생만\n글을 남길 수 있습니다.\n\n˖◛⁺˖♡ﾟ･♪⁺\n연락처를 남기는 건 자유입니다.\n\n˖◛⁺˖♡ﾟ･♪⁺\n열람한 편지는 마이페이지에서 볼 수 있습니다."
            }
          />
        </Sub>
      </TextContainer>
      <ButtonContainer>
        <DankookStudentCouncilLogin
          clientId={process.env.NEXT_PUBLIC_DKU_CLIENTID}
          redirectUri={`${process.env.NEXT_PUBLIC_SERVICE_URL}/dku/dodream`}
          scope="nickname"
          onSuccess={(res) => {
            const { authCode, codeVerifier } = res;
            getToken(
              {
                authCode,
                codeVerifier,
              },
              () => {
                getLetters(null, loginCallback);
                router.push("/dku/dodream");
              }
            );
          }}
        />
      </ButtonContainer>
    </>
  );
};

export default EventDescription;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
  top: 20px;
`;

const Head = styled.p`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  font-family: "HeirofLight";
`;

const Sub = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
  z-index: 1;
  position: relative;
`;
