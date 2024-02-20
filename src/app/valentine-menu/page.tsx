"use client";
import MainCourse from "@/components/HomePageComponents/MainCourse";
import MainCourseWithSubMenu from "@/components/HomePageComponents/MainCourseWithSubMenu";
import MenuCardComponent from "@/components/HomePageComponents/MenuCardComponent";
import OurMenu from "@/components/HomePageComponents/OurMenu";
import Image from "next/image";
import React from "react";

const ValentineMenupage = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const menuItems = [
        {
            cardHeading: "Baked potato Pizza",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£15",
            isStar: "",
            imageUrl: "/menuImages/menu-img-1.jpg",
        },
        {
            cardHeading: "Roasted Red Potatoes with Rosemary",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£12.5",
            isStar: "a",
            isOrder: "order",
            imageUrl: "/menuImages/menu-img-2.jpg",
        },
        {
            cardHeading: "Baked potato Pizza",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£15",
            isStar: "",
            imageUrl: "/menuImages/menu-img-3.jpg",
        },
        {
            cardHeading: "Roasted Red Potatoes with Rosemary",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£12.5",
            isStar: "",
            imageUrl: "/menuImages/menu-img-4.jpg",
        },
        {
            cardHeading: "Baked potato Pizza",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£15",
            isStar: "",
            imageUrl: "/menuImages/menu-img-1.jpg",
        },
        {
            cardHeading: "Roasted Red Potatoes with Rosemary",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£12.5",
            isStar: "",
            imageUrl: "/menuImages/menu-img-2.jpg",
        },
        {
            cardHeading: "Roasted Red Potatoes with Rosemary",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£12.5",
            isStar: "",
            imageUrl: "/menuImages/menu-img-3.jpg",
        },
        {
            cardHeading: "Baked potato Pizza",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£15",
            isStar: "",
            imageUrl: "/menuImages/menu-img-4.jpg",
        },
    ];

    const menuLunchItems = [
        {
            cardHeading: "Baked potato Pizza",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£15",
            isStar: "",
            imageUrl: "/menuImages/menu-img-1.jpg",
        },
        {
            cardHeading: "Roasted Red Potatoes with Rosemary",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£12.5",
            isStar: "a",
            isOrder: "order",
            imageUrl: "/menuImages/menu-img-2.jpg",
        },
        {
            cardHeading: "Baked potato Pizza",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£15",
            isStar: "",
            imageUrl: "/menuImages/menu-img-3.jpg",
        },
        {
            cardHeading: "Roasted Red Potatoes with Rosemary",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£12.5",
            isStar: "",
            imageUrl: "/menuImages/menu-img-4.jpg",
        },
        {
            cardHeading: "Baked potato Pizza",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£15",
            isStar: "",
            imageUrl: "/menuImages/menu-img-1.jpg",
        },
        {
            cardHeading: "Roasted Red Potatoes with Rosemary",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£12.5",
            isStar: "",
            imageUrl: "/menuImages/menu-img-2.jpg",
        },
        {
            cardHeading: "Roasted Red Potatoes with Rosemary",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£12.5",
            isStar: "",
            imageUrl: "/menuImages/menu-img-3.jpg",
        },
        {
            cardHeading: "Baked potato Pizza",
            cardSubtext: "Potato/Bread/Onion",
            cardPrice: "£15",
            isStar: "",
            imageUrl: "/menuImages/menu-img-4.jpg",
        },
    ];

    const WhiskyMenuItems = [
        {
            cardHeading: "Black Bull 12 Year Old",
            cardSubtext:
                "70cl 50.0 % abv / Smooth & Fruity / Highland / Blended Scotch Whisky.",
            cardPrice: "£45",
            whiskyUrl:
                "https://thespiritsembassy.com/collections/black-bull/products/black-bull-12-year-old-whisky-50-700ml",
        },
        {
            cardHeading: "Black Bull Kyloe",
            cardSubtext:
                "70cl 50.0 % abv / Toffee Vanilla / Highland / Blended Scotch Whisky.",
            cardPrice: "£30",
            whiskyUrl:
                "https://thespiritsembassy.com/collections/black-bull/products/black-bull-kyloe-700ml-50",
        },
        {
            cardHeading: "Black Bull Kyloe Peated Edition",
            cardSubtext:
                "70cl 50.0 % abv / Peaty Smokey / Highland / Blended Scotch Whisky",
            cardPrice: "£34.99",
            whiskyUrl:
                "https://thespiritsembassy.com/collections/black-bull/products/black-bull-peated-edition-50-700ml",
        },
        {
            cardHeading: "The Octave Aultmore 2008 14 Year Old",
            cardSubtext:
                " 70cl 52.1 % abv / Dried Fruits Sherry / Speyside / Single Malt Scotch Whisky.",
            cardPrice: "£99.98",
            whiskyUrl:
                "https://thespiritsembassy.com/collections/all/products/octave-aultmore-2008-9535599-14-year-old-52-1-700ml?_pos=39&_fid=e729b48da&_ss=c",
        },
        {
            cardHeading: "The Octave Premium Bowmore 2000 20 Year Old",
            cardSubtext:
                "70cl 52.9 % abv / Peaty Smokey / Islay / Single Malt Scotch Whisky",
            cardPrice: "£600",
            whiskyUrl:
                "https://thespiritsembassy.com/collections/all/products/the-octave-premium-bowmore-2000-3727806-52-9-700ml?_pos=25&_fid=9aa203c5a&_ss=c",
        },
        {
            cardHeading: "The Octave Dalmunach 2015 7 Year Old",
            cardSubtext:
                "70cl 53.4 % abv / Dried Fruits Sherry / Speyside / Single Malt Scotch Whisky",
            cardPrice: "£74.98",
            whiskyUrl:
                "https://thespiritsembassy.com/collections/all/products/octave-dalmunach-2015-7-year-old?_pos=36&_fid=1b3eb09af&_ss=c",
        },
        {
            cardHeading: "Smokin' The Gentlemans",
            cardSubtext: "70cl 40.0 % abv / Peaty Smokey / Blended Scotch Whisky",
            cardPrice: "£23.98",
            whiskyUrl:
                "https://thespiritsembassy.com/collections/all/products/smokin-the-gentlemans-dram-40-700ml?_pos=5&_fid=1b3eb09af&_ss=c",
        },
        {
            cardHeading: "Dimensions Laphroaig 9 Year Old",
            cardSubtext:
                "70cl 54.8 % abv / Peaty Smokey / Islay / Single Malt Scotch Whisky",
            cardPrice: "£125",
            whiskyUrl:
                "https://thespiritsembassy.com/collections/all/products/dimensions-laphroaig-9-year-old-56394-54-8-700ml?_pos=26&_fid=1b3eb09af&_ss=c",
        },
        {
            cardHeading: "Octave Craigellachie 2011 11 Year Old",
            cardSubtext:
                "70cl 53.9 % abv / Dried Fruits Sherry / Speyside / Single Malt Scotch Whisky",
            cardPrice: "£89.98",
            whiskyUrl:
                "https://thespiritsembassy.com/collections/all/products/octave-craigellachie-2011-11-year-old?_pos=38&_fid=1b3eb09af&_ss=c",
        },
    ];

    React.useEffect(() => {
        if (window.innerWidth <= 700) {
            setIsMobile(true);
        }
    }, []);

    const breakFastMenuItems = [
        {
            cardHeading: "Full Breakfast",

            cardSubtext:
                "Bacon, Sausage, Grilled Tomato, Mushroom, Baked Beans, Black Pudding, Haggis, Potato Scone, Choice of Egg.",
            cardPrice: "£10",
            // imageUrl: "/menuImages/menu-img-4.jpeg",
            imageUrl: "/bankImages/menubreakfastimage1.jpg",
        },
        {
            cardHeading: "Toast",
            cardSubtext: "Brown or white toasted bloomer served with butter. Jam £0.50,	Marmalade £0.50 ",
            cardsubheading: ["Vegetarian", "Gluten Free Option"],
            cardPrice: "£1.50",
            imageUrl: "/menuImages/menu-img-3.jpeg",
        },
        {
            cardHeading: "VEGETARIAN BREAKFAST",
            cardsubheading: ["Vegetarian"],
            cardSubtext:
                "Vegetarian sausage, vegetarian haggis, Grilled Tomato, Mushroom, Baked Beans, potato scone, choice of EGG.",
            cardPrice: "£9",
            // imageUrl: "/menuImages/menu-img-3.jpeg",
            imageUrl: "/bankImages/menubreakfastimage2.jpg",
        },
        {
            cardHeading: "FRENCH TOAST",
            cardsubheading: ["Gluten Free Option", "Vegetarian Option"],
            cardSubtext: "Smoked back Bacon, Mixed Berries, Maple Syrup.",
            cardPrice: "£9",
            // imageUrl: "/menuImages/menu-img-33.jpg",
            imageUrl: "/bankImages/menubreakfastimage3.jpg",
        },
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
            cardHeading: "EGG FLORENTINE",
            cardsubheading: ["Gluten Free Option", "Vegetarian"],
            cardSubtext:
                "Chive Hollandaise, Buttered Spinach, Poached Eggs, Breakfast Muffin.",
            cardPrice: "£7",
            imageUrl: "/menuImages/menu-img-2.jpeg",
        },
        {
            cardHeading: "SMASHED AVOCADO ON TOAST",
            cardsubheading: ["Dairy Free Option", "Vegetarian", "Vegan"],
            cardSubtext: "Poached or Scrambled Egg, Chilli sauce, Spring Onion, Sourdough bread.",
            cardPrice: "£9",
            imageUrl: "/menuImages/menu-img-3.jpeg",
        },
        {
            cardHeading: "OMELETTE",
            cardsubheading: ["Vegetarian Option"],
            cardSubtext:
                "choice of standard or just whites. Choice of fillings – Cheddar Cheese, onion, Mushroom, ham, smoked salmon.",
            cardPrice: "£7.50",
            imageUrl: "/menuImages/menu-img-32.jpg",
        },
        {
            cardHeading: "FILLED ROLLS",
            cardSubtext:
                "2 items per roll Sausage, bacon, egg, Black Pudding, Haggis or potato scone, Vegetarian sausage & Vegetarian haggis available on request. ",
            cardsubheading: ["Gluten Free Option", "Vegetarian Option"],
            cardPrice: "£4.50",
            imageUrl: "/menuImages/menu-img-1.jpeg",
        },
        // {
        //   cardHeading: "VEGGIE FILLED ROLL",
        //   cardsubheading: ["Vegetarian"],
        //   cardSubtext: "VEGGIE SAUSAGE AND HAGGIS",
        //   cardPrice: "£3.75",
        //   imageUrl: "/menuImages/menu-img-2.jpeg",
        // },
    ];

    const lunchMenuItems = {
        soups: [
            {
                cardHeading: "Soup of the Day",
                cardsubheading: ["Gluten Free Option", "Vegan Option"],
                cardSubtext:
                    "Ask your server for today’s soup of the day. Served with crusty Bread and butter.",
                cardPrice: "£6",
                // imageUrl: "/menuImages/menu-img-5.jpeg",
                imageUrl: "/bankImages/lunchsoupimage1.jpg"
            },
            {
                // cardHeading: "Soup of the Day",
                // cardsubheading: ["Gluten Free Option"],
                // cardSubtext:
                //   "Ask your server regarding availability.Served with Fresh Bread and butter.",
                // cardPrice: "£6",
                // // imageUrl: "/menuImages/menu-img-5.jpeg",
                imageUrl: "/bankImages/lunchsoupimage2.jpg"
            },
            {
                // cardHeading: "Soup of the Day",
                // cardsubheading: ["Gluten Free Option"],
                // cardSubtext:
                //   "Ask your server regarding availability.Served with Fresh Bread and butter.",
                // cardPrice: "£6",
                // // imageUrl: "/menuImages/menu-img-5.jpeg",
                imageUrl: "/bankImages/lunchsoupimage3.jpg"
            },
            {
                // cardHeading: "Soup of the Day",
                // cardsubheading: ["Gluten Free Option"],
                // cardSubtext:
                //   "Ask your server regarding availability.Served with Fresh Bread and butter.",
                // cardPrice: "£6",
                // // imageUrl: "/menuImages/menu-img-5.jpeg",
                imageUrl: "/bankImages/lunchsoupimage4.jpg"
            },
        ],
        BAGUETTES: [
            {
                cardHeading: "Baguettes - Chedder cheese and chutney",
                cardSubtext:
                    "Freshly baked baguettes with your choice of filling served with side salad and crisps.",
                cardPrice: "£7.95",
                // imageUrl: "/menuImages/menu-img-8.jpeg",
                imageUrl: "/bankImages/lunchSandwichesimage1.jpg"
            },
            {
                cardHeading: "Baguettes - Minute steak fried onions pepper sauce glaze",
                cardSubtext:
                    "Freshly baked baguettes with your choice of filling served with side salad and crisps.",
                cardPrice: "£8.50",
                // imageUrl: "/menuImages/menu-img-6.jpeg",
                imageUrl: "/bankImages/lunchSandwichesimage2.jpg"
            },
            {
                cardHeading: "Baguettes - Pulled pork and BBQ sauce ",
                cardSubtext:
                    "Freshly baked baguettes with your choice of filling served with side salad and crisps.",
                cardPrice: "£8.50",
                // imageUrl: "/menuImages/menu-img-34.jpg",
                imageUrl: "/bankImages/lunchSandwichesimage3.jpg"
            },
            {
                cardHeading: "Baguettes - Sausage smoked cheese and onion ",
                cardSubtext:
                    "Freshly baked baguettes with your choice of filling served with side salad and crisps.",
                cardPrice: "£6.95",
                // imageUrl: "/menuImages/menu-img-39.jpg",
                imageUrl: "/bankImages/lunchSandwichesimage4.jpg"
            },
            {
                cardHeading: "Baguettes - Honey roast ham and coleslaw ",
                cardSubtext:
                    "Freshly baked baguettes with your choice of filling served with side salad and crisps.",
                cardPrice: "£7.95",
                imageUrl: "/menuImages/menu-img-6.jpeg",
            },
        ],
        Toasties: [
            {
                cardHeading: "Toasties",
                cardsubheading: ["Vegetarian Option", "Gluten Free Option"],
                cardSubtext: "Toasted bloomer bread sandwich with Scottish cheddar Served with side salad and crisps.",
                cardPrice: "£7",
                imageUrl: "/menuImages/menu-img-7.jpeg",
            },
            {
                cardHeading: "Fillings - Honey roast ham ",
                // cardsubheading: ["Vegetarian Option", "Gluten Free Option"],
                cardSubtext: "Toasted bloomer bread sandwich with Scottish cheddar Served with side salad and crisps.",
                cardPrice: "£1.5",
                imageUrl: "/menuImages/menu-img-7.jpeg",
            },
            {
                cardHeading: "Fillings - Onions ",
                // cardsubheading: ["Vegetarian Option", "Gluten Free Option"],
                cardSubtext: "Toasted bloomer bread sandwich with Scottish cheddar Served with side salad and crisps.",
                cardPrice: "£1",
                imageUrl: "/menuImages/menu-img-7.jpeg",
            },
            {
                cardHeading: "Fillings - Peppers",
                // cardsubheading: ["Vegetarian Option", "Gluten Free Option"],
                cardSubtext: "Toasted bloomer bread sandwich with Scottish cheddar Served with side salad and crisps.",
                cardPrice: "£1",
                imageUrl: "/menuImages/menu-img-7.jpeg",
            },
            {
                cardHeading: "Fillings - Tomato ",
                // cardsubheading: ["Vegetarian Option", "Gluten Free Option"],
                cardSubtext: "Toasted bloomer bread sandwich with Scottish cheddar Served with side salad and crisps.",
                cardPrice: "£1",
                imageUrl: "/menuImages/menu-img-7.jpeg",
            },
            {
                cardHeading: "Fillings - Smoked sausage",
                // cardsubheading: ["Vegetarian Option", "Gluten Free Option"],
                cardSubtext: "Toasted bloomer bread sandwich with Scottish cheddar Served with side salad and crisps.",
                cardPrice: "£1.5",
                imageUrl: "/menuImages/menu-img-7.jpeg",
            },
            {
                cardHeading: "Fillings - Coleslaw",
                // cardsubheading: ["Vegetarian Option", "Gluten Free Option"],
                cardSubtext: "Toasted bloomer bread sandwich with Scottish cheddar Served with side salad and crisps.",
                cardPrice: "£1",
                imageUrl: "/menuImages/menu-img-7.jpeg",
            },
        ],
        mains: [
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
                cardHeading: "Chicken Caesar salad ",
                cardsubheading: ["Gluten Free Option", "Vegetarian Option"],
                cardSubtext:
                    "Chicken breast served on a bed of salad with Cos, anchovies, parmesan, and croutons dressed in Caesar salad dressing.",
                cardPrice: "£10.50",
                // imageUrl: "/menuImages/menu-img-11.jpeg",
                imageUrl: "/bankImages/lunchPaninisimage3.jpg"
            },
            {
                cardHeading: "Traditional ploughman’s Lunch ",
                cardSubtext:
                    "Cheese, apple, pickles, pork pie and sliced ham, served with crusty bread and butter.",
                cardPrice: "£11.95",
                // imageUrl: "/menuImages/menu-img-42.jpg",
                imageUrl: "/bankImages/lunchPaninisimage4.jpg"
            },
            {
                cardHeading: "Beer battered haddock ",
                cardsubheading: ["Gluten Free", "Dairy Free Option"],
                cardSubtext: "Fresh Fillet of haddock from the port of Buckie Served with garden peas, chips, lemon, and tartare sauce.",
                cardPrice: "£12.95",
                imageUrl: "/menuImages/menu-img-9.jpeg",
            },
            {
                cardHeading: "Breaded wholetail scampi",
                cardSubtext: "Served with garden peas, fries, lemon, and tartare sauce.",
                cardPrice: "£12.95",
                imageUrl: "/menuImages/menu-img-10.jpeg",
            },

            {
                cardHeading: "Cumberland sausage",
                cardSubtext:
                    "Cumberland pork sausage, served with glazed carrots, creamy mashed potatoes, and onion jus.",
                cardPrice: "£12",
                imageUrl: "/menuImages/menu-img-11.jpeg",
            },
            {
                cardHeading: "Buttermilk chicken ",
                cardSubtext: "Buttermilk chicken coated in herbed breadcrumbs, served with side salad and garlic mayonnaise.",
                cardPrice: "£8.95",
                imageUrl: "/menuImages/menu-img-44.jpg",
            },
        ],

        sides: [
            {
                cardHeading: "French Fries (Skinny chips)",
                cardsubheading: ["Gluten Free"],
                cardSubtext: "",
                cardPrice: "£4",
                // imageUrl: "/menuImages/menu-img-13.jpeg",
                imageUrl: "/bankImages/lunchsidesimage1.jpg"
            },
            {
                cardHeading: "Sweet Potato Fries",
                cardsubheading: ["Gluten Free"],
                cardSubtext: "",
                cardPrice: "£6",
                // imageUrl: "/menuImages/menu-img-14.jpeg",
                imageUrl: "/bankImages/lunchsidesimage2.jpg"

            },
            {
                cardHeading: "buttered mashed potatoes ",
                cardSubtext: "",
                cardPrice: "£4",
                // imageUrl: "/menuImages/menu-img-14.jpeg",
                imageUrl: "/bankImages/lunchsidesimage3.jpg"

            },
            {
                cardHeading: "Seasonal Vegetable panache ",
                cardSubtext: "",
                cardPrice: "£4",
                imageUrl: "/bankImages/lunchsidesimage4.jpg"
            },
            {
                cardHeading: "Dressed side salad",
                cardSubtext: "",
                cardPrice: "£4",
                // imageUrl: "/menuImages/menu-img-13.jpeg",
                imageUrl: "/bankImages/lunchsidesimage1.jpg"
            },
            {
                cardHeading: "Hand cut chips ",
                cardSubtext: "",
                cardPrice: "£4",
                // imageUrl: "/menuImages/menu-img-14.jpeg",
                imageUrl: "/bankImages/lunchsidesimage2.jpg"

            },
        ],
        desserts: [
            {
                cardHeading: "Selection of ice creams (3 scoops) ",
                cardSubtext: "Strawberry, Chocolate, Vanilla, Blackbull™ Whisky, Honeycomb",
                cardPrice: "£4.50",
                // imageUrl: "/menuImages/menu-img-15.jpeg",
                imageUrl: "/bankImages/lunchdessertsimage1.jpg"

            },
            {
                cardHeading: "Selection of sorbets (3 scoops) ",
                cardsubheading: ["Dairy Free Option", "Vegetarian", "Vegan"],
                cardSubtext: "Raspberry, champagne, or lemon ",
                cardPrice: "£3.50",
                // imageUrl: "/menuImages/menu-img-15.jpeg",
                imageUrl: "/bankImages/lunchdessertsimage2.jpg"

            },
            {
                // cardHeading: "Sticky toffee pudding",
                // cardsubheading: ["Gluten Free Option"],
                // cardSubtext: "Soy Caramel, Biscuit Crumb, vanilla Ice Cream.",
                // cardPrice: "£8",
                // imageUrl: "/menuImages/menu-img-15.jpeg",
                imageUrl: "/bankImages/lunchdessertsimage3.jpg"

            },
            {
                // cardHeading: "Sticky toffee pudding",
                // cardsubheading: ["Gluten Free Option"],
                // cardSubtext: "Soy Caramel, Biscuit Crumb, vanilla Ice Cream.",
                // cardPrice: "£8",
                // imageUrl: "/menuImages/menu-img-15.jpeg",
                imageUrl: "/bankImages/lunchdessertsimage4.jpg"

            },
            // {
            //   cardHeading: "Selection of ice creams (2 scoops) Or why not try something from the home bakes selection?",
            //   cardSubtext: "",
            //   cardPrice: "£2.5",
            //   imageUrl: "/menuImages/menu-img-16.jpeg"
            // },
        ],
    };

    const dinnerMenuItems = {
        Starters: [
            {
                cardHeading: "Soup of the day",
                cardsubheading: ["Vegan Option", "Gluten Free Option"],
                cardSubtext:
                    "Please ask your server for availability. served with homemade bread and Butter.",
                cardPrice: "£7",
                // imageUrl: "/menuImages/menu-img-5.jpeg",
                imageUrl: "/bankImages/dinnerstartersimage1.jpg"

            },
            {
                cardHeading: "baked mini camembert ",
                cardsubheading: ["Vegetarian", "Gluten Free Option"],
                cardSubtext:
                    "Studded with rosemary and garlic, served with tomato chutney and crusty bread.",
                cardPrice: "£9",
                isOrder: "",
                // imageUrl: "/menuImages/menu-img-20.jpeg",
                imageUrl: "/bankImages/dinnerstartersimage4.jpg"
            },
            {
                cardHeading: "Cullen skink ",
                cardsubheading: ["Gluten Free Option"],
                cardSubtext:
                    "traditional smoked haddock soup used with locally sourced fresh haddock. served with homemade bread and Butter.",
                cardPrice: "£8",
                // imageUrl: "/menuImages/menu-img-41.jpg",
                imageUrl: "/bankImages/dinnerstartersimage2.jpg"
            },
            {
                cardHeading: "Blackbull™ whisky and beetroot cured salmon",
                cardsubheading: ["Vegetarian", "Gluten Free Option", "Dairy Free Option"],
                cardSubtext:
                    "Salmon cured with Blackbull™ whisky and beetroot, served with brown bread and herb butter.",
                cardPrice: "£9.50",
                // imageUrl: "/menuImages/menu-img-36.jpg",
                imageUrl: "/bankImages/dinnerstartersimage3.jpg"
            },
            {
                cardHeading: "Chicken liver and orange parfait",
                cardsubheading: ["Gluten Free Option"],
                cardSubtext:
                    "Homemade chicken liver and orange parfait, served with pickled cherries and toasted brioche.",
                cardPrice: "£8.50",
                isOrder: "",
                // imageUrl: "/menuImages/menu-img-20.jpeg",
                imageUrl: "/bankImages/dinnerstartersimage4.jpg"
            },
            {
                cardHeading: "Watermelon and feta salad ",
                cardsubheading: ["Vegetarian", "Gluten Free Option", "Dairy Free Option", "Vegan Option"],
                cardSubtext:
                    "With mint infused syrup and dressed micro herbs. ",
                cardPrice: "£7.50",
                isOrder: "",
                // imageUrl: "/menuImages/menu-img-20.jpeg",
                imageUrl: "/bankImages/dinnerstartersimage4.jpg"
            },
            {
                cardHeading: "King prawns ",
                cardsubheading: ["Gluten Free Option"],
                cardSubtext:
                    "Sautéed in garlic butter, fresh peas, shallots and baby gem lettuce. ",
                cardPrice: "£10.50",
                isOrder: "",
                // imageUrl: "/menuImages/menu-img-20.jpeg",
                imageUrl: "/bankImages/dinnerstartersimage4.jpg"
            },
        ],
        mains: [
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

            {
                cardHeading: "Entrecôte of beef",
                cardsubheading: ["Gluten Free Option"],
                cardSubtext: "10 0z sirloin served with portobello mushroom, tomato, pommes gaufrette and hand cut chips. Béarnaise sauce £3.50,BlackbuLl™ kyloe Whisky Sauce £3.50,Dianne sauce £3.50,Peppercorn sauce £3.50,Blue cheese sauce £3.50",
                cardPrice: "£30",
                // imageUrl: "/menuImages/menu-img-20.jpeg",
                imageUrl: "/bankImages/dinnermainsimage4.jpg"

            },
            {
                cardHeading: "sea bass ",
                cardsubheading: ["Gluten Free Option", "Dairy Free Option"],
                cardSubtext: "served with warm potato salad and caper, tomato, and chive butter sauce.",
                cardPrice: "£18.50",
                imageUrl: "/menuImages/menu-img-17.jpeg",
            },
            {
                cardHeading: "roast breast of chicken ",
                cardsubheading: ["Gluten Free Option"],
                cardSubtext:
                    "served with dauphinoise potatoes, purple broccoli and morel sauce.",
                cardPrice: "£19",
                imageUrl: "/menuImages/menu-img-18.jpeg",
            },
            {
                cardHeading: "The bank Burger ",
                cardsubheading: ["Gluten Free Option"],
                cardSubtext:
                    "8 oz Aberdeen angus burger topped with haggis, smoked cheddar cheese and fried onion rings.Served with House Salad and Chips.",
                cardPrice: "£14.95",
                imageUrl: "/menuImages/menu-img-19.jpeg",
            },
            {
                cardHeading: "beer Battered haddock ",
                cardsubheading: ["Dairy Free Option", "Gluten Free"],
                cardSubtext:
                    "Fresh Fillet of haddock from the port of Buckie. Served with garden peas, chips, lemon and tartare sauce.",
                cardPrice: "£15.95",
                imageUrl: "/menuImages/menu-img-20.jpeg",
            },
            {
                cardHeading: "sweet potato & chickpea burger ",
                cardsubheading: ["Vegetarian", "Vegan"],
                cardSubtext: "vegan Burger, Sriracha Mayonnaise & Vegan Cheese, vegan coleslaw.",
                cardPrice: "£13",
                imageUrl: "/menuImages/menu-img-17.jpeg",
            },
        ],
        Sides: [
            {
                cardHeading: "shoestring Fries ",
                cardSubtext: "",
                cardPrice: "£4",
                // imageUrl: "/menuImages/menu-img-18.jpeg",
                imageUrl: "/bankImages/dinnersidesimage1.jpg"

            },
            {
                cardHeading: "buttered mashed potatoes",
                cardSubtext: "",
                cardPrice: "£4",
                // imageUrl: "/menuImages/menu-img-19.jpeg",
                imageUrl: "/bankImages/dinnersidesimage2.jpg"

            },
            {
                cardHeading: "Seasonal Vegetable panache",
                cardSubtext: "",
                cardPrice: "£4",
                // imageUrl: "/menuImages/menu-img-20.jpeg",
                imageUrl: "/bankImages/dinnersidesimage3.jpg"

            },
            {
                cardHeading: "Dressed side salad ",
                cardSubtext: "",
                cardPrice: "£4",
                // imageUrl: "/menuImages/menu-img-17.jpeg",
                imageUrl: "/bankImages/dinnersidesimage4.jpg"

            },
            {
                cardHeading: "Hand cut chips ",
                cardSubtext: "",
                cardPrice: "£4",
                imageUrl: "/menuImages/menu-img-18.jpeg",
            },
        ],
        Desserts: [
            {
                cardHeading: "Raspberry and almond milk panna cotta",
                cardsubheading: ["Vegetarian", "Vegan", "Gluten Free"],
                cardSubtext:
                    "Served with raspberry shortbread.",
                cardPrice: "£8",
                // imageUrl: "/menuImages/menu-img-19.jpeg",
                imageUrl: "/bankImages/dinnerdessertsimage1.jpg"

            },
            {
                cardHeading: "Chilled rice pudding and stone fruit compote",
                cardsubheading: ["Gluten Free Option", "Vegetarian"],
                cardSubtext: "Caramel, Biscuit Crumb, Blackbull™ whisky Ice Cream.",
                cardPrice: "£8",
                // imageUrl: "/menuImages/menu-img-20.jpeg",
                imageUrl: "/bankImages/dinnerdessertsimage2.jpg"

            },
            {
                cardHeading: "Hot fudge sundae ",
                cardsubheading: ["Vegetarian", "Gluten Free Option"],
                cardSubtext:
                    "Hot fudge sauce served over Vanilla ice cream with whipped cream topped with mixed chopped nuts. ",
                cardPrice: "£9",
                // imageUrl: "/menuImages/menu-img-17.jpeg",
                imageUrl: "/bankImages/dinnerdessertsimage3.jpg"

            },
            {
                cardHeading: "Vanilla cheesecake ",
                cardsubheading: ["Vegetarian"],
                cardSubtext:
                    "Served with a shot of vanilla mixed berry puree. ",
                cardPrice: "£7.50",
                // imageUrl: "/menuImages/menu-img-18.jpeg",
                imageUrl: "/bankImages/dinnerdessertsimage4.jpg"

            },
            {
                cardHeading: "Sticky Toffee Pudding ",
                cardsubheading: ["Gluten Free Option"],
                cardSubtext: "Caramel, Biscuit Crumb, Blackbull™ Ice Cream.",
                cardPrice: "£8.50",
                imageUrl: "/menuImages/menu-img-19.jpeg",
            },
            {
                cardHeading: "Selection of Ice Creams (3 scoops)",
                cardsubheading: ["Gluten Free Option", "Vegetarian"],
                cardSubtext: "Strawberry, chocolate, vanilla, Blackbull™ Whisky and dairy honeycomb.",
                cardPrice: "£4.50",
                imageUrl: "/menuImages/menu-img-19.jpeg",
            },
            {
                cardHeading: "Selection of sorbets",
                cardsubheading: ["Gluten Free Option", "Vegetarian", "Vegan"],
                cardSubtext: "Raspberry, champagne, or lemon.",
                cardPrice: "£3.50",
                imageUrl: "/menuImages/menu-img-19.jpeg",
            },
            {
                cardHeading: "Selection of Scottish cheeses ",
                cardsubheading: ["Gluten Free Option", "Vegetarian"],
                cardSubtext: "Apple chutney, oatcakes, celery & grapes.",
                cardPrice: "£10",
                imageUrl: "/menuImages/menu-img-19.jpeg",
            },
        ],
    };

    const specialMenuList = {
        Starters: [
            {
                cardHeading: "SOUP OF THE DAY",
                cardSubtext: "Butter,Fresh bread",
                cardPrice: "",
                // imageUrl: "/menuImages/menu-img-5.jpeg",
                imageUrl: "/bankImages/sundaystartersimage_1.jpg"

            },
            {
                cardHeading: "Garlic Mushrooms on Toast",
                cardsubheading: ["Vegetarian", "Dairy Free", "Gluten Free Option"],
                cardSubtext: "Watercress, Herb Oil.",
                cardPrice: "",
                // imageUrl: "/menuImages/menu-img-45.jpg",
                imageUrl: "/bankImages/sundaystartersimage2.jpg"

            },
            {
                cardHeading: "whisky Cured Sea Trout",
                cardsubheading: ["Gluten Free"],
                cardSubtext:
                    "caper berry, pickled grape, whisky ponzu, smoked crème fraiche.",
                cardPrice: "",
                // imageUrl: "/menuImages/menu-img-23.jpeg",
                imageUrl: "/bankImages/sundaystartersimage3.jpg"

            },
            {
                // cardHeading: "whisky Cured Sea Trout",
                // cardsubheading: ["Gluten Free"],
                // cardSubtext:
                //   "caper berry, pickled grape, whisky ponzu, smoked crème fraiche.",
                // cardPrice: "",
                // imageUrl: "/menuImages/menu-img-23.jpeg",
                imageUrl: "/bankImages/sundaystartersimage4.jpg"

            },
        ],
        Mains: [
            {
                cardHeading: "Roast Sirloin of Aberdeen Angus Beef",
                cardsubheading: ["Gluten Free Option"],
                cardSubtext:
                    "roast potatoes, seasonal vegetables, Yorkshire pudding, skirlie, rich red wine gravy.",
                cardPrice: "",
                // imageUrl: "/menuImages/menu-img-24.jpeg",
                imageUrl: "/bankImages/sundaymainimage1.jpg"

            },
            {
                cardHeading: "Roast of the day",
                cardSubtext:
                    "Please ask your server for today’s Roast of the Day roast potatoes, seasonal vegetables, Yorkshire pudding, skirlie, rich red wine grav.",
                cardPrice: "",
                // imageUrl: "/menuImages/menu-img-21.jpeg",
                imageUrl: "/bankImages/sundaymainsimage2.jpg"

            },
            {
                cardHeading: "Vegetarian dish of the day",
                cardSubtext:
                    "Please ask your server for today’s vegetarian dish of the Day.",
                cardPrice: "",
                // imageUrl: "/menuImages/menu-img-22.jpeg",
                imageUrl: "/bankImages/sundaymainsimage3.jpg"

            },
            {
                cardHeading: "Fish of the day ",
                cardSubtext: "Please ask your server for today’s fish of the Day.",
                cardPrice: "",
                // imageUrl: "/menuImages/menu-img-23.jpeg",
                imageUrl: "/bankImages/sundaymainsimage4.jpg"

            },

            // {
            //   cardHeading: "Sausage & Creamed Potato(CH)",
            //   cardSubtext: "Roasted Carrots, Gravy.",
            //   cardPrice: "£7.75",
            //   imageUrl: "/menuImages/menu-img-24.jpeg"
            // },
            // {
            //   cardHeading: "4oz Beef Burger (GFO, CH)",
            //   cardSubtext: "Baby Gem, Sliced Tomato, Chips, Salad",
            //   cardPrice: "£7.75",
            //   imageUrl: "/menuImages/menu-img-21.jpeg"
            // },
            // {
            //   cardHeading: "Vegetarian Burger (GFO, CH)",
            //   cardSubtext: "Baby Gem, Sliced Tomato, Chips, Salad",
            //   cardPrice: "£7.75",
            //   imageUrl: "/menuImages/menu-img-22.jpeg"
            // },
            // {
            //   cardHeading: "Three Cheese Macaroni (V, CH)",
            //   cardSubtext: "House salad",
            //   cardPrice: "£7.75",
            //   imageUrl: "/menuImages/menu-img-23.jpeg"
            // },
            // {
            //   cardHeading: "Battered Haddock (GFO, DFO, CH)",
            //   cardSubtext: "Garden Peas, Chips.",
            //   cardPrice: "£7.75",
            //   imageUrl: "/menuImages/menu-img-24.jpeg"
            // },
            // {
            //   cardHeading: "Breaded Chicken Goujons (GFO, DFO, CH)",
            //   cardSubtext: "Chips, baked Beans",
            //   cardPrice: "£7.75",
            //   imageUrl: "/menuImages/menu-img-21.jpeg"
            // },
        ],
        Desserts: [
            {
                cardHeading: "Lemon posset",
                cardsubheading: ["Vegetarian"],
                cardSubtext:
                    "Chilli & lime jelly, caramel popcorn with raspberry coulis.",
                cardPrice: "",
                // imageUrl: "/menuImages/menu-img-47.jpg",
                imageUrl: "/bankImages/sundaydessertsimage1.jpg"

            },
            {
                cardHeading: "Sticky Toffee Pudding",
                cardSubtext: "Caramel, Biscuit Crumb, Blackbull™ Ice Cream.",
                cardPrice: "",
                // imageUrl: "/menuImages/menu-img-23.jpeg",
                imageUrl: "/bankImages/sundaydessertsimage2.jpg"

            },
            {
                cardHeading: "Caramel apple Cheesecake",
                cardSubtext:
                    "Baked vanilla cheesecake, stewed apples, Caramel sauce & cinnamon sugar.",
                cardPrice: "",
                // imageUrl: "/menuImages/menu-img-24.jpeg",
                imageUrl: "/bankImages/sundaydessertsimage3.jpg"

            },
            {
                // cardHeading: "Caramel apple Cheesecake",
                // cardSubtext:
                //   "Baked vanilla cheesecake, stewed apples, Caramel sauce & cinnamon sugar.",
                // cardPrice: "",
                // imageUrl: "/menuImages/menu-img-24.jpeg",
                imageUrl: "/bankImages/sundaydessertsimage4.jpg"

            },
            // {
            //   cardHeading: "Vanilla ice cream",
            //   cardSubtext: "Chocolate sauce, marshmallows.",
            //   cardPrice: "£2.95",
            //   imageUrl: "/menuImages/menu-img-21.jpeg"
            // },
            // {
            //   cardHeading: "Sticky toffee pudding",
            //   cardSubtext: "Soy Caramel, Biscuit Crumb, vanilla Ice Cream.",
            //   cardPrice: "£2.95",
            //   imageUrl: "/menuImages/menu-img-22.jpeg"
            // },
            // {
            //   cardHeading: "Chocolate Brownie",
            //   cardSubtext: "Chocolate sauce, marshmallows.",
            //   cardPrice: "£2.95",
            //   imageUrl: "/menuImages/menu-img-23.jpeg"
            // },
        ],
    };
    const specialMenuListChildrens = {
        Mains: [
            {
                cardHeading: "Sausage & Creamed Potato",
                cardSubtext: "Roasted Carrots, Gravy.",
                cardPrice: "£7.95",
                // imageUrl: "/menuImages/menu-img-24.jpeg",
                imageUrl: "/bankImages/childMainmenuimage1.jpeg"

            },
            {
                cardHeading: "4oz Beef Burger",
                cardsubheading: ["Gluten Free Option"],
                cardSubtext: "Baby Gem, Sliced Tomato, Chips, Salad",
                cardPrice: "£7.95",
                // imageUrl: "/menuImages/menu-img-21.jpeg",
                imageUrl: "/bankImages/childmainmenuimage2.jpeg"

            },
            {
                cardHeading: "Vegetarian Burger",
                cardsubheading: ["Gluten Free Option"],
                cardSubtext: "Baby Gem, Sliced Tomato, Chips, Salad",
                cardPrice: "£7.95",
                // imageUrl: "/menuImages/menu-img-22.jpeg",
                imageUrl: "/bankImages/ChildMainmenuimage3.jpeg"

            },
            {
                cardHeading: "Three Cheese Macaroni",
                cardsubheading: ["Vegetarian"],
                cardSubtext: "House salad",
                cardPrice: "£7.95",
                // imageUrl: "/menuImages/menu-img-23.jpeg",
                imageUrl: "/bankImages/childmainmenuimage4.jpeg"

            },
            {
                cardHeading: "Battered Haddock",
                cardsubheading: ["Gluten Free Option", "Dairy Free Option"],
                cardSubtext: "Garden Peas, Chips.",
                cardPrice: "£7.95",
                imageUrl: "/menuImages/menu-img-24.jpeg",
            },
            {
                cardHeading: "Breaded Chicken Goujons",
                cardsubheading: ["Gluten Free Option", "Dairy Free Option"],
                cardSubtext: "Chips, baked Beans",
                cardPrice: "£7.95",
                imageUrl: "/menuImages/menu-img-21.jpeg",
            },
        ],
        Desserts: [
            {
                cardHeading: "Vanilla ice cream",
                cardSubtext: "Chocolate sauce, marshmallows.",
                cardPrice: "£2.95",
                // imageUrl: "/menuImages/menu-img-21.jpeg",
                imageUrl: "/bankImages/childimage1.jpeg"

            },
            {
                cardHeading: "Sticky toffee pudding",
                cardSubtext: "Soy Caramel, Biscuit Crumb, vanilla Ice Cream.",
                cardPrice: "£2.95",
                // imageUrl: "/menuImages/menu-img-22.jpeg",
                imageUrl: "/bankImages/childimage2.jpeg"

            },
            {
                cardHeading: "Chocolate Brownie",
                cardSubtext: "Chocolate sauce, marshmallows.",
                cardPrice: "£2.95",
                // imageUrl: "/menuImages/menu-img-23.jpeg",
                imageUrl: "/bankImages/childdessertmenuimage3.jpeg"

            },
            {
                // cardHeading: "Chocolate Brownie",
                // cardSubtext: "Chocolate sauce, marshmallows.",
                // cardPrice: "£2.95",
                // imageUrl: "/menuImages/menu-img-23.jpeg",
                imageUrl: "/bankImages/childdessertmenuimage4.jpeg"

            },
        ],
    };


    const chrismusMenuList = {
        Starters: [
            {
                cardHeading: "Potted Gammon, Pineapple Salsa, Oatcakes",
                // cardSubtext: "Butter,Fresh bread",
                cardPrice: "£9.50",
                // imageUrl: "/menuImages/menu-img-5.jpeg",
                imageUrl: "/menuImages/chirtmas-starter-img-1.jpg"

            },
            {
                cardHeading: "Locally Sourced Meat Platter ",
                // cardsubheading: ["Vegetarian", "Dairy Free", "Gluten Free Option"],
                // cardSubtext: "Watercress, Herb Oil.",
                cardPrice: "£11.50",
                // imageUrl: "/menuImages/menu-img-45.jpg",
                imageUrl: "/menuImages/chirtmas-starter-img-2.jpg"

            },
            {
                cardHeading: "Chestnut and Truffle Oil Espuma",
                cardsubheading: ["Vegan"],
                // cardSubtext:
                //   "caper berry, pickled grape, whisky ponzu, smoked crème fraiche.",
                cardPrice: "£8.95",
                // imageUrl: "/menuImages/menu-img-23.jpeg",
                imageUrl: "/menuImages/chirtmas-starter-img-3.jpg"

            },
            {
                cardHeading: "Smoked Salmon with a Lemon Caper Dressing ",
                // cardsubheading: ["Gluten Free"],
                // cardSubtext:
                //   "caper berry, pickled grape, whisky ponzu, smoked crème fraiche.",
                cardPrice: "£10.95",
                // imageUrl: "/menuImages/menu-img-23.jpeg",
                imageUrl: "/menuImages/chirtmas-starter-img-4.jpg"

            },
        ],
        Mains: [
            {
                cardHeading: "Pan Seared Turkey with Trimmings ",
                // cardsubheading: ["Gluten Free Option"],
                // cardSubtext:
                //   "roast potatoes, seasonal vegetables, Yorkshire pudding, skirlie, rich red wine gravy.",
                cardPrice: "£24.95",
                // imageUrl: "/menuImages/menu-img-24.jpeg",
                imageUrl: "/menuImages/chirtmas-main-img-1.jpg"
            },
            {
                cardHeading: "Steak au Poivre, Creamed Brussels Pommes Anna ",
                // cardSubtext:
                //   "Please ask your server for today’s Roast of the Day roast potatoes, seasonal vegetables, Yorkshire pudding, skirlie, rich red wine grav.",
                cardPrice: "£24.95",
                // imageUrl: "/menuImages/menu-img-21.jpeg",
                imageUrl: "/menuImages/chirtmas-main-img-2.jpg"

            },
            {
                cardHeading: "Slow Roast Salmon, Chilli Herb Lemongrass Crust, Stir Fried Vegetables, Tomato Fondue",
                // cardSubtext:
                //   "Please ask your server for today’s vegetarian dish of the Day.",
                cardPrice: "£21.95",
                // imageUrl: "/menuImages/menu-img-22.jpeg",
                imageUrl: "/menuImages/chirtmas-main-img-3.jpg"

            },
            {
                cardHeading: "Chestnut, Mushroom and Thyme in Puff Pastry, Roasted Root Vegetables, Bordelaise Sauce ",
                cardsubheading: ["Vegan"],
                // cardSubtext: "Please ask your server for today’s fish of the Day.",
                cardPrice: "£21.95",
                // imageUrl: "/menuImages/menu-img-23.jpeg",
                imageUrl: "/menuImages/chirtmas-main-img-4.jpg"

            },
        ],
        Desserts: [
            {
                cardHeading: "Homemade Christmas Pudding, Whisky Cream Anglaise",
                // cardsubheading: ["Vegetarian"],
                // cardSubtext:
                //   "Chilli & lime jelly, caramel popcorn with raspberry coulis.",
                cardPrice: "£8.95",
                // imageUrl: "/menuImages/menu-img-47.jpg",
                imageUrl: "/menuImages/chirtmas-dessert-img-1.jpg"

            },
            {
                cardHeading: "Home Made Caramel Apple Tart, Mulled Wine Sorbet",
                // cardSubtext: "Caramel, Biscuit Crumb, Blackbull™ Ice Cream.",
                cardPrice: "£7.95",
                // imageUrl: "/menuImages/menu-img-23.jpeg",
                imageUrl: "/menuImages/chirtmas-dessert-img-2.jpg"

            },
            {
                cardHeading: "Baileys Chocolate Mousse, Cinnamon Tuille ",
                // cardSubtext:
                //   "Baked vanilla cheesecake, stewed apples, Caramel sauce & cinnamon sugar.",
                cardPrice: "£7.95 ",
                // imageUrl: "/menuImages/menu-img-24.jpeg",
                imageUrl: "/menuImages/chirtmas-dessert-img-3.jpg"

            },
            {
                cardHeading: "Spiced Brûlée, with Stem Ginger Shortbread ",
                // cardSubtext:
                //   "Baked vanilla cheesecake, stewed apples, Caramel sauce & cinnamon sugar.",
                cardPrice: "£8.95",
                // imageUrl: "/menuImages/menu-img-24.jpeg",
                imageUrl: "/menuImages/chirtmas-dessert-img-4.jpg"

            },
        ],
    };


    const chrismusEveSpecialMenuList = {
        Starters: [
            {
                cardHeading: "Stornoway Black Pudding Benedict",
                // cardSubtext: "Butter,Fresh bread",
                cardPrice: "£8.50",
                cardSubtext: "served with spinach, crispy ham, poached egg & Arran Mustard hollandaise"
                // imageUrl: "/menuImages/menu-img-5.jpeg",
                // imageUrl: "/menuImages/chirtmas-starter-img-1.jpg"

            },
            {
                cardHeading: "‘Posh’ Prawn Cocktail",
                // cardsubheading: ["Vegetarian", "Dairy Free", "Gluten Free Option"],
                cardSubtext: "Lobster, Crab, Langouistine served in Bloody Mary marie rose, with brown bread and butter",
                cardPrice: "£12",
                // imageUrl: "/menuImages/menu-img-45.jpg",
                // imageUrl: "/menuImages/chirtmas-starter-img-2.jpg"

            },
        ],
        Mains: [
            {
                cardHeading: "16oz Chateau Board for 2",
                // cardsubheading: ["Gluten Free Option"],
                cardSubtext: "Truffle hand cut chips, butter mash, tender stem broccoli with almond butter,maple roasted carrots, rocket and pamesan salad",
                cardPrice: "£55",
            },
            {
                cardHeading: "Sauces",
                cardSubtext: "Chimichurri, Peppercorn, Blue Cheese, Dianne, Black Bull or Whisky",
                cardPrice: "£4",
            },
            {
                cardHeading: "Make it a “Surf and Turf” - Add Scallops",
                // cardSubtext:"Chimichurri, Peppercorn, Blue Cheese, Dianne, Black Bull or Whisky",
                cardPrice: "£9",
            },
            {
                cardHeading: "Monkfish Coconut Curry",
                cardSubtext: "served with Thai shrimp crackers and jasmine rice",
                cardPrice: "£18",
            },
        ],
        Desserts: [
            {
                cardHeading: "Melting Chocolate Dome for 2",
                cardSubtext: "Served with salted caramel ice cream, honeycomb brownie pieces and warm toffee sauce.",
                cardPrice: "£15",
                imageUrl: "/menuImages/chirtmas-dessert-img-1.jpg"

            },
            {
                cardHeading: "Mulled Winter Berry Crumble",
                cardSubtext: "served with cardamom custard",
                cardPrice: "£8.50",
            },
        ],
    };

    const EveningMenuItems = {
        Starters: [
            {
                cardHeading: "Soup of the Day",
                cardsubheading: ["Gluten Free Option", "Vegan Option"],
                cardSubtext: "Served with sourdough bread and rock saltbutter.",
                cardPrice: "£6.5",
                imageUrl: "/bankImages/dinnerstartersimage1.jpg"
            },
            {
                cardHeading: "Blackbull™ Whisky Beetroot cured salmon",
                cardsubheading: ["Gluten Free Option", "Dairy Free Option"],
                cardSubtext: "Salmon cured with Blackbull™ whisky and beetroot, served with fennel and blood orange salad and saffron Mayo",
                cardPrice: "£9.5",
                imageUrl: "/bankImages/dinnerstartersimage3.jpg"
            },
            {
                cardHeading: "Cullen Skink",
                cardsubheading: ["Gluten Free Option"],
                cardSubtext: "Traditional smoked haddock soup, served with sourdough bread and rock salt butter",
                cardPrice: "£8",
                imageUrl: "/bankImages/dinnerstartersimage2.jpg"
            },
            {
                cardHeading: "Stornoway Black Pudding Benedict",
                cardSubtext: "Spinach, crispy ham and Arron mustard hollandaise, served on a bed of Stornoway black pudding",
                cardPrice: "£8.5",
                imageUrl: "/menuImages/eggs-benedict-with-stornoway.jpg"
            },
            {
                cardHeading: "Goats Cheese and Beetroot Scotch Egg",
                cardsubheading: ["Gluten Free Option", "Vegetarian", "Vegan Option"],
                cardSubtext: "Goats cheese and betroot scotch egg served with apple and chilli puree",
                cardPrice: "£7.5",
            },
        ],
        Mains: [
            {
                cardHeading: "10oz Steak Burger",
                cardSubtext:
                    "10oz Angus steak burger on a brioche bun with red cabbage slaw and ‘The Bank’ burgersauce served with fries. Add Cheese - £2, Add Bacon - £2",
                cardPrice: "£15.5",
                imageUrl: "/menuImages/10-oz-steak-burger.jpg",
            },
            {
                cardHeading: "Beer Battered Cod",
                cardsubheading: ["Gluten Free"],
                cardSubtext:
                    "Brewdog battered Peterhead cod, served with handcut chips, pea puree, tartare sauce and lemon.",
                cardPrice: "£16.5",
                imageUrl: "/menuImages/beer-battered-cod.jpg"
            },
            {
                cardHeading: "Buttermilk Chicken Burger",
                cardSubtext:
                    "Buttermilk chicken on a charcoal brioche bun with red cabbage slaw and ‘The Bank’ burgersauce served with fries",
                cardPrice: "£14.5",
                imageUrl: "/menuImages/buttermilk-chicken-burger.jpg"
            },
            {
                cardHeading: "Ribeye Steak",
                cardsubheading: ["Gluten Free"],
                cardSubtext:
                    "10oz ribeye steak served with watercress, portobello mushroom, vine tomato, and chips. Add Sauce - £4 (Diane, Peppercorn, Chimchurri. or Strathdon blue cheese)",
                cardPrice: "£29",
                imageUrl: "/menuImages/ribeye-steak.jpg"
            },
            {
                cardHeading: "Venison Ragu",
                cardsubheading: ["Dairy Free Option"],
                cardSubtext:
                    "Highland venison ragu served with pappardelle pasta with pecorino espuma",
                cardPrice: "£23.5",
            },
            {
                cardHeading: "Pan seared Stonebass",
                cardsubheading: ["Gluten Free"],
                cardSubtext:
                    "Panseared stone bass, served with string vegetables, curried coconut mussels and red onion bhaji",
                cardPrice: "£17.5",
            },
            {
                cardHeading: "Steak and Ale Shortcrust Pie",
                cardSubtext:
                    "Angus steak and Speyside Ale shortcrust pastry pie, served with tenderstem broccoli and buttered mash",
                cardPrice: "£14.95",
            },
            {
                cardHeading: "Fried Gnocchi",
                cardsubheading: ["Vegan", "Vegetarian", "Dairy Free"],
                cardSubtext:
                    "Fried gnocchi with sweet potato, cavolo nero, truffle and hazelnut.",
                cardPrice: "£14",
            },
        ],
        Sides: [
            {
                cardHeading: "Skinny fries",
                cardPrice: "£4",
                cardSubtext: "Add Truffle and Parmesan",
                imageUrl: "/menuImages/skinny-fries.jpg",
            },
            {
                cardHeading: "Brewdog Battered Onion Rings",
                cardPrice: "£4",
                imageUrl: "/menuImages/brewdog-battered-onion-rings.jpg",
            },
            {
                cardHeading: "Rocket, Shallot and Parmesan Salad",
                cardPrice: "£4",
                imageUrl: "/menuImages/rocket-shallot-and-parmesan-salad.jpg",
            },
            {
                cardHeading: "Tenderstem broccoli and toasted almond butter",
                cardPrice: "£4",
                imageUrl: "/menuImages/enderstem-broccoli-and-toasted-almond-butter.jpg",
            },
            {
                cardHeading: "Maple and orange roast carrots with hazelnut crumb",
                cardPrice: "£4",
            },
            {
                cardHeading: "Charred hispi cabbage, coriander and black seseme",
                cardPrice: "£4",
            },

        ],
        Desserts: [
            {
                cardHeading: "White chocolate and Blackbull™ Whisky Mousse",
                cardSubtext:
                    "White chocolate and Blackbull™ Kyloe mousse served with almond granola and raspberry sorbet",
                cardPrice: "£9",
                imageUrl: "/menuImages/chocolate-mousse.jpg"
            },
            {
                cardHeading: "Clemantine Marmalade Posset",
                cardSubtext:
                    "Clementine Marmalade posset served with gingerbread ",
                cardPrice: "£8",
                imageUrl: "/menuImages/marmalade.jpg"
            },
            {
                cardHeading: "Sticky toffee pudding",
                cardSubtext:
                    "Sticky toffee pudding served with banana compote, and tablet ice cream.",
                cardPrice: "£8.5",
                imageUrl: "/bankImages/lunchdessertsimage1.jpg"
            },
            {
                cardHeading: "Motten Chocolate Dome",
                cardSubtext:
                    "Motte chocolate dome served with salted caramel ice cream, brownie pieces, honeycomb and caramelsauce",
                cardPrice: "£9",
                imageUrl: "/menuImages/mottel-chocolate-dom.jpg"
            },
        ],
        'Hot Drinks': [
            {
                cardHeading: "Twinning’s Breakfast Tea",
                cardPrice: "£2.40",
                imageUrl: "/menuImages/cup-tea.jpg"
            },
            {
                cardHeading: "Twinning’s Decaf Tea",
                cardPrice: "£2.40",
                imageUrl: "/menuImages/decaffe-tea.jpg"
            },
            {
                cardHeading: "Twinning’s Special Tea",
                cardSubtext: "Assam, Peppermint, Green Tea, Earl Grey, Lemon and Ginger, Spicy Chai Tea",
                cardPrice: "£2.50",
                imageUrl: "/menuImages/green-tea.jpg"
            },
            {
                cardHeading: "Americano",
                cardPrice: "£2.30",
                imageUrl: "/menuImages/cafe-americano.jpeg"
            },
            {
                cardHeading: "Latte",
                cardPrice: "£2.90",
            },
            {
                cardHeading: "Cappuccino",
                cardPrice: "£2.90",
            },
            {
                cardHeading: "Flat White",
                cardPrice: "£2.70",
            },
            {
                cardHeading: "Mocha",
                cardPrice: "£2.90",
            },
            {
                cardHeading: "Macchiato",
                cardPrice: "£2.30",
            },
            {
                cardHeading: "Espresso",
                cardPrice: "£1.85",
            },
            {
                cardHeading: "Double espresso",
                cardPrice: "£2.20",
            },
            {
                cardHeading: "Hot Chocolate",
                cardSubtext: "Cream £0.30, Marshmallows £0.30",
                cardPrice: "£2.95",
            },
            {
                cardHeading: "MILK ALTERNATIVES ARE AVAILABLE",
                cardSubtext:
                    "Oat, Soya & Almond Milk",
                cardPrice: "£0.30",
            },
        ],
    };

    const valentineDinnerMenuItems = {
        'To Start': [
            {
                cardHeading: "Oysters with Tabasco and Lemon or Rockefeller £3 each",
                cardSubtext: "",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "",
            },
        ],
        'Starters': [
            {
                cardHeading: "Torched Asparagus and Feuille de Brique Pastry",
                cardSubtext: "served with quails egg and hazelnut.",
                cardPrice: "",
            },
            {
                cardHeading: "Mussels cooked in Champagne and Saffron",
                cardSubtext: "served with homemade bread and whipped butter.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "",
            },
            {
                cardHeading: "Jeruselum Artichoke Veloute",
                cardSubtext: "served with truffle, morels, homemade bread and whipped butter.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "",
            },
            {
                cardHeading: "Smoked Ham Hough",
                cardSubtext: "served with piccalilli, rock salt toast and pickled shallots.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "",
            },
        ],
        'Mains': [
            {
                cardHeading: "Pan Seared Ginger & Orange Glazed Duck Breast",
                cardSubtext: "with tenderstem broccoli, gnocchi, pistachio and black cherry.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "",
            },
            {
                cardHeading: "Crab and Lobster Pappardelle",
                cardSubtext: "with parmesan and herb.",
                cardPrice: "",
            },
            {
                cardHeading: "Goats Cheese and Spinach Roulade",
                cardSubtext: "with beetroot puree and pickled apple.",
                cardsubheading: ["Vegetarian", "Gluten Free Option"],
                cardPrice: "",
            }, {
                cardHeading: "Pan Seared Chicken Breast",
                cardSubtext: "served with potato and black pudding terrine, carrot puree and garlic and pancetta cream.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "",
            },
        ],
        'Desserts': [
            {
                cardHeading: "Pistachio and Olive Oil Cake",
                cardSubtext: "with black cherry ice cream.",
                cardsubheading: ["Vegetarian", "Vegan Option"],
                cardPrice: "",
            },
            {
                cardHeading: "Dark Chocolate and Chilli Fondant",
                cardSubtext: "with creme fraiche ice cream.",
                cardsubheading: ["Vegetarian"],
                cardPrice: "",
            },
            {
                cardHeading: "Salted Caramel Cheesecake",
                cardSubtext: "served with honeycomb pieces and salted caramel sauce.",
                cardsubheading: ["Vegetarian"],
                cardPrice: "",
            },
            {
                cardHeading: "Cheese Fondue for 2",
                cardSubtext: "with poppyseed sticks, celery, apple and berry compote.",
                cardsubheading: ["Vegetarian"],
                cardPrice: "",
            },
        ],

    };

    const childrensMenuItems = {
        'Starters': [
            {
                cardHeading: "Soup of the Day",
                cardSubtext: "Served with homemade bread butter.",
                cardsubheading: ["Gluten Free Option", "Vegan Option"],
                cardPrice: "£3.50",
            },
            {
                cardHeading: "Cullen Skink",
                cardSubtext: "Served with homemade bread butter.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£3.50",
            },
            {
                cardHeading: "Prawn Cocktail",
                cardSubtext: "Served with homemade bread butter.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£4.95",
            },
        ],
        'Mains': [
            {
                cardHeading: "Mini Beef Burger",
                cardSubtext: "Served with fries and coleslaw.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£7.95",
            },
            {
                cardHeading: "Mini Chicken Burger",
                cardSubtext: "Served with fries and coleslaw.",
                cardPrice: "£7.95",
            },
            {
                cardHeading: "Mini Cod",
                cardSubtext: "Served with chips and salad.",
                cardsubheading: ["Gluten Free Option", "Dairy Free Option"],
                cardPrice: "£7.95",
            },
            {
                cardHeading: "Paradelle Pasta",
                cardSubtext: "Tomato paradelle Pasta with parmesan.",
                cardsubheading: ["Vegetarian"],
                cardPrice: "£6.95",
            },
            {
                cardHeading: "Sausages and Mash",
                cardSubtext: "Locally sourced sausages,served with creamed mash,seasonal vegetables and gravy.",
                cardPrice: "£6.95",
            },
        ],
        'Desserts': [
            {
                cardHeading: "Mini Sticky Toffee Pudding",
                cardSubtext: "Served with vanilla ice cream.",
                cardsubheading: ["Vegetarian"],
                cardPrice: "£3.50",
            },
            {
                cardHeading: "Ice Cream",
                cardSubtext: "2 scoops of locally sourced ice cream. Please ask ourserversfortodaysice cream flavours. Add Raspberry Sauce and Berries - £2.00",
                cardPrice: "£2.95",
            },
            {
                cardHeading: "Fudge Sundae",
                cardSubtext: "Chocolate and honeycomb fudge sundae.",
                cardsubheading: ["Vegetarian"],
                cardPrice: "£4.95",
            },
        ],
    }

    const sundayBrunchMenuItems = {
        'Brunch': [
            {
                cardHeading: "Full Breakfast",
                cardSubtext: "Bacon, Sausage, Grilled Tomato, Mushroom, Baked Beans, Black Pudding, Haggis, Potato Scone,served with either poached,scrambled or fried egg.",
                cardPrice: "£10",
            },
            {
                cardHeading: "Filled rolls",
                cardSubtext: "2 items perroll Sausage, Bacon, Fried Egg, Black Pudding, Haggis or Potato Scone. Vegetarian Sausage & Vegetarian haggis available on request.",
                cardsubheading: ["Gluten Free Option", "Vegetarian Option"],
                cardPrice: "£4.50",
            },
            {
                cardHeading: "Vegetarian Breakfast",
                cardSubtext: "Vegetarian Sausage, Vegetarian Haggis, Grilled Tomato, Mushroom, Baked Beans, Potato Scone, served with either poached,scrambled orfried egg. ",
                cardsubheading: ["Vegetarian"],
                cardPrice: "£9",
            },
            {
                cardHeading: "French Toast",
                cardSubtext: "Smoked back Bacon, Mixed Berries, Maple Syrup. ",
                cardsubheading: ["Gluten Free Option", "Vegetarian Option"],
                cardPrice: "£9",
            },
            {
                cardHeading: "Eggs Benedict",
                cardSubtext: "Chive Hollandaise, Roast Ham, Poached Eggs, Breakfast Muffin.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£8",
            },
            {
                cardHeading: "Omelette",
                cardSubtext: "choice ofstandard orjust whites Choice of fillings – Cheddar Cheese, onion, Mushroom, ham,smoked salmon",
                cardPrice: "£8",
            },
            {
                cardHeading: "Toast & Jam",
                cardSubtext: "",
                cardPrice: "£1.75",
            },
        ],
        'Coffees & Hot Chocolate': [
            {
                cardHeading: "Americano",
                cardSubtext: "A double espresso with hot water served in 6oz mug.",
                cardPrice: "£2.30",
            },
            {
                cardHeading: "Mocha",
                cardSubtext: "Single espresso shot topped with chocolate steamed milk served in a 8oz mug.",
                cardPrice: "£2.90",
            },
            {
                cardHeading: "Latte",
                cardSubtext: "Steamed milk an espresso shot served in a tall glass mug.",
                cardPrice: "£2.90",
            },
            {
                cardHeading: "Macchiato",
                cardSubtext: "Single espresso shot, topped with a drop of steamed milk served in a small espresso cup",
                cardPrice: "£2.30",
            },
            {
                cardHeading: "Cappuccino",
                cardSubtext: "Double espresso with steamed milk in an 8oz mug. ",
                cardPrice: "£2.90",
            },
            {
                cardHeading: "Hot Chocolate",
                cardSubtext: "Add Cream - £0.30, Add Marshmallows - £0.20",
                cardPrice: "£2.95",
            },
            {
                cardHeading: "Flat white",
                cardSubtext: "Stronger coffee, with two espresso shots in a 6oz mug with steamed milk.",
                cardPrice: "£2.70",
            },
            {
                cardHeading: "Single Espresso",
                cardSubtext: "",
                cardPrice: "£1.85",
            },
            {
                cardHeading: "Double Espresso",
                cardSubtext: "",
                cardPrice: "£2.20",
            },
        ],
        'Twinnings Breakfast Tea': [
            {
                cardHeading: "Assam Tea",
                cardSubtext: "A black tea, produced in Assam, India, manufactured from the plant Camellia sinensis var.",
                cardPrice: "£2.40",
            },
            // {
            //   cardHeading: "Earl Grey Tea",
            //   cardSubtext: "A tea blend flavoured with oil of bergamot.",
            //   cardPrice: "£2.40",
            // },
            {
                cardHeading: "Peppermint Tea",
                cardSubtext: "Peppermint infused herbal tea.",
                cardPrice: "£2.40",
            },
            // {
            //   cardHeading: "Lemon and Ginger Tea",
            //   cardSubtext: "Combined lemon and ginger to make a refreshing tea. ",
            //   cardPrice: "£2.40",
            // },
            {
                cardHeading: "Green Tea",
                cardSubtext: "Tea made from Camellia sinensis leaves and buds. ",
                cardPrice: "£2.40",
            },
            // {
            //   cardHeading: "Spicy Chai Tea ",
            //   cardSubtext: "A warming and aromatic tea with cinnamon, clove and ginger. ",
            //   cardPrice: "£2.40",
            // },
        ],
        'Twinnings Decaffeinated Tea': [
            // {
            //   cardHeading: "Assam Tea",
            //   cardSubtext: "A black tea, produced in Assam, India, manufactured from the plant Camellia sinensis var.",
            //   cardPrice: "£2.40",
            // },
            {
                cardHeading: "Earl Grey Tea",
                cardSubtext: "A tea blend flavoured with oil of bergamot.",
                cardPrice: "£2.40",
            },
            // {
            //   cardHeading: "Peppermint Tea",
            //   cardSubtext: "Peppermint infused herbal tea.",
            //   cardPrice: "£2.40",
            // },
            {
                cardHeading: "Lemon and Ginger Tea",
                cardSubtext: "Combined lemon and ginger to make a refreshing tea. ",
                cardPrice: "£2.40",
            },
            // {
            //   cardHeading: "Green Tea",
            //   cardSubtext: "Tea made from Camellia sinensis leaves and buds. ",
            //   cardPrice: "£2.40",
            // },
            {
                cardHeading: "Spicy Chai Tea ",
                cardSubtext: "A warming and aromatic tea with cinnamon, clove and ginger. ",
                cardPrice: "£2.40",
            },
        ]
    }


    const MenuItems = {
        'Paninis': [
            {
                cardHeading: "BBQ Chicken & Smoked Bacon",
                cardPrice: "£8.50",
            },
            {
                cardHeading: "Goats Cheese, Pesto and Sunblushed Tomato",
                cardsubheading: ["Vegetarian"],
                cardPrice: "£8.50",
            },
            {
                cardHeading: "Tuna Mayonnaise with Pickled Shallot",
                cardPrice: "£8.50",
            },
            {
                cardHeading: "Coconut Feta, Beetroot and Watercress",
                cardsubheading: ["Vegan", " Dairy Free"],
                cardPrice: "£8.50",
            },
            {
                cardHeading: "Honey Roast Ham and Arran Mustard",
                cardPrice: "£8.50",
            },
            {
                cardHeading: "St Andrews Cheddar and Seasonal Chutney",
                cardsubheading: ["Vegetarian"],
                cardPrice: "£8.50",
            },
        ],
        'Sandwiches': [
            {
                cardHeading: "Crayfish Marie Rose",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£7.95",
            },
            {
                cardHeading: "Honey Roast Ham and Arron Mustard",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£7.95",
            },
            {
                cardHeading: "Tuna Mayonnaise with Pickled Shallot",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£7.95",
            },
            {
                cardHeading: "Smoked Salmon, Pickled Cucumber and Crème Fraiche",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£7.95",
            },
            {
                cardHeading: "St Andrews Cheddar and Seasonal Chutney",
                cardsubheading: ["Vegetarian", "Gluten Free Option"],
                cardPrice: "£7.95",
            },
            {
                cardHeading: "Coconut Feta, Beetroot and Watercress",
                cardsubheading: ["Vegan", "Dairy Free"],
                cardPrice: "£7.95",
            },
        ],
        'Hot Sandwiches': [
            {
                cardHeading: "Bank Club Sandwich",
                cardSubtext: "Roast chicken,smoked bacon, gem lettuce, tomato, mayonnaise and egg.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£10.95",
            },
            {
                cardHeading: "Bank Steak Sandwich",
                cardSubtext: "Seared steak and red onion jam with honey mustard and black pepper mayonnaise and fresh watercress.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£12.95",
            },
        ],
        'Platters': [
            {
                cardHeading: "Ploughmans",
                cardSubtext: "Selection of Scottish cheese, homemade chorizo and apple sausage roll, homemade pickles and chutneys, homemade bread, salad and fresh apple. ",
                cardsubheading: ["Vegetarian", "Gluten Free Option"],
                cardPrice: "£13.50",
            },
            {
                cardHeading: "Scottish Smoked Meat and Fish",
                cardSubtext: "Selection of cured and smoked meats and fish, homemade pickles, dips, salad, chutneys, homemade bread and seasonal chutney.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£14.95",
            },
        ],
        'Starters': [
            {
                cardHeading: "Soup of the Day ",
                cardSubtext: "Served with sourdough bread and rock salt butter. ",
                cardsubheading: ["Gluten Free Option", "Vegan Option"],
                cardPrice: "£6.50",
            },
            {
                cardHeading: "Blackbull™ Whisky Beetroot Cured Salmon",
                cardSubtext: "Salmon cured with Blackbull™ whisky and beetroot, served with fennel and blood orange salad and saffron mayo.",
                cardsubheading: ["Gluten Free Option", "Dairy Free Option"],
                cardPrice: "£9.50",
            },
            {
                cardHeading: "Cullen Skink",
                cardSubtext: "Traditional smoked haddock soup, served with sourdough bread and rock salt butter.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£8.00",
            },
            {
                cardHeading: "Goats Cheese and Beetroot Scotch Egg",
                cardSubtext: "Goats cheese and beetroot scotch egg served with apple and chilli puree.",
                cardsubheading: ["Gluten Free Option", "Vegetarian", "Vegan Option"],
                cardPrice: "£7.50",
            },
            {
                cardHeading: "Stornoway Black Pudding Benedict",
                cardSubtext: "Spinach, crispy ham and Arran mustard hollandaise, served on a bed of Stornoway black pudding.",
                cardPrice: "£8.50",
            },
        ],
        'Mains': [
            {
                cardHeading: "Venison Ragu",
                cardSubtext: "Highland venison ragu served with pappardelle pasta with pecorino espuma.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£23.50",
            },
            {
                cardHeading: "Pan Seared Stonebass",
                cardSubtext: "Pan seared stone bass, served with string vegetables, curried coconut mussels and red onion bhaji.",
                cardsubheading: ["Gluten Free "],
                cardPrice: "£17.50",
            },
            {
                cardHeading: "Steak and Ale Shortcrust Pie",
                cardSubtext: "Angussteak and Speyside Ale shortcrust pastry pie,served with tenderstem broccoli and buttered mash.",
                cardPrice: "£14.95",
            },
            {
                cardHeading: "Ribeye Steak",
                cardSubtext: "10oz ribeye steak served with watercress, portobello mushroom, vine tomato, and chips. Add Sauce - £4.00 ( Diane, peppercorn, chimchurri. or Strathdon blue cheese. )",
                cardsubheading: ["Gluten Free"],
                cardPrice: "£29",
            },
            {
                cardHeading: "10oz Steak Burger",
                cardSubtext: "10oz Angussteak burger on a brioche bun with red cabbage slaw and ‘The Bank” burgersauce served with fries. Add Cheese - £2, Add Bacon - £2",
                cardPrice: "£14",
            },
            {
                cardHeading: "Gnocchi ",
                cardSubtext: "Fried gnocchi with sweet potato, cavolo nero, truffle and hazelnut.",
                cardsubheading: ["Gluten Free", "Vegetarian", "Dairy Free"],
                cardPrice: "£16.50",
            },
            {
                cardHeading: "Buttermilk Chicken Burger",
                cardSubtext: "Buttermilk chicken on a brioche bun with red cabbage slaw and ‘The Bank’ burger sauce served with fries. Add Cheese - £2, Add Bacon - £2",
                cardPrice: "£14.50",
            },
            {
                cardHeading: "Paradelle Pasta",
                cardSubtext: "Paradelle pasta tossed with forest mushroom, spinach and roasted garlic cream with pecorino foam.",
                cardsubheading: ["Vegetarian"],
                cardPrice: "£14.50",
            },
            {
                cardHeading: "Beer Battered Cod",
                cardSubtext: "Brewdog battered `Peterhead cod,served with handcut chips, pea puree, tartare sauce and lemon. ",
                cardsubheading: ["Gluten Free"],
                cardPrice: "£14",
            },
        ],
        'Sides': [
            {
                cardHeading: "Skinny fries",
                cardPrice: "£4.00",
            },
            {
                cardHeading: "Brewdog Battered Onion Rings",
                cardPrice: "£4.00",
            },
            {
                cardHeading: "Add Truffle and Parmesan",
                cardPrice: "£2.00",
            },
            {
                cardHeading: "Maple and orange roast carrots with hazelnut crumb",
                cardPrice: "£4.00",
            },
            {
                cardHeading: "Rocket, Shallot and Parmesan Salad",
                cardPrice: "£4.00",
            },
            {
                cardHeading: "Charred hispi cabbage, coriander and black seseme ",
                cardPrice: "£4.00",
            },
            {
                cardHeading: "Tenderstem broccoli and toasted almond butter ",
                cardPrice: "£4.00",
            },
        ],
        'Desserts': [
            {
                cardHeading: "White chocolate and Blackbull™ Whisky Mousse",
                cardSubtext: "White chocolate and Blackbull™ Kyloe mousse served with almond granola and raspberry sorbet.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£9.00",
            },
            {
                cardHeading: "Clemantine Marmalade Posset",
                cardSubtext: "Clementine Marmalade posset served with gingerbread.",
                cardsubheading: ["Vegetarian", "Vegan"],
                cardPrice: "£8.00",
            },
            {
                cardHeading: "Sticky Toffee pudding",
                cardSubtext: "Sticky toffee pudding served with banana compote, and tablet ice cream.",
                cardsubheading: ["Gluten Free Option"],
                cardPrice: "£8.50",
            },
            {
                cardHeading: "Molten Chocolate Dome",
                cardSubtext: "Molten chocolate dome served with salted caramel ice cream, brownie pieces, honeycomb and caramelsauce.",
                cardPrice: "£9.00",
            },
            {
                cardHeading: "Selection of Ice Cream and Sorbets",
                cardSubtext: "3 scoops of ice cream and sorbets. Please ask ourserversfortodaysice cream and sorbet flavours.",
                cardPrice: "£6.00",
            },
        ],
        'Hot Drinks - Coffees & Hot Chocolate': [
            {
                cardHeading: "Americano",
                cardSubtext: "A double espresso with hot water served in 6oz mug.",
                cardPrice: "£2.30",
            },
            {
                cardHeading: "Mocha",
                cardSubtext: "Single espresso shot topped with chocolate steamed milk served in a 8oz mug.",
                cardPrice: "£2.90",
            },
            {
                cardHeading: "Latte",
                cardSubtext: "Steamed milk an espresso shot served in a tall glass mug.",
                cardPrice: "£2.90",
            },
            {
                cardHeading: "Macchiato",
                cardSubtext: "Single espresso shot, topped with a drop of steamed milk served in a small espresso cup",
                cardPrice: "£2.30",
            },
            {
                cardHeading: "Cappuccino",
                cardSubtext: "Double espresso with steamed milk in an 8oz mug. ",
                cardPrice: "£2.90",
            },
            {
                cardHeading: "Hot Chocolate",
                cardSubtext: "Add Cream - £0.30, Add Marshmallows - £0.20",
                cardPrice: "£2.95",
            },
            {
                cardHeading: "Flat white",
                cardSubtext: "Stronger coffee, with two espresso shots in a 6oz mug with steamed milk.",
                cardPrice: "£2.70",
            },
            {
                cardHeading: "Single Espresso",
                cardSubtext: "",
                cardPrice: "£1.85",
            },
            {
                cardHeading: "Double Espresso",
                cardSubtext: "",
                cardPrice: "£2.20",
            },
        ],
        'Hot Drinks - Twinnings Breakfast Tea': [
            {
                cardHeading: "Assam Tea",
                cardSubtext: "A black tea, produced in Assam, India, manufactured from the plant Camellia sinensis var.",
                cardPrice: "£2.40",
            },
            // {
            //   cardHeading: "Earl Grey Tea",
            //   cardSubtext: "A tea blend flavoured with oil of bergamot.",
            //   cardPrice: "£2.40",
            // },
            {
                cardHeading: "Peppermint Tea",
                cardSubtext: "Peppermint infused herbal tea.",
                cardPrice: "£2.40",
            },
            // {
            //   cardHeading: "Lemon and Ginger Tea",
            //   cardSubtext: "Combined lemon and ginger to make a refreshing tea. ",
            //   cardPrice: "£2.40",
            // },
            {
                cardHeading: "Green Tea",
                cardSubtext: "Tea made from Camellia sinensis leaves and buds. ",
                cardPrice: "£2.40",
            },
            // {
            //   cardHeading: "Spicy Chai Tea ",
            //   cardSubtext: "A warming and aromatic tea with cinnamon, clove and ginger. ",
            //   cardPrice: "£2.40",
            // },
        ],
        'Hot Drinks - Twinnings Decaffeinated Tea': [
            // {
            //   cardHeading: "Assam Tea",
            //   cardSubtext: "A black tea, produced in Assam, India, manufactured from the plant Camellia sinensis var.",
            //   cardPrice: "£2.40",
            // },
            {
                cardHeading: "Earl Grey Tea",
                cardSubtext: "A tea blend flavoured with oil of bergamot.",
                cardPrice: "£2.40",
            },
            // {
            //   cardHeading: "Peppermint Tea",
            //   cardSubtext: "Peppermint infused herbal tea.",
            //   cardPrice: "£2.40",
            // },
            {
                cardHeading: "Lemon and Ginger Tea",
                cardSubtext: "Combined lemon and ginger to make a refreshing tea. ",
                cardPrice: "£2.40",
            },
            // {
            //   cardHeading: "Green Tea",
            //   cardSubtext: "Tea made from Camellia sinensis leaves and buds. ",
            //   cardPrice: "£2.40",
            // },
            {
                cardHeading: "Spicy Chai Tea ",
                cardSubtext: "A warming and aromatic tea with cinnamon, clove and ginger. ",
                cardPrice: "£2.40",
            },
        ],
    }

    return (
        <>
            <OurMenu
                headingtext="Our"
                subtext="Menu Mix"
                imageUrl={
                    isMobile
                        ? "/menuImages/menupage-mobile.jpg"
                        : "/menuImages/menupage.jpg"
                }
            />

            {/* new menu */}

            {/* <MainCourseWithSubMenu
                menuCourseItem={MenuItems}
                title="Menu"
                subTitle="( 12:00 - 20:45 Mon To SAT )"
                additionals="Or why not try our liqueur coffee made with Blackbull™ Kyloe"
                additionalsPrice="£6.00"
                paninisSubText="Locally sourced panini with a filling of your choice, served with salad, root vegetable crisps and red cabbage coleslaw. Add Soup - £3.50, Add Mozzarella or Cheddar - £1.00"
                sandwichesSubText="Sandwiches, served on locally sourced white or brown bloomer or gluten free bread with a filling
        of your choice served with salad, root vegetable crisps and red cabbage coleslaw. Add Soup - £3.50"
                hotSandwichesSubText="Hot sandwich, served on locally sourced, toasted, white or brown bloomer or gluten free bread,
        with a filling of your choice served with salad, root vegetable crisps and red cabbage coleslaw. Add Soup - £3.50"
            /> */}

            <MainCourseWithSubMenu
                menuCourseItem={valentineDinnerMenuItems}
                title="Valentine's Dinner "
                subTitle=""
                additionals=""
                additionalsPrice=""
                description="3 Courses £30PP"
            />

            {/* <MainCourseWithSubMenu
                menuCourseItem={childrensMenuItems}
                title="Childrens Menu"
                subTitle=""
                additionals=""
                additionalsPrice=""
            /> */}

            {/* <MainCourseWithSubMenu
                menuCourseItem={sundayBrunchMenuItems}
                title="Sunday Brunch Menu"
                subTitle="( 10:30 AM - 11:45 AM )"
                additionals=""
                additionalsPrice=""
            /> */}
            {/* new menu */}

            {/* <MainCourse
        menuCourseItem={breakFastMenuItems}
        title="Breakfast"
        subTitle="( 08:30 - 11:30 Mon To SAT )"
      /> */}
            {/* <MenuCardComponent menuItems={breakFastMenuItems} /> */}
            {/* <MainCourseWithSubMenu
        menuCourseItem={lunchMenuItems}
        title="LUNCHES "
        subTitle="( 12:00 - 16:30 MON TO SAT )"
        additionals="Add soup to any"
        additionalsPrice="£3.50"
      /> */}

            {/* <MainCourseWithSubMenu
        menuCourseItem={EveningMenuItems}
        title="Evening Menu"
        subTitle="( 17:00 - 20:45 MON TO SAT )"
        additionals="Add soup to any"
        additionalsPrice="£3.50"
      /> */}

            {/* 05-01-2023 satya srnin tell to hide dinner menu */}
            {/* <MainCourseWithSubMenu
        menuCourseItem={dinnerMenuItems}
        title="Dinner"
        subTitle="( 17:00 - 20:45 Mon To Sat )"
      /> */}

            {/* <MainCourseWithSubMenu
        menuCourseItem={specialMenuList}
        title="special Sunday menu"
        subTitle="( 12:00 to 18:00 Sun )"
        description="2 Course £21.95 / 3 Course £26.95 Children: 2 course £10.95 / 3 course £13.95"
      /> */}
            {/* <MainCourseWithSubMenu
        menuCourseItem={specialMenuListChildrens}
        title="Children’s Menu"
        subTitle=""
        description=""
        isChildrenMenu
      /> */}


            <section
                className="whisky_bg"
                style={{ height: "386px", marginTop: "91px" }}
            >
                {isMobile ? (
                    <Image
                        src={"/menuImages/our_whisky.jpg"}
                        alt="bg"
                        width="390"
                        height="386"
                        className="whisky_bg_img"
                    />
                ) : (
                    <Image
                        src={"/menuImages/our_whisky.jpg"}
                        alt="bg"
                        width="1280"
                        height="386"
                        className="whisky_bg_img"
                    />
                )}
                <div className="whisky_title_section">
                    <h2>Our</h2>
                    <h3>Whiskies</h3>
                </div>
            </section>
            {/* <MainCourse menuCourseItem={WhiskyMenuItems} isMenubutton_ourwhiskies /> */}
        </>
    );
};

export default ValentineMenupage;
