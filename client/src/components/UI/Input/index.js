import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  let input = null;
  switch (props.type) {
    case "text":
      input = (
        <Form.Group className="mb-3">
          <Form.Label>{props.label && props.label}</Form.Label>
          <Form.Control
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            {...props}
          />
          <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
        </Form.Group>
      );
      break;
      case 'textarea':
          input = (
            <Form.Group className="mb-3">
              <Form.Label>{props.label && props.label}</Form.Label>
              <Form.Control 
              as="textarea"
               placeholder={props.placeholder}
               value={props.value}
                onChange={props.onChange}
                name={props.name}
                {...props}
                />
              <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
            </Form.Group>
          );
      break;
    default:
        input = (
            <Form.Group className="mb-3">
              <Form.Label>{props.label && props.label}</Form.Label>
              <Form.Control
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                {...props}
              />
              <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
            </Form.Group>
          );
      break;
  }
  return input;
};

export default Input;
