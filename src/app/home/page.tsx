"use client";
import KnowaboutUs from "@/components/HomePageComponents/KnowaboutUs";
import MainCourse from "@/components/HomePageComponents/MainCourse";
import MenuCardComponent from "@/components/HomePageComponents/MenuCardComponent";
import OnlineReservation from "@/components/HomePageComponents/OnlineReservation";
import WlcmGrandResturant from "@/components/HomePageComponents/WlcmGrandResturant";
import React from "react";

const HomePage = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  // GF – Gluten Free
  // GFo – Gluten Free Option
  // DF – Dairy Free
  // DFo – Dairy Free Option
  // V – Vegetarian
  // VO – Vegetarian Option
  // VG – Vegan
  // VGO-Vegan Option
  const menuLunchCourseItem = [
    {
      cardHeading: "EGGS BENEDICT",
      cardsubheading: ["Gluten Free Option"],
      cardSubtext:
        "Chive Hollandaise, Roast Ham, Poached Eggs, Breakfast Muffin.",
      cardPrice: "£8",
      // imageUrl: "/menuImages/menu-img-31.jpg",
      imageUrl: "/bankImages/menubreakfastimage4.jpg",
    },
    {
      cardHeading: "OMELETTE",
      cardsubheading: ["Vegetarian Option"],
      cardSubtext: "CHOICE OF STANDARD OR JUST WHITES CHOICE OF FILLINGS - CHEDDAR CHEESE, ONION, PEPPERS, MUSHROOM, HAM, SMOKED SALMON",
      cardPrice: "£7.50",
      isOrder: "",
      imageUrl: "/menuImages/homeimage2.jpg"
    },
    {
      cardHeading: "FRENCH TOAST",
      cardsubheading: ["Gluten Free Option", "Vegetarian Option"],
      cardSubtext: "STREAKY BACON, MIXED BERRIES, MAPLE SYRUP",
      cardPrice: "£9",
      imageUrl: "/menuImages/homeimage3.jpg"
    },
    {
      cardHeading: "SOUP OF THE DAY",
      cardsubheading: ["Gluten Free Option"],
      cardSubtext: "ASK YOUR SERVER REGARDING AVAILABILITY. SERVED WITH FRESH BREAD AND BUTTER",
      cardPrice: "£6",
      imageUrl: "/menuImages/homeimage4.jpg"
    },
    {
      cardHeading: "Baked potatoes ",
      cardsubheading: ["Gluten Free Option", "Vegetarian Option", "Vegan Option"],
      cardSubtext:
        "Baked potato with choice filling, served with side salad and crisps. Scottish cheddar cheese, Tuna mayonnaise, Baked beans and cheese, Chicken curry,Cheddar cheese and coleslaw ",
      cardPrice: "£8.50",
      // imageUrl: "/menuImages/menu-img-9.jpeg",
      imageUrl: "/bankImages/lunchPaninisimage1.jpg"
    },
    {
      cardHeading: "Three Cheese Macaroni ",
      cardsubheading: ["Vegetarian"],
      cardSubtext:
        "served with House Salad & garlic bread. ",
      cardPrice: "£8.50",
      // imageUrl: "/menuImages/menu-img-10.jpeg",
      imageUrl: "/bankImages/lunchPaninisimage2.jpg"
    },
    {
      cardHeading: "Pork fillet ",
      cardsubheading: ["Gluten Free Option"],
      cardSubtext:
        "dusted in smoked paprika, served with pan fried Malibu sauce, black pudding and apple mash.",
      cardPrice: "£19.50",
      // imageUrl: "/menuImages/menu-img-17.jpeg",
      imageUrl: "/bankImages/dinnermainsimage1.jpg"
    },
    {
      cardHeading: "Rump of lamb ",
      cardSubtext: "Herb crusted rump of lamb, served with warm butter bean and garlic salad and rosemary jus gras.",
      cardPrice: "£24.95",
      // imageUrl: "/menuImages/menu-img-18.jpeg",
      imageUrl: "/bankImages/dinnermainsimage2.jpg"

    },
    {
      cardHeading: "Butternut squash and sage cannelloni ",
      cardsubheading: ["Vegetarian"],
      cardSubtext:
        "Served with dressed salad and garlic croute.",
      cardPrice: "£14.95",
      // imageUrl: "/menuImages/menu-img-19.jpeg",
      imageUrl: "/bankImages/dinnermainsimage3.jpg"

    },
  ];

  React.useEffect(() => {
    if (window.innerWidth <= 700) {
      setIsMobile(true);
    }
  }, []);
  return (
    <>
      <WlcmGrandResturant />
      <KnowaboutUs imageUrl={isMobile ? "/home/ourmealsoftheDay-mobile.jpg" : "/home/ourmealsoftheDay.jpg"} />
      {/* <MainCourse menuCourseItem={menuLunchCourseItem} title="Meals of the Day" /> */}
      {/* <MenuCardComponent menuItems={menuLunchCourseItem} /> */}
      <OnlineReservation primaryText={"Online"} secondaryText={`RESERVATION`} />
    </>
  );
};

export default HomePage;
