import React, { Fragment } from "react";
import uuid from "react-uuid";

interface Props {
  text: string;
}
const TextParser = ({ text }: Props) => {
  return (
    <>
      {text.split("\n").map((value) => (
        <Fragment key={uuid()}>
          {value}
          <br />
        </Fragment>
      ))}
    </>
  );
};

export default TextParser;
