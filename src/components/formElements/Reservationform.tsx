"use client";
import { Formik } from "formik";
import React, { useState } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Calender from "./calender";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const Reservationform = () => {
  const [selectedValue, setSelectedValue] = useState({});
  const options = [
    { value: "1 person", label: "1 person" },
    { value: "2 person", label: "2 person" },
    { value: "3 person", label: "3 person" },
    { value: "4 person", label: "4 person" },
    { value: "5 person", label: "5 person" },
    { value: "6 person", label: "6 person" },
  ];
  const timeoptions = [
    { value: "01:00 PM", label: "01:00 PM" },
    { value: "02:00 PM", label: "02:00 PM" },
    { value: "03:00 PM", label: "03:00 PM" },
    { value: "04:00 PM", label: "04:00 PM" },
    { value: "05:00 PM", label: "05:00 PM" },
    { value: "06:00 PM", label: "06:00 PM" },
    { value: "07:00 PM", label: "07:00 PM" },
    { value: "08:00 PM", label: "08:00 PM" },
    { value: "09:00 PM", label: "09:00 PM" },
    { value: "10:00 PM", label: "10:00 PM" },
    { value: "11:00 PM", label: "11:00 PM" },
  ];

  const handleValueChange = (newValue: any) => {
    setSelectedValue(newValue);
  };

  return (
    <div className="reservation-form_container">
      <h1>Table</h1>
      <p>Booking</p>
      <div className="reservation-form_inner">
        <Container>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={""}
            onSubmit={(values) => {
              console.log("values", values);
            }}
          >
            {(formikProps) => (
              <Form onSubmit={formikProps.handleSubmit}>
                <Row>
                  <Col md={4} xs={12}>
                    <Form.Label className="form-label">Name*</Form.Label>
                    <Form.Group controlId="name" className={`mb-4`}>
                      <Form.Control
                        type="text"
                        className="formcontrol"
                        value={formikProps.values.name}
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        //  isInvalid={formikProps.touched.email && formikProps.errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formikProps.errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={4} xs={12}>
                    <Form.Group controlId="email" className={`mb-4`}>
                      <Form.Label className="form-label">Email*</Form.Label>
                      <Form.Control
                        type="email"
                        value={formikProps.values.email}
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        className="formcontrol"
                        //  isInvalid={formikProps.touched.password && formikProps.errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formikProps.errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={4} xs={12}>
                    <Form.Group controlId="email" className={`mb-4`}>
                      <Form.Label className="form-label">Phone*</Form.Label>
                      <Form.Control
                        type="email"
                        value={formikProps.values.email}
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        className="formcontrol"
                        //  isInvalid={formikProps.touched.password && formikProps.errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formikProps.errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md={4} xs={12} >
                    <Form.Label className="form-label" >Date*</Form.Label>
                    <Calender />
                  </Col>
                  <Col md={4} xs={12} className={`mb-4`}>
                    <Form.Label className="form-label mb-4 top-label_space">Time*</Form.Label>

                    <Select
                      options={timeoptions}
                      className="reactselect reservation-reactselect"
                      onChange={handleValueChange}
                      placeholder={"04:00 PM"}
                    />
                  </Col>
                  <Col md={4} xs={12} className={`mb-4`}>
                    <Form.Label className="form-label">Seats*</Form.Label>

                    <Select
                      options={options}
                      className="reactselect reservation-reactselect"
                      onChange={handleValueChange}
                      placeholder="1 Person"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group controlId="message" className={`mb-4`}>
                      <Form.Label className="form-label">
                        SPECIAL REQUESTS
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Message*"
                        value={formikProps.values.message}
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        className="formcontrol specialrequest-textarea"
                        //  isInvalid={formikProps.touched.message && formikProps.errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formikProps.errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  type="submit"
                  className="btn-color"
                  style={{ textTransform: "uppercase" }}
                >
                  Book Now
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
      <span className="close-button">
        <FontAwesomeIcon
          icon={faXmark}
          size="xl"
          style={{ color: "#FFFFFF" }}
          className="x-btn"
        />
      </span>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Reservationform), {ssr: false});
