import React from "react";
import IText from "common/interfaces/IText";

export default function Title({ children }: IText) {
  return <h1>{children}</h1>;
}
