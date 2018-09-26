import React from "react";

const Tweet = props => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.id}</td>
      <td>{props.date}</td>
      <td>{props.count}</td>
    </tr>
  );
};

export default Tweet;
