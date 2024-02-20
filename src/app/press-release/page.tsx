"use client";
import Image from 'next/image';
import React from 'react'
import { Container } from 'react-bootstrap';

const PressRelease = () => {
    return (
        <div className='page_release_section'>
            <Container>
                <h1>Gifting our coronation whiskey set to HM queen camilla </h1>
                <h2>On Wed July 5th in Edinburgh, we were proud to present HM Queen Camilla with our Coronation Edition of three special aged Laphroaig whiskies, at her first Royal engagement in Scotland, as Queen.</h2>

                <div className='press_content_div'>
                        <Image
                            src="/contactImages/press-image.jpg"
                            alt="image"
                            width={608}
                            height={534}
                            className="press_img"
                        />
                    <div className='content_section'>
                        <p>The special set, which were all sequentially numbered, were launched in time for the Coronation weekend back in May and only 150 were produced, which sold out globally within a week. However, we kept number one and presented it to HM Queen Camilla as part of her celebrations for the Scottish Coronation with King Charles that afternoon.</p>
                        <p>Evan Robertson, Director of Duncan Taylor Scotch Whisky said; “It was an honour to meet HM Queen Camilla just a few hours before she and the King were given the Scottish Honours at St Giles Cathedral. To present this Coronation Set to commemorate such a momentous year, is a source of huge pride for the Duncan Taylor Scotch Whisky team as we know it is the King’s favourite dram.”</p>
                        <p>The inaugural event, to celebrate Regenerative Textiles, was held at Dovecot Studios in Edinburgh and explored and celebrated textile production that enhances the planet. Organised by Anna Freemantle-Zee, Her Majesty The Queen met with a number of designers and artists before being presented with the Coronation Set.</p>
                        <p>Hand selected by Chairman of Duncan Taylor Scotch Whisky, Euan Shand, the exceptional trilogy of Laphroaig whiskies, aged 18, 23 and 26 are each finished in a Duncan Taylor sherry Octave cask adding an exceptional flavour, colour and overall depth to each</p>
                        <p>The Coronation Edition is presented in a stunning hexagon clear case, illuminated by remote control and gold mirror accents, befitting of the calibre of these whiskies. A signed and numbered certificate of authenticity comes with each set along with tasting notes and a pair of handling gloves. In honour of the prestigious occasion that the Laphroaig whiskies have been created for, the case comes within a royal blue drawstring bag with gold lettering, promoting the Coronation.</p>
                        <p>Two Coronation sets were retained. One has been kept for our archives and the other will be auctioned at Sotheby’s Auction House in October.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default PressRelease;
