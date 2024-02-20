import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
const Inputs = (props: any) => {
  const { inputType, inputPlaceholder, inputid ,handleChange,setValue} = props;
  return (
    <>
      <FloatingLabel
        className={`mb-4` }
        controlId={inputid}
        label={inputPlaceholder}
      >
        <Form.Control required type={inputType} placeholder={inputPlaceholder} onChange={handleChange} />
        <Form.Control.Feedback type="invalid">
          Please provide a valid data.
        </Form.Control.Feedback>
      </FloatingLabel>
    </>
  );
};

export default Inputs;