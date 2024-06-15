import Head from "next/head";
import React, { ReactNode } from "react";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../common/button/Button";
import { GreenRightCorner } from "../../common/button/ButtonStyle";
import { useCardPicture } from "../../stores/useCardPicture";
import { Frame } from "../../styles/components/Frame";
import BackHeader from "../common/BackHeader";
import PreloadCardLink from "../common/PreloadCardLink";

type LetterFormDefault = {
  contents: string;
  senderName: string;
};

type LetterForm =
  | {
      [key: string]: string;
    }
  | LetterFormDefault;

interface Props {
  prev: Function;
  next: Function;
  sendLetter: Function;
  to: string;
  letterData: { [key: string]: string };
  inputOption?: (register: UseFormRegister<LetterForm>) => ReactNode;
}

function WriteLetter({
  prev,
  next,
  sendLetter,
  to,
  letterData,
  inputOption = () => <></>,
}: Props) {
  const { register, handleSubmit } = useForm<LetterForm>();

  const { pictureUrl } = useCardPicture();

  const sendData = ({ contents, senderName, ...props }: LetterForm) => {
    const body = {
      imageUrl: pictureUrl,
      contents,
      senderName,
      ...props,
      ...letterData,
    };

    sendLetter(body, next);
  };

  const validateData = (error: FieldErrors) => {
    for (const e in error) {
      alert(error[e].message);
      return;
    }
  };

  return (
    <Frame>
      <Head>
        <title>편지 쓰기 - Text me!</title>
        <PreloadCardLink />
      </Head>
      <BackHeader onBackClick={() => prev()}>
        <Title>편지 쓰기</Title>
      </BackHeader>
      <Form onSubmit={handleSubmit(sendData, validateData)}>
        <LetterContainer imgurl={pictureUrl} id="box">
          <ToDiv>To. {to}</ToDiv>
          <TextArea
            maxLength={500}
            {...register("contents", {
              required: "편지를 입력해주세요.",
              maxLength: {
                value: 500,
                message: "편지는 500자 이내여야 합니다.",
              },
            })}
            placeholder="편지를 입력해주세요."
          />
          <FromDiv>
            <p>From.</p>
            <FromInput
              placeholder="보내는 사람"
              maxLength={10}
              {...register("senderName", {
                required: "보내는 사람을 입력해주세요.",
                maxLength: {
                  value: 10,
                  message: "보내는 사람 이름을 10자 이내로 입력해주세요.",
                },
              })}
            />
          </FromDiv>
        </LetterContainer>
        {inputOption(register)}
        <Button props={{ type: "submit" }} Style={GreenRightCorner}>
          보내기
        </Button>
      </Form>
    </Frame>
  );
}

export default WriteLetter;

const LetterContainer = styled.div<{ imgurl: string }>`
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  position: relative;

  ::before {
    content: "";
    background: url(${(props) => props.imgurl});
    background-size: cover;
    background-position: center center;
    border-radius: 10px;
    opacity: 0.2;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  box-shadow: 1px 1px 8px 3px rgba(62, 78, 82, 0.4),
    inset -2px -2px 2px rgba(106, 106, 106, 0.25),
    inset 2px 2px 2px rgba(255, 255, 255, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 10px;
  position: relative;
  z-index: 5;

  color: #000000;

  font-family: "UhbeeMiMi";
  letter-spacing: 0.06em;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  resize: none;

  &:focus {
    outline: none;
  }
`;

const ToDiv = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;

  font-family: "UhbeeMiMi";

  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
`;

const FromDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 10px;
  justify-content: flex-end;

  font-family: "UhbeeMiMi";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

const FromInput = styled.input`
  width: 40%;
  height: 24px;

  padding: 0 5px;

  position: relative;
  z-index: 5;

  border: none;
  background: none;

  font-family: "UhbeeMiMi";

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;

  color: #000000;

  &:focus {
    outline: none;
  }
`;
