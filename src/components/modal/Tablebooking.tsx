"use client";
import { Formik } from "formik";
import React, { useState } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Calender from "../formElements/calender";
import Select from "react-select";
import { toast } from "react-toastify";
import ReactDatePicker from "react-datepicker";
import dynamic from "next/dynamic";

const Tablebooking = (props: any) => {
  const { modalClass, onModalClose, status, onThankyouClose } = props;

  const [isLoading, setLoader] = useState(false);
  const [selectedValue, setSelectedValue]: any = useState({
    reservation_date: new Date(),
    seats: "",
    reservation_time: null
  });

  const options = [
    { value: "1", label: "1 person" },
    { value: "2", label: "2 person" },
    { value: "3", label: "3 person" },
    { value: "4", label: "4 person" },
    { value: "5", label: "5 person" },
    { value: "6", label: "6 person" },
  ];

  // const timeoptions = [
  //   { value: "01:00 PM", label: "01:00 PM" },
  //   { value: "02:00 PM", label: "02:00 PM" },
  //   { value: "03:00 PM", label: "03:00 PM" },
  //   { value: "04:00 PM", label: "04:00 PM" },
  //   { value: "05:00 PM", label: "05:00 PM" },
  //   { value: "06:00 PM", label: "06:00 PM" },
  //   { value: "07:00 PM", label: "07:00 PM" },
  //   { value: "08:00 PM", label: "08:00 PM" },
  //   { value: "09:00 PM", label: "09:00 PM" },
  //   { value: "10:00 PM", label: "10:00 PM" },
  //   { value: "11:00 PM", label: "11:00 PM" },
  // ];


  // const timeValueOption = [
  //   { value: "01:00 AM", label: "01:00 AM" },
  //   { value: "01:30 AM", label: "01:30 AM" },
  //   { value: "02:00 AM", label: "02:00 AM" },
  //   { value: "02:30 AM", label: "02:30 AM" },
  //   { value: "03:00 AM", label: "03:00 AM" },
  //   { value: "03:30 AM", label: "03:30 AM" },
  //   { value: "04:00 AM", label: "04:00 AM" },
  //   { value: "04:30 AM", label: "04:30 AM" },
  //   { value: "05:00 AM", label: "05:00 AM" },
  //   { value: "05:30 AM", label: "05:30 AM" },
  //   { value: "06:00 AM", label: "06:00 AM" },
  //   { value: "06:30 AM", label: "06:30 AM" },
  //   { value: "07:00 AM", label: "07:00 AM" },
  //   { value: "07:30 AM", label: "07:30 AM" },
  //   { value: "08:00 AM", label: "08:00 AM" },
  //   { value: "08:30 AM", label: "08:30 AM" },
  //   { value: "09:00 AM", label: "09:00 AM" },
  //   { value: "09:30 AM", label: "09:30 AM" },
  //   { value: "10:00 AM", label: "10:00 AM" },
  //   { value: "10:30 AM", label: "10:30 AM" },
  //   { value: "11:00 AM", label: "11:00 AM" },
  //   { value: "11:30 AM", label: "11:30 AM" },
  //   { value: "12:00 AM", label: "12:00 AM" },
  //   { value: "12:30 AM", label: "12:30 AM" },
  //   { value: "01:00 PM", label: "01:00 PM" },
  //   { value: "01:30 PM", label: "01:30 PM" },
  //   { value: "02:00 PM", label: "02:00 PM" },
  //   { value: "02:30 PM", label: "02:30 PM" },
  //   { value: "03:00 PM", label: "03:00 PM" },
  //   { value: "03:30 PM", label: "03:30 PM" },
  //   { value: "04:00 PM", label: "04:00 PM" },
  //   { value: "04:30 PM", label: "04:30 PM" },
  //   { value: "05:00 PM", label: "05:00 PM" },
  //   { value: "05:30 PM", label: "05:30 PM" },
  //   { value: "06:00 PM", label: "06:00 PM" },
  //   { value: "06:30 PM", label: "06:30 PM" },
  //   { value: "07:00 PM", label: "07:00 PM" },
  //   { value: "07:30 PM", label: "07:30 PM" },
  //   { value: "08:00 PM", label: "08:00 PM" },
  //   { value: "08:30 PM", label: "08:30 PM" },
  //   { value: "09:00 PM", label: "09:00 PM" },
  //   { value: "09:30 PM", label: "09:30 PM" },
  //   { value: "10:00 PM", label: "10:00 PM" },
  //   { value: "10:30 PM", label: "10:30 PM" },
  //   { value: "11:00 PM", label: "11:00 PM" },
  //   { value: "11:30 PM", label: "11:30 PM" },
  //   { value: "12:00 PM", label: "12:00 PM" },
  //   { value: "12:30 PM", label: "12:30 PM" },
  // ];

  const handleValueChange = (newValue: any, name: string) => {
    if (name === "reservation_date" && new Date().toDateString() === newValue.value.toDateString()) {
      setSelectedValue({ ...selectedValue, [name]: newValue.value, "reservation_time": null });
    } else {
      setSelectedValue({ ...selectedValue, [name]: newValue.value });
    }
  };
  const handlemodalclose = () => {
    onModalClose();
    // thankyoumodal();
    onThankyouClose();
  };

  // const getTimeOptions = (selectedDate: any, option: any) => {
  //   return option;
  // }

  const getMinTime = (date: any) => {
    if (new Date().toDateString() === date.toDateString()) {
      let toDayTime = new Date();
      if (toDayTime.getMinutes() > 30) {
        toDayTime = new Date(toDayTime.getTime() + (60 - toDayTime.getMinutes()) * 60 * 1000)
      } else {
        toDayTime = new Date(toDayTime.getTime() + (30 - toDayTime.getMinutes()) * 60 * 1000)
      }
      return toDayTime;
    } else {
      return new Date("01/01/2023 12:00 AM");
    }
  }

  return (
    <div className={`reservation-container tabel_booking ${modalClass}`}>
      <div className="reservation-form_container">
        <h1>Table</h1>
        <p>Request</p>
        <div className="reservation-form_inner">
          <Container>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone_no: "",
                special_request: "",
              }}
              validationSchema={""}
              onSubmit={async (values, { resetForm }) => {
                try {
                  await fetch("https://apis.thebankrestaurant.co.uk/v1/reservation/booking", {
                    method: "POST",
                    body: JSON.stringify({
                      name: values?.name,
                      email: values?.email,
                      special_request: values?.special_request,
                      phone: values?.phone_no,
                      reservation_date: `${new Date(selectedValue.reservation_date).getFullYear()}-${new Date(selectedValue.reservation_date).getMonth() < 10 ? (`0${(new Date(selectedValue.reservation_date).getMonth() + 1)}`) : (new Date(selectedValue.reservation_date).getMonth() + 1)}-${new Date(selectedValue.reservation_date).getDate() < 10 ? (`0${new Date(selectedValue.reservation_date).getDate()}`) : new Date(selectedValue.reservation_date).getDate()}`,
                      reservation_time: (selectedValue.reservation_time && new Date(selectedValue.reservation_time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })),
                      seats: selectedValue?.seats
                    }),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8",
                    },
                  })
                    .then((res) => res.json())

                    .then((response) => {
                      setLoader(false);
                      if (response.status === 200) {
                        handlemodalclose();
                        resetForm();
                        setSelectedValue({
                          reservation_date: new Date(),
                          seats: "",
                          reservation_time: null
                        })
                      } else {
                        toast.error(`${(response?.message).replaceAll("_", " ")}`);
                      }
                    });
                } catch (err) {
                  console.log(err);
                  setLoader(false);
                }
              }}
            >
              {(formikProps) => (
                <Form onSubmit={(e) => {
                  e.preventDefault();
                  setLoader(true);
                  formikProps.handleSubmit();
                }}>
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
                      <Form.Group controlId="phone_no" className={`mb-4`}>
                        <Form.Label className="form-label">Phone*</Form.Label>
                        <Form.Control
                          type="tel"
                          value={formikProps.values.phone_no}
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
                    <Col md={4} xs={12}>
                      <Form.Label className="form-label ">Date*</Form.Label>
                      <Calender selectedValue={selectedValue} handleValueChange={handleValueChange} />
                    </Col>
                    <Col md={4} xs={12}>
                      <Form.Label className="form-label top-label_space">Time*</Form.Label>
                      <ReactDatePicker
                        selected={selectedValue.reservation_time}
                        onChange={(date: any) => handleValueChange({ value: date }, "reservation_time")}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        minTime={getMinTime(selectedValue.reservation_date)}
                        maxTime={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59)}
                        timeCaption="Time"
                        timeFormat="h:mm aa"
                        dateFormat="h:mm aa"
                        className="react-time-picker-div"
                      />
                    </Col>
                    <Col md={4} xs={12}>
                      <Form.Label className="form-label top-label_space">Seats*</Form.Label>

                      <Select
                        options={options}
                        className="reactselect reservation-reactselect"
                        placeholder="Select Person"
                        name="seats"
                        value={selectedValue.seats ? { value: selectedValue.seats, label: `${selectedValue.seats} Person` } : null}
                        onChange={(e) => handleValueChange(e, "seats")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Form.Group controlId="special_request" className={`mb-4`}>
                        <Form.Label className="form-label">
                          SPECIAL REQUESTS
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Message*"
                          value={formikProps.values.special_request}
                          onChange={formikProps.handleChange}
                          onBlur={formikProps.handleBlur}
                          className="formcontrol specialrequest-textarea"
                        //  isInvalid={formikProps.touched.message && formikProps.errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formikProps.errors.special_request}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    type="submit"
                    className="btn-color"
                    style={{ textTransform: "uppercase" }}
                  // onClick={() => handlemodalclose()}
                  >
                    Book Now
                  </Button>
                </Form>
              )}
            </Formik>
          </Container>
        </div>

        <span className="close-button" onClick={onModalClose}>
          <FontAwesomeIcon
            icon={faXmark}
            size="xl"
            style={{ color: "#FFFFFF" }}
            className="x-btn"
          />
        </span>
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Tablebooking), {ssr: false});
