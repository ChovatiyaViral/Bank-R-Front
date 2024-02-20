"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Tablebooking from "../modal/Tablebooking";
import Thankyou from "../modal/Thankyou";
import ReservationText from "../modal/ReservationText";
const OnlineReservation = (props: any) => {
  const [isReservationModalActive, setReservationModalActive] = useState(false);
  const { primaryText, secondaryText } = props;
  const [isThankyouModalActive, setThankyouModalActive] = useState(false);
  const [isReservationContactActive, setReservationContactActive] = useState(false);

  const thankyoumodal = () => {
    setThankyouModalActive(!isThankyouModalActive);
    document.body.classList.toggle("overflow-hidden");
  };

  const contactModal = () => {
    setReservationContactActive(!isReservationContactActive);
    // document.body.classList.toggle("overflow-hidden");
  };


  const options = [
    { value: "1 person", label: "1 person" },
    { value: "2 person", label: "2 person" },
    { value: "3 person", label: "3 person" },
    { value: "5 person", label: "5 person" },
    { value: "6 person", label: "6 person" },
    { value: "7 person", label: "7 person" },
    { value: "8 person", label: "8 person" },
    { value: "9 person", label: "9 person" },
    { value: "10 person", label: "10 person" },
    { value: "11 person", label: "11 person" },
    { value: "12 person", label: "12 person" },
    { value: "13 person", label: "13 person" },
    { value: "14 person", label: "14 person" },
    { value: "15       person", label: "15       person" },
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

  const reservationmodal = () => {
    setReservationModalActive(!isReservationModalActive);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <div className="onlineReservation" style={{ marginTop: "50px" }}>
        <div className="parallax_title">
          <p className="make_text text-white">Make</p>
          <p className="make-reservation text-white">Reservation</p>
        </div>
      </div>

      <div className="onlineReservation-lowerwrapper">
        <div className="inner-wrapper">
          <p>
            To make a reservation, <br /> Please Click Below,
            <br />
            {/* +44(0)1466 543103  - contactus@thebankrestaurant.co.uk */}
          </p>
          {/* <div className="formelement onlydesktop flex-x-direction">
            <div className="formelement_inner">
              <ReactSVG src={`/svg/calendar.svg`} />
              <Calender />
            </div>
            <div className="formelement_inner">
              <ReactSVG src={`/svg/clock.svg`} />
              <Select
                options={timeoptions}
                className="reactselect"
                placeholder={"04:00 PM"}
              />
            </div>
            <div className="formelement_inner">
              <ReactSVG src={`/svg/profile.svg`} />
              <Select options={options} className="reactselect" />
            </div>
          </div> */}
          <p style={{ maxWidth: "250px", margin: "0 auto" }} onClick={contactModal} className="reservation-btn">
            <button type="submit" className="btn">
              Reservation
            </button>
          </p>
          <p className="mt-2 mb-0">or</p>
          <p className="mt-0 mb-0">Call us on</p>
          <p className="mt-0 mb-0">
            {/* To make a reservation,  <br /> Please go to,
            <br /> */}
            <a href="tel:+44 1466 543103" style={{ color: "#000" }}>
              +44 1466 543103
            </a>
          </p>
        </div>
      </div>

      <Tablebooking onModalClose={reservationmodal} modalClass={`thankyou-modal ${isReservationModalActive ? "open" : ""}`} onThankyouClose={thankyoumodal} />
      <Thankyou onModalClose={thankyoumodal} modalClass={`thankyou-modal ${isThankyouModalActive ? "open" : ""}`} />
      <ReservationText
        onModalClose={contactModal}
        modalClass={`thankyou-modal ${isReservationContactActive ? "open" : ""}`}
      />
    </>
  );
};

export default dynamic(() => Promise.resolve(OnlineReservation), { ssr: false });
