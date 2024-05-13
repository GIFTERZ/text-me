import { useEffect, useState } from "react";
import DanfestaRoom from "../../../components/danfesta/Room";
import EventDescription from "../../../components/danfesta/EventDescription";

function Danfesta() {
  const isDkuUser = false;
  const [process, setProcess] = useState<"ROOM" | "DESCRIPTION">("ROOM");

  useEffect(() => {
    if (!isDkuUser) {
      setProcess("DESCRIPTION");
    }
  }, [isDkuUser]);

  switch (process) {
    case "ROOM":
      return <DanfestaRoom />;

    case "DESCRIPTION":
      return <EventDescription />;
  }
}

export default Danfesta;
