import { useState } from "react";
import styled from "styled-components";
import AddressForm from "../../components/slow/AddressForm";
import SelectMethod from "../../components/slow/SelectMethod";
import EmailForm from "../../components/slow/EmailForm";
import { useRouter } from "next/navigation";
import PostCodeForm from "../../components/slow/PostCodeForm";
import SlowBackHeader from "../../components/slow/BackHeader";

import BackgroundTemplate from "../../components/slow/BackgroundTemplate";

const PROCESS = {
  SELECT: "SELECT",
  EMAIL: "EMAIL",
  POSTCODE: "POSTCODE",
  ADDRESS: "ADDRESS",
};

function GetInfo() {
  const [process, setProcess] = useState(PROCESS.SELECT);
  const router = useRouter();

  switch (process) {
    case PROCESS.SELECT:
      return (
        <BackgroundTemplate imageUrl="/static/images/room-background.webp">
          <SlowBackHeader onBackClick={() => router.push("/slow-letter")} />
          <SelectMethod
            selectMail={() => setProcess(PROCESS.EMAIL)}
            selectPost={() => setProcess(PROCESS.POSTCODE)}
          />
        </BackgroundTemplate>
      );
    case PROCESS.EMAIL:
      return (
        <BackgroundTemplate imageUrl="/static/images/room-background.webp">
          <SlowBackHeader onBackClick={() => setProcess(PROCESS.SELECT)} />
          <EmailForm
            complete={() => router.push("/slow-letter/write?type=email")}
          />
        </BackgroundTemplate>
      );
    case PROCESS.POSTCODE:
      return (
        <BackgroundTemplate imageUrl="/static/images/room-background.webp">
          <SlowBackHeader onBackClick={() => setProcess(PROCESS.SELECT)} />
          <PostCodeForm complete={() => setProcess(PROCESS.ADDRESS)} />
        </BackgroundTemplate>
      );
    case PROCESS.ADDRESS:
      return (
        <BackgroundTemplate imageUrl="/static/images/room-background.webp">
          <SlowBackHeader onBackClick={() => setProcess(PROCESS.POSTCODE)} />
          <AddressForm
            complete={() => router.push("/slow-letter/write?type=post")}
          />
        </BackgroundTemplate>
      );
  }
}

export default GetInfo;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h3 {
    position: relative;
    z-index: 1;
    margin: 0;
    width: 85%;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  Button {
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    top: 90%;
  }

  form {
    position: relative;
    z-index: 1;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    top: 10%;

    input {
      background-color: white;
    }

    Button {
      width: 100%;
      top: 0;
    }
  }

  .postcode-input {
    position: relative;
    z-index: 1;
    width: 90% !important;
    left: 50%;
    transform: translateX(-50%);
    top: 10%;
  }
`;
