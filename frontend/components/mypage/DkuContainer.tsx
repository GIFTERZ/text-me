import Link from "next/link";
import React from "react";
import styled from "styled-components";

const DkuContainer = () => {
  return (
    <Container>
      <Title>단국대 X TxT Me!</Title>
      <SubTitle>랑데부</SubTitle>
      <StyledLink href="/dku/danfesta">만남의 우편함</StyledLink>
      <StyledLink href="/dku/danfesta/my-letter">열람한 편지함</StyledLink>
    </Container>
  );
};

export default DkuContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.h3`
  margin-block: 10px;
  color: #0eca92;
`;

const SubTitle = styled.h4`
  margin-top: 10px;
  margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
  margin-block: 10px;
`;
