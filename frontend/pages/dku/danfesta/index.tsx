import { useEffect, useState } from "react";
import DanfestaRoom from "../../../components/danfesta/Room";
import EventDescription from "../../../components/danfesta/EventDescription";
import { useLetters } from "../../../stores/dku/danfesta/useLetters";
import Head from "next/head";

function Danfesta() {
  const [process, setProcess] = useState<"ROOM" | "DESCRIPTION">();

  const { getLetters } = useLetters();

  useEffect(() => {
    getLetters(
      { gender: null },
      () => setProcess("ROOM"),
      () => setProcess("DESCRIPTION")
    );
  }, []);

  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://textme.gifterz.site/dku/danfesta"
        />
        <meta
          property="og:image"
          content="static/images/danfesta.background.png"
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
            return <DanfestaRoom />;

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
}

export default Danfesta;
