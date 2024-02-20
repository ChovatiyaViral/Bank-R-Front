"use client";
import { Formik } from "formik";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Tablebooking from "../modal/Tablebooking";
import Thankyou from "../modal/Thankyou";

const ContactForm = () => {
  const [contactDetailUpload, setContactDetailUpload] = useState(true);
  const [isLoading, setLoader] = useState(false);
  const [isReservationModalActive, setReservationModalActive] = useState(false);
  const [isThankyouModalActive, setThankyouModalActive] = useState(false);

  const thankyoumodal = () => {
    setThankyouModalActive(!isThankyouModalActive);
    document.body.classList.toggle("overflow-hidden");
  };


  const reservationmodal = () => {
    setReservationModalActive(!isReservationModalActive);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      {contactDetailUpload ? (
        <>
          <div className="contact-form_wrapper">
            <h3>CONTACT US</h3>
            {/* <p><a href="tel:+44 1466 543103">+44 1466 543103</a> – <a href="mailto:contactus@thebankrestaurant.co.uk">contactus@thebankrestaurant.co.uk</a></p> */}
            <div className="subtext">
              <div className="info_div mb-4 mt-4">
                <img src="/contactImages/mobile-icon.png" />
                  <a href="tel:+44 1466 543103">+44 1466 543103</a>
                
              </div>
              <div className="info_div">
                <img src="/contactImages/mail-icon.png" />
                
                  <a href="mailto:info@thebankrestauranthuntly.com">info@thebankrestauranthuntly.com</a>
               
              </div>
              {/* <strong>For booking, please use reservation form (on the top right)</strong> */}
            </div>
            {/* <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={""}
            onSubmit={async (values, { resetForm }) => {
              try {
                await fetch("https://apis.thebankrestaurant.co.uk/v1/contact/register", {
                  method: "POST",
                  body: JSON.stringify({
                    name: values?.name,
                    email: values?.email,
                    message: values?.message,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
                  .then((res) => res.json())

                  .then((response) => {
                    setLoader(false);
                    if (response.status === 200) {
                      resetForm();
                      setContactDetailUpload(false);
                    }
                  });
              } catch (err) {
                console.log(err);
                setLoader(false);
              }
            }}
          >
            {(formikProps) => {
              return (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setLoader(true);
                    formikProps.handleSubmit();
                  }}
                >
                  <Form.Group controlId="name" className={`mb-4`}>
                    <Form.Control
                      type="text"
                      placeholder="Name*"
                      value={formikProps.values.name}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">{formikProps.errors.name}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="email" className={`mb-4`}>
                    <Form.Control
                      type="email"
                      placeholder="Email*"
                      value={formikProps.values.email}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">{formikProps.errors.email}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="message" className={`mb-4`}>
                    <Form.Control
                      as="textarea"
                      placeholder="Message*"
                      value={formikProps.values.message}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}

                    />
                    <Form.Control.Feedback type="invalid">{formikProps.errors.message}</Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit" disabled={isLoading} className="w-100">
                    {isLoading ? "Submitting" : "Send"}
                  </Button>
                </Form>
              );
            }}
          </Formik> */}
          </div>
        </>
      ) : (
        <div className=" contactus-Thankyou_modal">
          <h3 className="heading-text">Thank you for contacting us!</h3>
          <p className="subtext">A member of our team will be in contact with you soon. Meanwhile, to make a booking, head to our reservation form.</p>
          {/* <Button variant="primary" type="submit" className="w-100 send-btn" onClick={reservationmodal}>
            Reservation
          </Button> */}
        </div>
      )}

      <Tablebooking
        onModalClose={reservationmodal}
        modalClass={`thankyou-modal ${isReservationModalActive ? "open" : ""}`}
        onThankyouClose={thankyoumodal}
      />
      <Thankyou
        onModalClose={thankyoumodal}
        modalClass={`thankyou-modal ${isThankyouModalActive ? "open" : ""}`}
      />
    </>
  );
};

export default ContactForm;
