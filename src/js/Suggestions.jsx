import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white
  font-family: "Montserrat", sans-serif;
  border: 1px;
  border-style: solid;
  border-color: black;
  border-radius: 2px;
  width: 250px;
  height: 30px;
  padding: 10px;
  margin: 1px;
  cursor: pointer;
`;

const Small = styled.div`
  font-size: 11px;
  color: grey;
`;

const Suggestions = props => {
  const results = props.suggestions.map(suggestion => (
    <Wrapper
      onClick={() =>
        props.clickHandler(suggestion.name, suggestion.screen_name)
      }
    >
      <Small>{suggestion.screen_name}</Small>
      {suggestion.name}
    </Wrapper>
  ));

  return results;
};

export default Suggestions;
