import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BackgroundTemplate from "../../components/slow/BackgroundTemplate";
import WriteFinishBox from "../../components/slow/WriteFinishBox";
import SelectCard from "../../components/write/SelectCard";
import { useCardPicture } from "../../stores/useCardPicture";
import { useSendSlowLetterByAddress } from "../../stores/useSendSlowLetterByAddress";
import { useSendSlowLetterByEmail } from "../../stores/useSendSlowLetterByEmail";
import { useSlowLetterInfo } from "../../stores/useSlowLetterInfo";
import { cardAlt } from "../../public/static/images/card-alt";
const WriteLetter = dynamic(() => import("../../components/write/WriteLetter"));
const CardRotator = dynamic(() => import("../../components/slow/CardRotator"));

const PROCESS = {
  SELECT: "SELECT",
  PREVIEW: "PREVIEW",
  WRITE: "WRITE",
  COMPLETE: "COMPLETE",
};

function Write() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [process, setProcess] = useState(PROCESS.SELECT);
  const { setPictureUrl } = useCardPicture();

  const { sendLetter: sendLetterByEmail } = useSendSlowLetterByEmail();
  const { sendLetter: sendLetterByAddress } = useSendSlowLetterByAddress();

  const {
    email,
    address: {
      receiverName,
      zonecode,
      defaultAddress,
      detailAddress,
      phoneNumber,
    },
  } = useSlowLetterInfo();

  useEffect(() => {
    if (getLetterType() === "email" && !email) {
      router.push("/slow-letter/get-info");
    }
    if (
      getLetterType() === "post" &&
      !(
        receiverName &&
        zonecode &&
        defaultAddress &&
        detailAddress &&
        phoneNumber
      )
    ) {
      router.push("/slow-letter/get-info");
    }
  });

  useEffect(() => {
    if (getLetterType() === "post") {
      setProcess(PROCESS.WRITE);
      setPictureUrl("/static/images/room-background.webp");
    }
  }, []);

  const getLetterType = () => {
    return searchParams.get("type") as "post" | "email";
  };

  switch (process) {
    case PROCESS.SELECT:
      return (
        <SelectCard
          type={"SELECT"}
          next={() => setProcess(PROCESS.WRITE)}
          cards={Array.from({ length: 4 }, () => "/static/images/card").map(
            (v, i) => ({
              src: `${v}-${i + 1}.webp`,
              alt: cardAlt[`card-${i + 1}`],
            })
          )}
        />
      );
    case PROCESS.WRITE:
      return (
        <WriteLetter
          prev={() => router.push("/slow-letter/get-info")}
          next={() => setProcess(PROCESS.COMPLETE)}
          sendLetter={
            getLetterType() === "post" ? sendLetterByAddress : sendLetterByEmail
          }
          letterData={
            getLetterType() === "post"
              ? {
                  receiverName,
                  zonecode,
                  defaultAddress,
                  detailAddress,
                  phoneNumber,
                }
              : { email }
          }
          to={"12월 31일의 나"}
        />
      );
    case PROCESS.COMPLETE:
      return (
        <BackgroundTemplate imageUrl={"/static/images/room-background.webp"}>
          <CardRotator />
          <WriteFinishBox />
        </BackgroundTemplate>
      );
  }
}

export default Write;
