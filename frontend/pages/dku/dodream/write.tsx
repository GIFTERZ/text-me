import { ChangeEvent, useEffect, useRef, useState } from "react";
import SelectCard from "../../../components/write/SelectCard";
import WriteLetter from "../../../components/write/WriteLetter";
import { cardAlt } from "../../../public/static/images/card-alt";
import { useCardPicture } from "../../../stores/useCardPicture";
import { useSendDanfestaLetter } from "../../../stores/useSendDanfestaLetter";
import { Frame } from "../../../styles/components/Frame";
import Head from "next/head";
import Link from "next/link";
import { LeftButton, RightButton } from "../../../styles/components/Button";
import styled from "styled-components";
import { useAlertModal } from "../../../stores/useAlertModal";
import { useRouter } from "next/router";
import Image from "next/image";
import { color, corner } from "../../../common/button/ButtonStyle";
import { useSendLetter } from "../../../stores/dku/dodream/useSendLetter";
import { useForm } from "react-hook-form";

const PROCESS = {
  SELECT: "SELECT",
  PREVIEW: "PREVIEW",
  WRITE: "WRITE",
  COMPLETE: "COMPLETE",
};

function DoDreamWrite() {
  const [process, setProcess] = useState(PROCESS.SELECT);
  const [웹정보Image, set웹정보Image] = useState<string>();
  const [학생회비납부내역Image, set학생회비납부내역Image] = useState<string>();

  const webInfoRef = useRef<HTMLInputElement>();
  const studentCouncilRef = useRef<HTMLInputElement>();

  const { sendLetter, error } = useSendLetter();
  const { pictureUrl } = useCardPicture();

  const { openAlertModal } = useAlertModal();
  const router = useRouter();

  useEffect(() => {
    error &&
      openAlertModal(error.response.data.message, () =>
        router.push("/dku/dodream")
      );
  }, [error]);

  const readImage = (image: File, setImageUrl: (imageUrl: string) => void) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      setImageUrl(String(e.target?.result));
    };
    reader.readAsDataURL(image);
  };

  const 웹정보ImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      readImage(e.target.files[0], set웹정보Image);
    }
  };

  const 학생회비납부내역ImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    readImage(e.target.files[0], set학생회비납부내역Image);
  };

  switch (process) {
    case PROCESS.SELECT:
      return (
        <SelectCard
          type={"SELECT"}
          next={() => setProcess(PROCESS.WRITE)}
          cards={Array.from(
            { length: 8 },
            () => "/static/images/dodream-card"
          ).map((v, i) => ({
            src: `${v}-${i + 1}.png`,
            alt: cardAlt[`card-${i + 1}`],
          }))}
        />
      );
    case PROCESS.WRITE:
      return (
        <WriteLetter
          prev={() => setProcess(PROCESS.SELECT)}
          next={() => setProcess(PROCESS.COMPLETE)}
          sendLetter={sendLetter}
          letterData={{}}
          to={"Do Dream 총학생회"}
          inputOption={(register) => {
            return (
              <Inputs>
                <Label>
                  <div>카테고리</div>
                  <Select
                    {...register("category", {
                      validate: (v) =>
                        v === "SELECT" ? "카테고리를 입력해주세요." : undefined,
                    })}
                  >
                    <option value={"SELECT"}>== 선택 ==</option>
                    <option value={"EXCHANGE"}>교류</option>
                    <option value={"SAFETY"}>안전</option>
                    <option value={"EDUCATION"}>교육</option>
                    <option value={"FACILITIES"}>시설</option>
                    <option value={"WELFARE"}>복지</option>
                    <option value={"ETC"}>기타</option>
                  </Select>
                </Label>
                <ImageInputLabel role="button">
                  웹정보 등록 (필수)
                  <ImageInput
                    type="file"
                    accept="image/*"
                    aria-hidden
                    {...register("webInfoImage", {
                      required: {
                        value: true,
                        message: "웹정보 이미지를 등록해주세요.",
                      },
                      onChange: (e) => 웹정보ImageChange(e),
                    })}
                  />
                </ImageInputLabel>
                {웹정보Image && (
                  <Image
                    src={웹정보Image}
                    width={400}
                    height={300}
                    alt={"웹정보 이미지 미리보기"}
                  />
                )}
                <ImageInputLabel role="button">
                  학생회비 납부내역 등록 (선택)
                  <ImageInput
                    type="file"
                    accept="image/*"
                    aria-hidden
                    {...register("studentCouncilFeeImage", {
                      onChange: (e) => 학생회비납부내역ImageChange(e),
                    })}
                  />
                </ImageInputLabel>

                {학생회비납부내역Image && (
                  <Image
                    src={학생회비납부내역Image}
                    width={400}
                    height={300}
                    alt={"학생회비 납부내역 이미지 미리보기"}
                  />
                )}
              </Inputs>
            );
          }}
        />
      );

    case PROCESS.COMPLETE:
      return (
        <Frame>
          <Head>
            <title>편지 전달 완료 - Text me!</title>
          </Head>

          <Container>
            <Title>두드림 학생회에게 건의 편지를 보냈어요</Title>
            {pictureUrl && <CardImage src={pictureUrl} />}
            <Link href={`/dku/dodream`}>
              <RightButton>확인하기</RightButton>
            </Link>
          </Container>
        </Frame>
      );
  }
}

export default DoDreamWrite;

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

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ImageInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-block: 13px;

  font-weight: 600;
  line-height: 17px;
  font-size: 14px;

  border: none;

  box-shadow: 2px 2px 5px 1px rgba(62, 78, 82, 0.4),
    inset -2px -2px 3px rgba(106, 106, 106, 0.25),
    inset 2px 2px 3px rgba(255, 255, 255, 0.5);

  cursor: pointer;

  &:focus {
    outline: none;
  }
  ${color.white}
  ${corner.left}
`;

const ImageInput = styled.input`
  display: none;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
