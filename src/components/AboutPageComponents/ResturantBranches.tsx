"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const addressArr = [
  {
    headingText: "GRAND RESTAURANT PARAGON",
    subtext:
      "732/21 Second Street, Manchester King Street, Kingston United Kingdom",
    cordinates: "1.800.456.6743",
    directions: "Get Directions",
  },
  {
    headingText: "GRAND RESTAURANT PARAGON",
    subtext:
      "732/21 Second Street, Manchester King Street, Kingston United Kingdom",
    cordinates: "1.800.456.6743",
    directions: "Get Directions",
  },
  {
    headingText: "GRAND RESTAURANT PARAGON",
    subtext:
      "732/21 Second Street, Manchester King Street, Kingston United Kingdom",
    cordinates: "1.800.456.6743",
    directions: "Get Directions",
  },
  {
    headingText: "GRAND RESTAURANT PARAGON",
    subtext:
      "732/21 Second Street, Manchester King Street, Kingston United Kingdom",
    cordinates: "1.800.456.6743",
    directions: "Get Directions",
  },
];

const ResturantBranches = (props:any) => {
  const {primaryText,secondaryText}=props;
  return (
    <>
      <div className="resturant-branches_wrapper">
        <div className="resturant-branches_headingtext">
          <h1>{primaryText}</h1>
          <h2>{secondaryText}</h2>
        </div>
        <div className="resturant-branches_address">
          <Container>
            <Row>
              {addressArr.length > 0
                ? addressArr.map((list, index: any) => {
                    return (
                      <>
                        <Col md={3} sx={12}>
                          <div className="address-container">
                            <h1>GRAND RESTAURANT PARAGON</h1>
                            <p>
                              732/21 Second Street, Manchester King Street,
                              Kingston United Kingdom
                            </p>
                            <span>1.800.456.6743</span>
                            <h3>
                              <span>*</span>Get Directions
                            </h3>
                          </div>
                        </Col>
                      </>
                    );
                  })
                : null}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ResturantBranches;
