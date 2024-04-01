import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const Search = (Props) => {
  return (
    <InputGroup>
      <Form.Control placeholder="এখানে সার্চ করুন" onChange={Props.onChange} />
    </InputGroup>
  );
};

export default Search;
