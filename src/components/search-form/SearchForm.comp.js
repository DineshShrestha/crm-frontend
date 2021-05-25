import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
const SearchForm = ({handleOnChange, str}) => {

    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm="3">Search:{" "}</Form.Label>
                <Col ms="9">
                    <Form.Control 
                        name="searchStr" 
                        onChange={handleOnChange}
                        value={str}
                        placeholder="search..."/>
                </Col>
            </Form.Group>
        </Form>
    )
}

SearchForm.propTypes = {
    handleOnChange:PropTypes.func.isRequired,
    str:PropTypes.string.isRequired,
}

export default SearchForm
