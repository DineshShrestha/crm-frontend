import React from "react";
import { useDispatch } from "react-redux";
import { filterSearchTicket } from "../../pages/ticket-list/ticketsAction";
import { Form, Row, Col } from "react-bootstrap";

const SearchForm = () => {
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { value } = e.target;
    dispatch(filterSearchTicket(value));
  };
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Search:{" "}
        </Form.Label>
        <Col ms="9">
          <Form.Control
            name="searchStr"
            onChange={handleOnChange}
            placeholder="search..."
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
