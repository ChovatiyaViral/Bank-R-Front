"use client";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "",
    imageUrl:
      "/upload/4ccb9fab-c445-4343-884d-3992a6588e98-620x444-400x400-1433934149.jpeg",
  },
  {
    cardHeading: "Roasted Red Potatoes with Rosemary",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "*",
    isOrder: "order",
    imageUrl: "/upload/dl_00_01_021-400x400.jpg",
  },
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "*",
    imageUrl: "/upload/dl_00_01_021-400x400.jpg",
    isOrder: "order",
  },
  {
    cardHeading: "Roasted Red Potatoes with Rosemary",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "",
    isOrder: "order",
    imageUrl: "/upload/dl_00_01_021-400x400.jpg",
  },
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "",
    imageUrl:
      "/upload/4ccb9fab-c445-4343-884d-3992a6588e98-620x444-400x400-1433934149.jpeg",
  },
  {
    cardHeading: "Roasted Red Potatoes with Rosemary",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "",
    imageUrl:
      "/upload/4ccb9fab-c445-4343-884d-3992a6588e98-620x444-400x400-1433934149.jpeg",
  },
  {
    cardHeading: "Roasted Red Potatoes with Rosemary",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "",
    imageUrl:
      "/upload/4ccb9fab-c445-4343-884d-3992a6588e98-620x444-400x400-1433934149.jpeg",
  },
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "",
    imageUrl:
      "/upload/4ccb9fab-c445-4343-884d-3992a6588e98-620x444-400x400-1433934149.jpeg",
  },
];

const ChiefrecomendedCardComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          {items.length > 0
            ? items.map((item, index: any) => {
                return (
                  <Col
                    lg={3}
                    xs={12}
                    key={index}
                    style={{ padding: "0" }}
                    className="menupagecard-wrapper"
                  >
                    <Image src={item.imageUrl} className="card-image" />
                    <div className="menupagecard-afterhower">
                      <span>
                        <FontAwesomeIcon icon={faCartShopping} size="lg" />{" "}
                      </span>

                      <span>
                        <FontAwesomeIcon
                          icon={faMagnifyingGlass}
                          style={{ color: "#edeff2" }}
                          size="lg"
                        />
                      </span>
                    </div>
                    <div className="inner-cardwrapper">
                      <h4>
                        <span className="cardheading">{item.cardHeading}</span>
                        <span className="currency">{item.cardPrice}</span>
                      </h4>
                      <p>
                        <span className="cardsubtext">{item.cardSubtext}</span>
                        <span className="order-startwrapper">
                          {item.isOrder ? (
                            <span className="order">{item.isOrder}</span>
                          ) : (
                            ""
                          )}

                          {item.isStar ? (
                            <span className="star">
                              <FontAwesomeIcon icon={faStar} />
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </p>
                    </div>
                  </Col>
                );
              })
            : ""}
        </Row>
      </Container>
    </div>
  );
};

export default ChiefrecomendedCardComponent;
