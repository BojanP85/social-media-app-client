import React from "react";
import { Popup } from "semantic-ui-react";

export default function CustomPopup({ content, children }) {
  return <Popup inverted content={content} trigger={children} />;
}
