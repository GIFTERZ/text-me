import Head from "next/head";
import React, { useState } from "react";
import EventDescription from "../../../components/dodream/EventDescription";
import DoDreamRoom from "../../../components/dodream/Room";

const DoDream = () => {
  const [process, setProcess] = useState("ROOM");
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://textme.gifterz.site/dku/dodream"
        />
        <meta
          property="og:image"
          content="static/images/dodream-background.png"
        />
        <meta
          property="og:description"
          content="따뜻한 편지 한 통으로 소중한 인연을 만들어보세요!"
        />
        <meta property="og:title" content="랑데부: 만남의 우편함" />
      </Head>

      {(() => {
        switch (process) {
          case "ROOM":
            return <DoDreamRoom fallback={() => setProcess("DESCRIPTION")} />;

          case "DESCRIPTION":
            return (
              <EventDescription loginCallback={() => setProcess("ROOM")} />
            );

          default:
            return <></>;
        }
      })()}
    </>
  );
};

export default DoDream;
