import Head from "next/head";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
  imageUrl: string;
}
function BackgroundTemplate({ children, imageUrl }: Props) {
  return (
    <>
      <Head>
        <link rel="preload" fetchpriority="high" as="image" href={imageUrl} />
      </Head>
      <Background imageUrl={imageUrl}>{children}</Background>
    </>
  );
}

export default BackgroundTemplate;

const Background = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url(${(p) => p.imageUrl});
  background-position: 50%;
  background-size: auto 100%;
  padding-inline: 10px;
`;
