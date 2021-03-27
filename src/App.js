import React, { useState } from "react";
import "./App.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const onChange = (e) => {
    if (e.target.name === "input") setInput(e.target.value);
    else setOutput(e.target.value);
  };

  const encodeHandler = () => setOutput(btoa(input));
  const decodeHandler = () => {
    try {
      setOutput(atob(input));
    } catch (error) {
      setOutput("Invalid Base64. Please provide a valid BASE64 string");
    }
  };

  return (
    <Container fluid="sm">
      <Row>
        <Col className="p-0 pt-5">
          <Form.Group>
            <Form.Control
              placeholder="Enter Input"
              as="textarea"
              name="input"
              value={input}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="text-center">
          <Button variant="success" size="lg" onClick={encodeHandler}>
            Encode
          </Button>
        </Col>
        <Col xs={6} className="text-center">
          <Button variant="danger" size="lg" onClick={decodeHandler}>
            Decode
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="p-0 pt-3">
          <Form.Group>
            <Form.Control
              placeholder="Output"
              as="textarea"
              name="output"
              value={output}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
