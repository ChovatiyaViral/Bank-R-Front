import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";

const WhiskiesCard = (props: any) => {
    const { whiskiesData } = props;
    return (
        <Row className="g-10">
            {
                whiskiesData.map((item: any, index: any) => {
                    return (<Col xl={3} lg={4} sm={6} xs={12} key={index}>
                        <div className="whiskies_card">
                            <div className="card_top_section">
                                <Image src={item.img} width={304} height={304} alt="card_image" />
                            </div>
                            <div className="card_details_section">
                                <div className="card_inner_section">
                                    <div className="main_title">
                                        <h2>{item.title}</h2>
                                        <h3>{item.subTitle}</h3>
                                    </div>
                                    <div className="price_box">
                                        <h4>{item.price}</h4>
                                        <a className="buy_now_btn" target="_blank" href={item.buyLink}>Buy <ReactSVG src="/svg/right-arrow-icon.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>)
                })
            }

        </Row>
    );
};

export default WhiskiesCard;
