import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {useState,useEffect} from "react";
import Header from "./Header";


// const heading = React.createElement("h1",{id:"heading"},"Hello World from React!!");

// console.log(heading);

// //JSX 
// const JSXHeading=<h1 id="heading">Namaste React</h1>
// console.log(JSXHeading);

// const Title = () => (
//      <h1 className="head">Namaste React Title !</h1>
// );

// const number=100;

// const HeadingComponent = () => (
//     <div id="container"> 
//         <Title />
//         {number+"0"};
//         <h1 className="heading">Namaste React Functional Component!</h1>;
//     </div>
// );
const reslist = [
    
  {
    "info": {
      "id": "311806",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_311806.JPG",
      "locality": "Ballupur",
      "areaName": "Ballupur",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.4,
      "parentId": "166",
      "avgRatingString": "4.4",
      "totalRatingsString": "17K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.6",
          "ratingCount": "998"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/burger-king-ballupur-rest311806",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69769",
      "name": "Aman Vegetarian",
      "cloudinaryImageId": "ygczg6efdbjietl1req7",
      "locality": "Paltan Bazar",
      "areaName": "Paltan Bazaar",
      "costForTwo": "₹260 for two",
      "cuisines": [
        "North Indian",
        "Thalis",
        "Chinese"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "13687",
      "avgRatingString": "4.3",
      "totalRatingsString": "14K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Dal%20Makhani.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Dal%20Makhani.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.9",
          "ratingCount": "347"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/aman-vegetarian-paltan-bazar-paltan-bazaar-rest69769",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69500",
      "name": "Rajdhani Chicken Point",
      "cloudinaryImageId": "jkkhgvwcjvpfheq8ftbv",
      "locality": "Race Course",
      "areaName": "Gandhi Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Mughlai",
        "North Indian"
      ],
      "avgRating": 4.2,
      "parentId": "13692",
      "avgRatingString": "4.2",
      "totalRatingsString": "24K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.7",
          "ratingCount": "299"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/rajdhani-chicken-point-race-course-gandhi-road-rest69500",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "94236",
      "name": "Doon Tripple Nine patelnagar",
      "cloudinaryImageId": "3fc6b31d7bfb08dfc0e6d0ac8df6bc65",
      "locality": "Saharanpur Road",
      "areaName": "Kaonli",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "rolls",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "390321",
      "avgRatingString": "4.4",
      "totalRatingsString": "5.1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 23:27:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Dal%20Makhani.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Dal%20Makhani.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/doon-tripple-nine-patelnagar-saharanpur-road-kaonli-rest94236",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69499",
      "name": "Uss Da Dhaba",
      "cloudinaryImageId": "j6w0gbsy2pdoivjjlymp",
      "locality": "Race Course",
      "areaName": "Race Course",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Continental"
      ],
      "avgRating": 4.1,
      "parentId": "13693",
      "avgRatingString": "4.1",
      "totalRatingsString": "27K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "6.7K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/uss-da-dhaba-race-course-rest69499",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69447",
      "name": "Gaylord Express",
      "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
      "locality": "Paltan Bazar",
      "areaName": "Paltan Bazaar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Chinese",
        "North Indian",
        "Beverages"
      ],
      "avgRating": 3.8,
      "parentId": "13696",
      "avgRatingString": "3.8",
      "totalRatingsString": "71K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-07 05:01:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.4",
          "ratingCount": "2.0K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/gaylord-express-paltan-bazar-paltan-bazaar-rest69447",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "371422",
      "name": "Handi Punjab Ki",
      "cloudinaryImageId": "vozwrqdkvfcfutehx4ld",
      "locality": "Rajpur Road",
      "areaName": "Hathibarkala Salwala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "North Indian",
        "Snacks",
        "Chinese"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "93115",
      "avgRatingString": "4.4",
      "totalRatingsString": "23K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/handi-punjab-ki-rajpur-road-hathibarkala-salwala-rest371422",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "74373",
      "name": "Walk In Woods",
      "cloudinaryImageId": "rx6kpst6wxyw9vvj7wo8",
      "locality": "General Mahadev Singh Road",
      "areaName": "Ballupur",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "7148",
      "avgRatingString": "4.3",
      "totalRatingsString": "27K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Snacks.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Thali.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Snacks.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Thali.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/walk-in-woods-general-mahadev-singh-road-ballupur-rest74373",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "68758",
      "name": "Nath'S Chinese",
      "cloudinaryImageId": "e73f25b965f7bb1e80f2d64a03c234b1",
      "locality": "Rajpur Road",
      "areaName": "Hathibarkala Salwala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Chinese"
      ],
      "avgRating": 4.3,
      "parentId": "13608",
      "avgRatingString": "4.3",
      "totalRatingsString": "19K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 23:03:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Chinese.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Momos.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Chinese.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Momos.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/naths-chinese-rajpur-road-hathibarkala-salwala-rest68758",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "657142",
      "name": "Punjabi Angithi (Delhi Wale)",
      "cloudinaryImageId": "0a59d45ca92d85e5f63f5bc79f3dbb33",
      "locality": "Rajpur Road",
      "areaName": "Hathibarkala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tandoor"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "471145",
      "avgRatingString": "4.4",
      "totalRatingsString": "16K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20chaap.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Thali.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20chaap.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Thali.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹119"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/punjabi-angithi-delhi-wale-rajpur-road-hathibarkala-rest657142",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "74852",
      "name": "Doon Tripple Nine ( Ballupur)",
      "cloudinaryImageId": "p84jrjty8ktstt80fqgh",
      "locality": "Kaulagarh Road",
      "areaName": "Krishna Nagar",
      "costForTwo": "₹380 for two",
      "cuisines": [
        "North Indian",
        "Tandoor",
        "Snacks",
        "Chinese"
      ],
      "avgRating": 4.3,
      "parentId": "74095",
      "avgRatingString": "4.3",
      "totalRatingsString": "6.6K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 23:25:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/doon-tripple-nine-ballupur-kaulagarh-road-krishna-nagar-rest74852",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "342482",
      "name": "Bobby Punjabi Kitchen",
      "cloudinaryImageId": "a9e9da596e7e738dc02f18a9b3c5146b",
      "locality": "Guru Road",
      "areaName": "Laxman Chowk",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Snacks"
      ],
      "avgRating": 4.1,
      "parentId": "48299",
      "avgRatingString": "4.1",
      "totalRatingsString": "1.6K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 00:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/bobby-punjabi-kitchen-guru-road-laxman-chowk-rest342482",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "654590",
      "name": "Salads & Co.",
      "cloudinaryImageId": "6b0436296370b8c0d6fb108ffce8e17e",
      "locality": "Patel Road",
      "areaName": "Chukkuwala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Continental",
        "Salads",
        "Healthy Food",
        "Snacks"
      ],
      "avgRating": 4.6,
      "parentId": "393819",
      "avgRatingString": "4.6",
      "totalRatingsString": "1.4K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/salads-and-co-patel-road-chukkuwala-rest654590",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "349677",
      "name": "Singh's Spl. Malai Chaap Wale",
      "cloudinaryImageId": "epmofgbnwgkhap14jcu0",
      "locality": "Connaught Place",
      "areaName": "Chukkuwala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Snacks"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "188628",
      "avgRatingString": "4.2",
      "totalRatingsString": "1.3K+",
      "sla": {
        "deliveryTime": 14,
        "lastMileTravel": 0.3,
        "serviceability": "SERVICEABLE",
        "slaString": "10-15 mins",
        "lastMileTravelString": "0.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/singhs-spl-malai-chaap-wale-connaught-place-chukkuwala-rest349677",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "78057",
      "name": "Chilli'Z Restro",
      "cloudinaryImageId": "gkeymduioynruheoqhlq",
      "locality": "Ring Road",
      "areaName": "Dharampur",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "Mughlai"
      ],
      "avgRating": 4.2,
      "parentId": "13645",
      "avgRatingString": "4.2",
      "totalRatingsString": "31K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20chaap.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20chaap.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/chilliz-restro-ring-road-dharampur-rest78057",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "209248",
      "name": "Tapri - The Teafe",
      "cloudinaryImageId": "b6a6d5f32a06ab3f5c6eed98cf014236",
      "locality": "Rajpur Road",
      "areaName": "Hathibarkala Salwala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Beverages",
        "Continental",
        "Italian",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "201145",
      "avgRatingString": "4.3",
      "totalRatingsString": "2.9K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 03:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/tapri-the-teafe-rajpur-road-hathibarkala-salwala-rest209248",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "81538",
      "name": "Jeeja Saaley Dee Angeethi",
      "cloudinaryImageId": "khvr7yg9m8pkgo5nabx5",
      "locality": "Chakrata Road",
      "areaName": "Ballupur",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Snacks"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "15684",
      "avgRatingString": "4.3",
      "totalRatingsString": "6.8K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/jeeja-saaley-dee-angeethi-chakrata-road-ballupur-rest81538",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "415642",
      "name": "Murthal Paranthawala",
      "cloudinaryImageId": "deabin3rt4mbtcitgopv",
      "locality": "Haridwar Road",
      "areaName": "Race Course",
      "costForTwo": "₹220 for two",
      "cuisines": [
        "North Indian"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "282923",
      "avgRatingString": "4.2",
      "totalRatingsString": "2.5K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/murthal-paranthawala-haridwar-road-race-course-rest415642",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69392",
      "name": "Aangan Restaurant & Bar",
      "cloudinaryImageId": "lce61flh8zpi5uu7vwwu",
      "locality": "Karanpur",
      "areaName": "Ashtley Hall",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Chinese",
        "Continental"
      ],
      "avgRating": 4.4,
      "parentId": "15804",
      "avgRatingString": "4.4",
      "totalRatingsString": "9.5K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "1.2K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/aangan-restaurant-and-bar-karanpur-ashtley-hall-rest69392",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "341446",
      "name": "Food Nagri",
      "cloudinaryImageId": "qmufoszfhvwsmjnsy3nj",
      "locality": "Kishan Nagar",
      "areaName": "Ballupur",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Biryani"
      ],
      "avgRating": 4.1,
      "parentId": "81705",
      "avgRatingString": "4.1",
      "totalRatingsString": "3.6K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 03:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    }}

];

const RestaurantCard = (props) => {
    const {resData} = props;

    
    return (
        <div className="w-52 shadow-md justify-between m-3 p-3 h-auto rounded-xl bg-slate-50">
            <img className="res-logo  h-44 w-auto rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} />
            <h3 className="font-bold text-center">{resData.info.name}</h3>
            <h3>{resData.info.cuisines.join(", ")}</h3>
            <h3>{resData.info.avgRating}</h3>
            <h3>38 min</h3>
        </div>
    );
};

const Body = () => {

  const [listofres,setlistofres] = useState([reslist]);
  const[searchText,setsearchText]=useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4770436&lng=77.66077109999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  //   const json= await data.json();
  //   console.log(json);

  //   setlistofres(
  //     json.data.cards
  //   );
  // };



    return(
        <div className="body mx-8 w-full content-center">
          <div className=" m-2 p-2 flex mx-9 w-3/4 ">
          <div className="search mx-2">
              <input type="text" className="search-box px-12 border-2 rounded-xl p-2 mx-1" value={searchText} onChange={(e) => {
                setsearchText(e.target.value);
              }} />
              <button  onClick={() => {

                console.log(searchText);
                const fiteredres = listofres.filter((res) => res.info.name == searchText);
                setlistofres(filteredres);

              }}>Search</button>
            </div>
            <div className="filter">
              <button className="filterbutton border-2 p-2 rounded-xl"
              onClick={() => {
                const filteredlist= reslist.filter(
                  (res) => res.avgRating < 4
                );
                setlistofres(filteredlist);
              }}
              >Top Rated Restaurants</button>
             </div>
          </div>
           
            <div className="flex flex-wrap mx-12">
                {
                    reslist.map((restaurant) => (
                        <RestaurantCard key="restaurant.info.id" resData={restaurant}/>
                    ))
                }
              
                
            </div>
        </div>
    );
};

const AppLayout = () => {
    return <div className="app">
          <Header/>
          <Body/>
        </div>;
    
};

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);