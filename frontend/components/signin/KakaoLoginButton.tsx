import React, { useEffect, useState } from "react";
import Button from "../../common/button/Button";
import { Kakao } from "../../common/button/ButtonStyle";
import { Icon } from "@iconify/react";
import { useKakaoLogin } from "../../stores/useKakaoLogin";
import { LoginSpinner } from "../../styles/indicators/Loader";

interface Props {
  complete: Function;
}

const KAKAO_AUTH_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/oauth/kakao`;

function KakaoLoginButton({ complete }: Props) {
  const { getKakaoToken, loading } = useKakaoLogin();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      getKakaoToken({ code }, complete);
    }
  }, []);

  const onKakaoClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Button props={{ onClick: onKakaoClick }} Style={Kakao}>
      {loading ? (
        <LoginSpinner />
      ) : (
        <>
          <Icon icon="bxs:message-rounded" color="black" aria-hidden />
          <span>카카오 로그인</span>
          <span aria-hidden></span>
        </>
      )}
    </Button>
  );
}

export default KakaoLoginButton;
