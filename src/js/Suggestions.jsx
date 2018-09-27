import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px;
  border-style: solid;
  border-color: black;
  width: 300px;
  height: 50px;
  padding: 5px;
  text-align: center;
`;

const Small = styled.div`
  font-size: 11px;
  color: grey;
  margin-bottom: 5px;
`;

const Suggestions = props => {
  const results = props.suggestions.map(suggestion => (
    <Wrapper>
      <div
        onClick={() =>
          props.clickHandler(suggestion.name, suggestion.screen_name)
        }
      >
        <Small>@{suggestion.screen_name}</Small>
        {suggestion.name}
      </div>
    </Wrapper>
  ));

  return results;
};

export default Suggestions;
