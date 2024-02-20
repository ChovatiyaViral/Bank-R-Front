"use client";
import OurMenu from "@/components/HomePageComponents/OurMenu";
import React from "react";
import WhiskiesCard from "@/components/ContactComponents/WhiskiesCard";

const OurWhiskies = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState("BLENDED SCOTCH WHISKY");

  React.useEffect(() => {
    if (window.innerWidth <= 700) {
      setIsMobile(true);
    }
  }, []);

  const blendedMalts = [
    {
      img: "/duncanWhiskiesImages/blackbull-Kyloe.png",
      title: "Black Bull Kyloe",
      subTitle:
        "70cl / 50.0 % abv / Toffee Vanilla / Highland / Blended Scotch Whisky",
      price: "£30.00",
      buyLink:
        "https://thespiritsembassy.com/collections/black-bull/products/black-bull-kyloe-700ml-50",
    },
    {
      img: "/duncanWhiskiesImages/Blackbull-Kyloe-Peated.png",
      title: "Black Bull Kyloe Peated Edition",
      subTitle:
        "70cl / 50.0 % abv / Peaty Smokey / Highland / Blended Scotch Whisky",
      price: "£34.99",
      buyLink:
        "https://thespiritsembassy.com/collections/black-bull/products/black-bull-peated-edition-50-700ml",
    },
    {
      img: "/duncanWhiskiesImages/Blackbull-12-Year.png",
      title: "Black Bull 12 Year Old",
      subTitle:
        "70cl / 50.0 % abv / Smooth & Fruity / Highland / Blended Scotch Whisky",
      price: "£45.00",
      buyLink:
        "https://thespiritsembassy.com/collections/black-bull/products/black-bull-12-year-old-whisky-50-700ml",
    },
    {
      img: "/duncanWhiskiesImages/Black-Bull-18.png",
      title: "Black Bull 18 Year Old - Faldo Collection",
      subTitle: "70cl / 50.0 % abv / Toffee Vanilla / Blended Scotch Whisky",
      price: "£119.98",
      buyLink:
        "https://thespiritsembassy.com/collections/black-bull/products/black-bull-18-year-old-faldo-collection-50-700ml",
    },
  ];

  const singleMalts = [
    {
      img: "/duncanWhiskiesImages/Octave-Ben-nevis.png",
      title: "The Octave Ben Nevis 2012 10 Year Old",
      subTitle:
        "70cl / 54.6 % abv / Chocolate & Dried Fruit / Highland / Single Malt Scotch Whisky",
      price: "£88.99",
      buyLink:
        "https://thespiritsembassy.com/collections/duncan-taylor/products/the-octave-ben-nevis-2012-10-year-old?_pos=2&_fid=1cd95e647&_ss=c",
    },
    {
      img: "/duncanWhiskiesImages/Brackla-cognac-single-cask.png",
      title: "Duncan Taylor Single Cask Brackla Cognac Finish 15 Year Old",
      subTitle:
        "70cl / 54.4 % abv / Pear Apple / Highland / Single Malt Scotch Whisky",
      price: "£109.99",
      buyLink:
        "https://thespiritsembassy.com/collections/single-malt/products/brackla-cognac-2006-duncan-taylor-single-cask-93311998-700ml-54-4?_pos=4&_fid=5ac07acb1&_ss=c",
    },
    {
      img: "/duncanWhiskiesImages/single-cask-14.png",
      title: "Duncan Taylor Single Cask Bunnahabhain 14 Year Old",
      subTitle:
        "70cl / 54.2 % abv / Toffee Vanilla / Islay / Single Malt Scotch Whisky",
      price: "£136.99",
      buyLink:
        "https://thespiritsembassy.com/collections/single-malt/products/duncan-taylor-single-cask-bunnahabhain-14-year-old?_pos=17&_fid=5ac07acb1&_ss=c",
    },
    {
      img: "/duncanWhiskiesImages/Octave-more2010.png",
      title: "The Octave Ardmore 2010 12 Year old",
      subTitle:
        "70cl / 53.4 % abv / Peaty Smokey / Highland / Single Malt Scotch Whisky",
      price: "£90.00",
      buyLink:
        "https://thespiritsembassy.com/collections/single-malt/products/octave-ardmore-2010-peated-the-spiritse-embassy-exclusive-12-year-old-1934126-53-4-700ml?_pos=7&_fid=d4cb93a83&_ss=c",
    },
  ];

  const luxuryWhiskies = [
    {
      img: "/duncanWhiskiesImages/whisky-1.png",
      title: "The Octave Premium Macallan 31 Year Old",
      subTitle:
        "70cl 48.5 % abv / Dried Fruits Sherry / Speyside / Single Malt Scotch Whisky",
      price: "£4800",
      buyLink:
        "https://thespiritsembassy.com/products/sir-nicks-pick-macallan-31-year-old-700ml",
    },
    {
      img: "/duncanWhiskiesImages/whisky-14.png",
      title: "Black Bull 50 Year Old - Sir Nick Faldo Collection",
      subTitle: "48.0 % abv / Toffee Vanilla / Blended Scotch Whisky",
      price: "",
      buyLink:
        "https://thespiritsembassy.com/products/black-bull-50-year-old-faldo-collection-50-700ml",
    },
    {
      img: "/duncanWhiskiesImages/whisky-12.png",
      title: "Black Bull 55 Year Old -Sir Nick Faldo Collection",
      subTitle:
        "70 cl / 47.0 % abv / Dried Fruits Sherry / Blended Scotch Whisky",
      price: "",
      buyLink:
        "https://thespiritsembassy.com/products/black-bull-55-year-old-faldo-collection-50-700ml",
    },
    {
      img: "/duncanWhiskiesImages/whisky-11.png",
      title: "Coronation Edition",
      subTitle: "King Charles III / Islay / Single Malt Scotch Whisk",
      price: "£3,900",
      buyLink:
        "https://thespiritsembassy.com/products/laphroaig-distillery-the-coronation-edition",
    },
  ];

  const tabLabels: any = [
    "BLENDED SCOTCH WHISKY",
    "single malt whisky",
    "LUXURY WHISKY",
  ];

  const getSelectedTabData = (getSelectedTabData: any) => {
    if (getSelectedTabData === "BLENDED SCOTCH WHISKY") {
      return <WhiskiesCard whiskiesData={blendedMalts} />;
    } else if (getSelectedTabData === "single malt whisky") {
      return <WhiskiesCard whiskiesData={singleMalts} />;
    } else if (getSelectedTabData === "LUXURY WHISKY") {
      return <WhiskiesCard whiskiesData={luxuryWhiskies} />;
    }
  };

  return (
    <>
      <OurMenu
        headingtext="Our"
        subtext="Whiskies"
        imageUrl={
          isMobile
            ? "/duncanWhiskiesImages/duncan-whiskies-bg-img.jpg"
            : "/duncanWhiskiesImages/duncan-whiskies-bg-img.jpg"
        }
      />
      <div className="whiskies_section">
        {!isMobile ? (
          <>
            <div className="whiskies_title">
              <label>BLENDED SCOTCH WHISKY</label>
              <a
                className="btn_explore"
                target="_blank"
                href="https://thespiritsembassy.com/collections/blended-scotch?filter.p.m.custom.duncan_taylor_portfolio=Yes"
              >
                EXPLORE
              </a>
            </div>
            <WhiskiesCard whiskiesData={blendedMalts} />
            <div className="whiskies_title">
              <label>single malt whisky</label>
              <a
                className="btn_explore"
                target="_blank"
                href="https://thespiritsembassy.com/collections/single-malt?filter.p.m.custom.duncan_taylor_portfolio=Yes"
              >
                EXPLORE
              </a>
            </div>
            <WhiskiesCard whiskiesData={singleMalts} />
            <div className="whiskies_title">
              <label>Luxury WHISKY</label>
              {/* <a className="btn_explore" target="_blank" href="https://thespiritsembassy.com/pages/sir-nick-faldo-collection">EXPLORE</a> */}
            </div>
            <WhiskiesCard whiskiesData={luxuryWhiskies} />
          </>
        ) : (
          <div className="mobile_whiskies_section">
            <div className="whiskies_tab_section">
              {tabLabels.map((item: any, index: number) => {
                return (
                  <span
                    key={index}
                    className={selectedTab === item ? "active" : ""}
                    onClick={() => setSelectedTab(item)}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
            {getSelectedTabData(selectedTab)}
            {selectedTab === "BLENDED SCOTCH WHISKY" ? (
              <div className="whiskies_title">
                <a
                  className="btn_explore"
                  target="_blank"
                  href="https://thespiritsembassy.com/collections/blended-scotch?filter.p.m.custom.duncan_taylor_portfolio=Yes"
                >
                  EXPLORE
                </a>
              </div>
            ) : selectedTab === "single malt whisky" ? (
              <div className="whiskies_title">
                <a
                  className="btn_explore"
                  target="_blank"
                  href="https://thespiritsembassy.com/collections/single-malt?filter.p.m.custom.duncan_taylor_portfolio=Yes"
                >
                  EXPLORE
                </a>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default OurWhiskies;
