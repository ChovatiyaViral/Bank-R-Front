"use client";
import React from "react";
import { Container } from "react-bootstrap";

const CookiePolicyPage = () => {
  return (
    <Container className="bg-white">
      <div className="privacy_policy_section">
        <h1>Cookies Policy</h1>
        <p>
          You can set your browser to refuse all or some browser cookies, or to
          alert you when websites set or access cookies. If you disable or
          refuse cookies, please note that some parts of this website may become
          inaccessible or not function properly.
        </p>

        <h2>PERMITTED USERS OF THIS WEBSITE</h2>
        <p>
          This website <b>thebankrestaurant.co.uk</b> is intended to be used
          and accessed by people who are of legal age to purchase and consume
          alcohol. If you are of legal age in your country/State of residence
          and the country/State from which you are accessing this Website,
          please continue. If you are not, please exit this Website immediately.
        </p>
        <h2>CHANGE OF PURPOSE</h2>
        <p>
          We will only use your personal data for the purposes for which we
          collected it, unless we reasonably consider that we need to use it for
          another reason and that reason is compatible with the original
          purpose. If you wish to get an explanation as to how the processing
          for the new purpose is compatible with the original purpose, please
          contact us at <b>contactus@thebankrestaurant.co.uk</b>.
        </p>
        <p>
          If we need to use your personal data for an unrelated purpose, we will
          notify you and we will explain the legal basis which allows us to do
          so.
        </p>
        <p>
          Please note that we may process your personal data without your
          knowledge or consent, in compliance with the above rules, where this
          is required or permitted by law.
        </p>
      </div>
    </Container>
  );
};

export default CookiePolicyPage;
