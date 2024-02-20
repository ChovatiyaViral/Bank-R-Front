"use client";
import React, { useEffect, useState } from "react";

const AcceptCookies = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowPopup(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowPopup(false);
  };
  return (
    showPopup && (
      <div className={`modal-wrapper open`}>
        <div className="modal-container">
          <h1 className="heading">Some cookies are in the oven !</h1>
          <p className="subtext">
            This website uses cookies to improve the user experiance.By using
            our website you are consent to all cookies in accordance with our
            Cookie Policy.
          </p>

          <div className="AcceptCookies-btnContainer">
            <div>
              <button
                type="button"
                className="btn btn-primary mx-3"
                onClick={handleAcceptCookies}
              >
                Accept
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger mx-3"
                onClick={handleDeclineCookies}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AcceptCookies;
