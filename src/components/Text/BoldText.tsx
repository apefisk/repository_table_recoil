import React from "react";
import IText from "common/interfaces/IText";
import "./Text.scss";

export default function BoldText({ children }: IText) {
  return <div className="text_bold">{children}</div>;
}
