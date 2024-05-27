import Link from "next/link";
import React, { useEffect } from "react";
import NicknameContainer from "../components/mypage/NicknameContainer";
import { useMembers } from "../stores/useMembers";
import styled from "styled-components";
import ErrorContainer from "../components/common/ErrorContainer";
import { RightButton } from "../styles/components/Button";
import { useRouter } from "next/router";
import Head from "next/head";
import LoadingContainer from "../components/common/LoadingContainer";
import DkuContainer from "../components/mypage/DkuContainer";

function Mypage() {
  const router = useRouter();
  const { isLoading, error, member, getMember, logoutMember } = useMembers();

  useEffect(() => {
    getMember();
  }, []);

  const logout = () => {
    logoutMember();
    router.push("/");
  };

  if (isLoading) {
    return <LoadingContainer />;
  }

  if (error) {
    return <ErrorContainer text={"에러가 발생했습니다."} />;
  }

  return (
    <Frame>
      <Head>
        <title>마이페이지 - Text me!</title>
      </Head>
      <Container>
        <NicknameContainer />
        <Link href={`/${member?.id}`}>내 방으로 가기</Link>
        <Link href={"/"}>다른 사람 방 구경하기</Link>
      </Container>
      <DkuContainer />
      <RightButton type="button" onClick={logout}>
        로그아웃
      </RightButton>
    </Frame>
  );
}

export default Mypage;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 100%;

  padding: 70px 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
