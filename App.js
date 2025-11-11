import React from "react";
import ReactDOM from "react-dom/client";
/*
 * Header Component
 * - Logo
 * - Nav Items
 * - Cart
 * Body
 * - Search Bar
 * - Restaurant List
 * - - Restaurant Card
 * - - - image
 * - - - title
 * - - - cusines
 * - - - ratings
 * Footer
 * - COPYRIGHT
 * - linkS
 * - address
 * - contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNrDG63E_e5fjS1gF6jvD6QKEenYQ-01YTQ&s"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
  padding: "20px",
};

const ResObj = {
  data: {
    restaurants: [
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "715738",
          name: "Hoy Punjab",
          rating: {
            value: "4.6",
            count: 5725,
            countDescription: "5K+ Google ratings",
          },
          costForTwo: "₹1200 for two",
          cuisines: ["Mughlai", "North Indian"],
          locality: "Kakkanad",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2025-02-17T10:12:35.505",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/17/3c651396-ee31-409a-995f-4612611168ca_image0f713e9a2faed4e7e9518036918d6d666.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-02-17T10:11:34.027",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/17/b5b06802-0879-4bd5-a863-fca51c0c34f9_image25f410b539e684515bbc914e2ccb6240d.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-02-17T10:11:34.025",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/17/f03aacce-5a9f-4c0b-8c13-a0fc68d45d54_image195a6a65b6e9f4d1e83b0943be65ec874.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-02-17T10:11:34.021",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/17/300d69b5-7b16-4c1c-9c69-5093d07ce079_image38287110062e94b7cb3d89160305eeddf.JPG",
            },
            {
              type: "IMAGE",
              id: "2023-05-22T08:53:22.158",
              url: "v1684745603/1e4907e08d0aaebd0f29ab58462d58a6.webp",
            },
            {
              type: "IMAGE",
              id: "2025-02-03T09:25:11",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/3/d17490e9-9705-4006-b5aa-3dd1eb406d06_45643d9a7c7be40158cf3354b79431422.JPG",
            },
            {
              type: "IMAGE",
              id: "2023-05-22T08:52:56.451",
              url: "v1684745577/0331f9c616f4cb4db93b579d7572d0de.webp",
            },
          ],
          highlights: ["Parking available", "SwiggyPay accepted"],
          locationInfo: {
            distanceString: "15.8 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Kakkanad, Kochi",
          },
          offerInfoV2: {
            otherOffers: {
              logo: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
              },
              offers: [
                {
                  header: "FLAT 20% OFF",
                  offerLogo: {},
                  availability: "AVAILABILITY_AVAILABLE_TODAY",
                  dealCategory: "Pre-Book",
                  availabilityDescription: "Available today",
                },
              ],
            },
          },
          vendorOffer: {
            info: {
              header: "TODAY’S \nDISCOUNT",
              type: "FLAT",
              title: "10% Off",
              subtitle: "on total bill",
              description: "FLAT 10% OFF",
              isOfferApplicableNow: true,
              tnc: [
                "Discount on this restaurant is applicable throughout the day for you.",
                "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                "You get a flat discount on your bill amount with no upper limit.",
                "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                "The restaurant may levy Service charge/Entry fees as per its discretion",
                "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                "Any items ordered that are not included in the offer will be billed separately.",
                "Menu prices and items may change without prior notice.",
                "Weekend and weekdays offer might differ as per restaurant’s discretion.",
              ],
              offerType: "OFFER_TYPE_V2_REGULAR",
              availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
              offersLogoV2: [
                {
                  logo: "dineout/rx-card/OFFER.png",
                  type: "LOGO_TYPE_RX_TILE",
                },
                {
                  logo: "dineout/search/as/Offers.png",
                  type: "LOGO_TYPE_SEARCH_SUGGESTION",
                },
                {
                  type: 3,
                },
              ],
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 10,
              },
            },
            otherOffersInfo: [
              {
                header: "TODAY’S \nDISCOUNT",
                type: "FLAT",
                title: "20% OFF",
                description: "FLAT 20% OFF",
                isOfferApplicableNow: true,
                offerType: "OFFER_TYPE_V2_PRE_BOOK",
                availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                otherLogoContext: {
                  logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
                },
                dealCategory: "Pre-Book",
                availabilityDescription: "Available today",
                offersLogoV2: [
                  {
                    logo: "dineout/rx-card/OFFER.png",
                    type: "LOGO_TYPE_RX_TILE",
                  },
                  {
                    logo: "dineout/search/as/Offers.png",
                    type: "LOGO_TYPE_SEARCH_SUGGESTION",
                  },
                  {
                    type: 3,
                  },
                ],
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 20,
                },
              },
            ],
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerCount: 5,
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
              {
                logoCtx: {
                  text: "Free Mocktail",
                  logo: "dineout/rx-card/highlights/drink2.png",
                },
              },
              {
                logoCtx: {
                  text: "Free Dessert",
                  logo: "dineout/free_desert.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/drink2.png",
              },
              title: "Free Mocktail",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
            {
              logo: {
                logo: "dineout/free_desert.png",
              },
              title: "Free Dessert",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            offerLogo: {
              logo: "dineout/rx-card/OFFER.png",
            },
            vendorOffer: {
              title: "Flat 20% off",
              subtitle: "on pre-booking",
              subtext: "+ 5 more",
              style: {
                textColour: "text_color_highest_emphasis_inverse",
                bgColour: "positive",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/hoy-punjab-kakkanad-kochi-715738/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "984949",
          name: "The Springs - The Avenue Regent",
          rating: {
            value: "4.4",
            count: 7161,
            countDescription: "7K+ Google ratings",
          },
          costForTwo: "₹2000 for two",
          cuisines: ["Asian", "Desserts"],
          locality: "MG Road",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2024-11-04T11:30:08.264",
              description: "Ambience",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/11/4/ec972e88-7f1c-4576-bf58-2883fada8dab_image4796b6f0e17ab4367a4aebf1993a70ed5.JPG",
            },
            {
              type: "IMAGE",
              id: "2024-11-04T11:30:07.903",
              description: "Ambience",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/11/4/298bef7c-ffff-4ae3-8801-214150797f0a_image3c9b6d107d2a44bb095f295d5db29cc1e.JPG",
            },
            {
              type: "IMAGE",
              id: "2024-11-04T11:29:25.468",
              name: "FOOD",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/11/4/3d9825a9-bf94-4c41-989a-f356c5a9acc3_image5a57ced2476634349be7138822a67907d.JPG",
            },
            {
              type: "IMAGE",
              id: "2024-11-04T11:29:25.430",
              name: "FOOD",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/11/4/f8ab0ab7-e0d2-49a9-90f2-5c8ef0c04385_image8028037baee264e4590fd38443d0d7dd1.JPG",
            },
          ],
          highlights: [
            "Vegan food",
            "Reservation available",
            "Parking available",
            "SwiggyPay accepted",
          ],
          locationInfo: {
            distanceString: "17.7 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "MG Road, Kochi",
          },
          offerInfoV2: {
            otherOffers: {
              logo: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
              },
              offers: [
                {
                  header: "FLAT 10% OFF",
                  offerLogo: {},
                  availability: "AVAILABILITY_AVAILABLE_TODAY",
                  dealCategory: "Pre-Book",
                  availabilityDescription: "Available today",
                },
              ],
            },
          },
          vendorOffer: {
            otherOffersInfo: [
              {
                header: "TODAY’S \nDISCOUNT",
                type: "FLAT",
                title: "10% OFF",
                description: "FLAT 10% OFF",
                isOfferApplicableNow: true,
                offerType: "OFFER_TYPE_V2_PRE_BOOK",
                availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                otherLogoContext: {
                  logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
                },
                dealCategory: "Pre-Book",
                availabilityDescription: "Available today",
                offersLogoV2: [
                  {
                    logo: "dineout/rx-card/OFFER.png",
                    type: "LOGO_TYPE_RX_TILE",
                  },
                  {
                    logo: "dineout/search/as/Offers.png",
                    type: "LOGO_TYPE_SEARCH_SUGGESTION",
                  },
                  {
                    type: 3,
                  },
                ],
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerCount: 1,
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
              {
                logoCtx: {
                  text: "Buffet",
                  logo: "dineout/rx-card/highlights/bell.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
            {
              logo: {
                logo: "dineout/rx-card/highlights/bell.png",
              },
              title: "Buffet",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            offerLogo: {
              logo: "dineout/rx-card/OFFER.png",
            },
            vendorOffer: {
              title: "Flat 10% off",
              subtitle: "on pre-booking",
              subtext: "+ 1 more",
              style: {
                textColour: "text_color_highest_emphasis_inverse",
                bgColour: "positive",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/the-springs-the-avenue-regent-mg-road-kochi-984949/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "596119",
          name: "The Oven",
          rating: {
            value: "4.2",
            count: 278,
            countDescription: "278 Google ratings",
          },
          costForTwo: "₹800 for two",
          cuisines: ["Continental", "Beverages"],
          locality: "Thevara",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2025-09-19T06:13:45.028",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/9/19/56d9d692-6752-49ff-95cf-61482f872ec4_1152473542e21c48b085e3ec40dfe7956d.PNG",
            },
            {
              type: "IMAGE",
              id: "2025-09-19T06:13:45.035",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/9/19/778ef12d-3fa1-4d2a-9227-cd565a36d8b0_19003ce0bfd874594ad837df317d076fe.PNG",
            },
            {
              type: "IMAGE",
              id: "2022-08-14T07:31:40.659",
              name: "ambience",
              url: "v1660462303/vcgrynbngmjrycgdlunb.jpg",
            },
            {
              type: "IMAGE",
              id: "2022-08-14T07:31:44.152",
              name: "ambience",
              url: "v1660462306/krhcjbcp5zy5v85bc1h3.jpg",
            },
            {
              type: "IMAGE",
              id: "2025-01-25T08:08:12.813",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/25/99d2f5a0-58fa-4d9f-9cc7-83931c2befe8_12f3c4d8def8554c15b866da29a1ae8890.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-01-25T08:08:12.637",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/25/28502853-cd4a-43d2-b361-804b88b7c075_13d7a3245132f24767b763c1eb344430b8.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-01-25T08:08:12.803",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/25/eb8a5aef-c623-49fb-baf3-daee3730011f_5081bdafc7d0c458eacf32d3a301e7282.JPG",
            },
          ],
          highlights: ["SwiggyPay accepted"],
          locationInfo: {
            distanceString: "15.5 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Thevara, Kochi",
          },
          offerInfoV2: {
            vendorOffer: {
              header: "FLAT 10% OFF",
              offerLogo: {},
            },
            customerOffer: {
              header: "+ 10% off with WELCOME + Up to 10% bank offers",
              offerLogo: {},
            },
          },
          vendorOffer: {
            info: {
              header: "TODAY’S \nDISCOUNT",
              type: "FLAT",
              title: "10% Off",
              subtitle: "on total bill",
              description: "FLAT 10% OFF",
              isOfferApplicableNow: true,
              tnc: [
                "Discount on this restaurant is applicable throughout the day for you.",
                "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                "You get a flat discount on your bill amount with no upper limit.",
                "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                "The restaurant may levy Service charge/Entry fees as per its discretion",
                "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                "Any items ordered that are not included in the offer will be billed separately.",
                "Menu prices and items may change without prior notice.",
                "Weekend and weekdays offer might differ as per restaurant’s discretion.",
              ],
              offerType: "OFFER_TYPE_V2_REGULAR",
              availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
              offersLogoV2: [
                {
                  logo: "dineout/rx-card/OFFER.png",
                  type: "LOGO_TYPE_RX_TILE",
                },
                {
                  logo: "dineout/search/as/Offers.png",
                  type: "LOGO_TYPE_SEARCH_SUGGESTION",
                },
                {
                  type: 3,
                },
              ],
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 10,
              },
            },
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerCount: 1,
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            offerLogo: {
              logo: "dineout/rx-card/OFFER.png",
            },
            vendorOffer: {
              title: "Flat 10% off",
              subtitle: "on walk-in",
              subtext: "+ 1 more",
              style: {
                textColour: "text_color_highest_emphasis_inverse",
                bgColour: "positive",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/the-oven-thevara-kochi-596119/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "921896",
          name: "Mehrab Mandi Restaurant",
          rating: {
            value: "4.1",
            count: 3852,
            countDescription: "3K+ Google ratings",
          },
          costForTwo: "₹1000 for two",
          cuisines: ["Multi Cuisine", "North Indian"],
          locality: "Edappally",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2024-07-07T10:30:25.684",
              name: "image 9 jpg",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/7/7/c373fd62-9a02-401c-b0c2-cf4e4fda5678_20240707T103025949.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-07-07T10:30:26.017",
              name: "image 15 jpg",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/7/7/ac6db4f6-dea5-481d-8f42-2c7bb2070e3a_20240707T103026311.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-07-07T10:30:26.371",
              name: "image 38 jpg",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/7/7/7a82eb81-8de7-44ea-824d-0175e723416e_20240707T103026642.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-07-07T10:30:39.750",
              name: "image 11 jpg",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/7/7/560bd98c-3e9d-4bae-bce5-bcc9b53a3fae_20240707T103040020.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-07-07T10:30:40.110",
              name: "image 13 jpg",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/7/7/906b3002-74a1-45eb-b03f-6b8a71335e2c_20240707T103040382.jpg",
            },
          ],
          highlights: [
            "Reservation available",
            "Parking available",
            "SwiggyPay accepted",
          ],
          locationInfo: {
            distanceString: "18.8 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Edappally, Kochi",
          },
          offerInfoV2: {
            otherOffers: {
              logo: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
              },
              offers: [
                {
                  header: "FLAT 10% OFF",
                  offerLogo: {},
                  availability: "AVAILABILITY_AVAILABLE_TODAY",
                  dealCategory: "Pre-Book",
                  availabilityDescription: "Available today",
                },
              ],
            },
          },
          vendorOffer: {
            otherOffersInfo: [
              {
                header: "TODAY’S \nDISCOUNT",
                type: "FLAT",
                title: "10% OFF",
                description: "FLAT 10% OFF",
                isOfferApplicableNow: true,
                offerType: "OFFER_TYPE_V2_PRE_BOOK",
                availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                otherLogoContext: {
                  logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
                },
                dealCategory: "Pre-Book",
                availabilityDescription: "Available today",
                offersLogoV2: [
                  {
                    logo: "dineout/rx-card/OFFER.png",
                    type: "LOGO_TYPE_RX_TILE",
                  },
                  {
                    logo: "dineout/search/as/Offers.png",
                    type: "LOGO_TYPE_SEARCH_SUGGESTION",
                  },
                  {
                    type: 3,
                  },
                ],
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerCount: 1,
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            offerLogo: {
              logo: "dineout/rx-card/OFFER.png",
            },
            vendorOffer: {
              title: "Flat 10% off",
              subtitle: "on pre-booking",
              subtext: "+ 1 more",
              style: {
                textColour: "text_color_highest_emphasis_inverse",
                bgColour: "positive",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/mehrab-mandi-restaurant-edappally-kochi-921896/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "604421",
          name: "Zoka",
          rating: {
            value: "4.6",
            count: 286,
            countDescription: "286 Google ratings",
          },
          costForTwo: "₹2000 for two",
          cuisines: ["Chinese", "Thai"],
          locality: "Maradu",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2022-08-30T10:59:30.789",
              url: "v1661857172/cpm0nrazks7ul20qawem.jpg",
            },
            {
              type: "IMAGE",
              id: "2022-08-30T10:59:31.796",
              url: "v1661857173/qkc4byjagdotgfzmfcqa.jpg",
            },
            {
              type: "IMAGE",
              id: "2022-08-30T10:59:33.062",
              url: "v1661857174/kpbjivcinvg8p5ifvtzt.jpg",
            },
            {
              type: "IMAGE",
              id: "2022-08-30T10:59:33.833",
              url: "v1661857175/sluwnyakhn9m1dci4uoy.jpg",
            },
            {
              type: "IMAGE",
              id: "2022-08-30T10:59:32.358",
              url: "v1661857174/km1n5bzynqeuqpus9aws.jpg",
            },
            {
              type: "IMAGE",
              id: "2022-08-30T10:57:28.098",
              url: "v1661857075/bkahklqdt4kyhetwsbdt.jpg",
            },
            {
              type: "IMAGE",
              id: "2022-08-30T10:57:28.149",
              url: "v1661857085/lqvouvbqlmyuglcmyfq2.jpg",
            },
          ],
          highlights: [
            "Alcohol served",
            "Parking available",
            "Valet parking",
            "SwiggyPay accepted",
          ],
          locationInfo: {
            distanceString: "12.6 km",
            landmarkName: "Crown Plaza Hotel",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Crown Plaza Hotel, Maradu, Kochi",
          },
          offerInfoV2: {
            otherOffers: {
              logo: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
              },
              offers: [
                {
                  header: "FLAT 25% OFF",
                  offerLogo: {},
                  availability: "AVAILABILITY_AVAILABLE_TODAY",
                  dealCategory: "Pre-Book",
                  availabilityDescription: "Available today",
                },
              ],
            },
          },
          vendorOffer: {
            info: {
              header: "TODAY’S \nDISCOUNT",
              type: "FLAT",
              title: "15% Off",
              subtitle: "on total bill",
              description: "FLAT 15% OFF",
              isOfferApplicableNow: true,
              tnc: [
                "Discount on this restaurant is applicable throughout the day for you.",
                "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                "You get a flat discount on your bill amount with no upper limit.",
                "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                "The restaurant may levy Service charge/Entry fees as per its discretion",
                "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                "Any items ordered that are not included in the offer will be billed separately.",
                "Menu prices and items may change without prior notice.",
                "Weekend and weekdays offer might differ as per restaurant’s discretion.",
              ],
              offerType: "OFFER_TYPE_V2_REGULAR",
              availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
              offersLogoV2: [
                {
                  logo: "dineout/rx-card/OFFER.png",
                  type: "LOGO_TYPE_RX_TILE",
                },
                {
                  logo: "dineout/search/as/Offers.png",
                  type: "LOGO_TYPE_SEARCH_SUGGESTION",
                },
                {
                  type: 3,
                },
              ],
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            otherOffersInfo: [
              {
                header: "TODAY’S \nDISCOUNT",
                type: "FLAT",
                title: "25% OFF",
                description: "FLAT 25% OFF",
                isOfferApplicableNow: true,
                offerType: "OFFER_TYPE_V2_PRE_BOOK",
                availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                otherLogoContext: {
                  logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
                },
                dealCategory: "Pre-Book",
                availabilityDescription: "Available today",
                offersLogoV2: [
                  {
                    logo: "dineout/rx-card/OFFER.png",
                    type: "LOGO_TYPE_RX_TILE",
                  },
                  {
                    logo: "dineout/search/as/Offers.png",
                    type: "LOGO_TYPE_SEARCH_SUGGESTION",
                  },
                  {
                    type: 3,
                  },
                ],
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 25,
                },
              },
            ],
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerCount: 3,
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            offerLogo: {
              logo: "dineout/rx-card/OFFER.png",
            },
            vendorOffer: {
              title: "Flat 25% off",
              subtitle: "on pre-booking",
              subtext: "+ 3 more",
              style: {
                textColour: "text_color_highest_emphasis_inverse",
                bgColour: "positive",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/zoka-maradu-kochi-604421/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "895494",
          name: "Cheenavala",
          rating: {
            value: "4.2",
            count: 9951,
            countDescription: "9K+ Google ratings",
          },
          costForTwo: "₹1200 for two",
          cuisines: ["South Indian"],
          locality: "Edappally",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2024-05-24T11:31:26.538",
              name: "image 10 jpg",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/5/24/9c6576ca-9be1-480c-8615-f3928c33cf00_20240524T113126798.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-05-24T11:31:26.879",
              name: "image 14 jpg",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/5/24/4ba72e3a-6caa-487b-8117-4362e6dd8cb1_20240524T113127137.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-05-24T11:31:33.228",
              name: "image 2 jpg",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/5/24/2d8cc1cd-6c33-458d-95a2-fd0e9b418abc_20240524T113133468.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-05-24T11:31:33.565",
              name: "image 6 jpg",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/5/24/8fcc7bff-d474-4319-811a-c42f56fe772e_20240524T113133815.jpg",
            },
          ],
          highlights: [
            "Reservation available",
            "Parking available",
            "SwiggyPay accepted",
          ],
          locationInfo: {
            distanceString: "19.4 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Edappally, Kochi",
          },
          offerInfoV2: {
            customerOffer: {
              header: " 10% off with WELCOME + Up to 10% bank offers",
              otherOfferLogo: {
                logo: "OFFER_LOGO",
              },
            },
          },
          vendorOffer: {
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            paymentOffer: {
              title: "Up to 10% off with bank offers",
              style: {
                textColour: "positive",
                bgColour: "color_positive_sub",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/cheenavala-edappally-kochi-895494/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "997893",
          name: "Zayka By The Hagrids Kitchen",
          rating: {
            value: "4.6",
            count: 218,
            countDescription: "218 Google ratings",
          },
          costForTwo: "₹800 for two",
          cuisines: ["North Indian"],
          locality: "Ernakulam",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2024-11-27T06:56:39.569",
              description: "Ambience",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/11/27/fd896022-251e-4bce-adfb-fe5b36ffa0e3_image1fae6cc200c974c21b71a688c702da3ce.JPG",
            },
            {
              type: "IMAGE",
              id: "2024-11-27T06:56:39.586",
              description: "Ambience",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/11/27/aca4f9b7-fb3f-4352-9fab-2465ba4f16d0_image371b162be685645e7831508ea97d1f523.JPG",
            },
            {
              type: "IMAGE",
              id: "2024-11-27T06:55:57.136",
              name: "Food ",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/11/27/07f054f7-fb25-455b-bf60-f0a7b04ec563_image18c1b40d894a26453ca88911e6f99020b1.JPG",
            },
            {
              type: "IMAGE",
              id: "2024-11-27T06:55:57.173",
              name: "Food ",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/11/27/bf46f4c2-bc11-4e85-a4de-ab002a6764d7_image161e38c956524b4c1b80d1f57920102fb4.JPG",
            },
          ],
          highlights: ["Parking available", "Free wifi", "SwiggyPay accepted"],
          locationInfo: {
            distanceString: "17.4 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Ernakulam, Kochi",
          },
          offerInfoV2: {
            otherOffers: {
              logo: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
              },
              offers: [
                {
                  header: "FLAT 15% OFF",
                  offerLogo: {},
                  availability: "AVAILABILITY_AVAILABLE_LATER",
                  dealCategory: "Pre-Book",
                  availabilityDescription: "Available 3 Nov",
                },
                {
                  header: "FLAT 10% OFF",
                  offerLogo: {},
                  availability: "AVAILABILITY_AVAILABLE_TODAY",
                  dealCategory: "Pre-Book",
                  availabilityDescription: "Available today",
                },
              ],
            },
          },
          vendorOffer: {
            otherOffersInfo: [
              {
                header: "TODAY’S \nDISCOUNT",
                type: "FLAT",
                title: "15% OFF",
                description: "FLAT 15% OFF",
                offerType: "OFFER_TYPE_V2_PRE_BOOK",
                availability: "OFFER_AVAILABILITY_AVAILABLE_LATER",
                otherLogoContext: {
                  logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
                },
                dealCategory: "Pre-Book",
                availabilityDescription: "Available 3 Nov",
                offersLogoV2: [
                  {
                    logo: "dineout/rx-card/OFFER.png",
                    type: "LOGO_TYPE_RX_TILE",
                  },
                  {
                    logo: "dineout/search/as/Offers.png",
                    type: "LOGO_TYPE_SEARCH_SUGGESTION",
                  },
                  {
                    type: 3,
                  },
                ],
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
              {
                header: "TODAY’S \nDISCOUNT",
                type: "FLAT",
                title: "10% OFF",
                description: "FLAT 10% OFF",
                isOfferApplicableNow: true,
                offerType: "OFFER_TYPE_V2_PRE_BOOK",
                availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                otherLogoContext: {
                  logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
                },
                dealCategory: "Pre-Book",
                availabilityDescription: "Available today",
                offersLogoV2: [
                  {
                    logo: "dineout/rx-card/OFFER.png",
                    type: "LOGO_TYPE_RX_TILE",
                  },
                  {
                    logo: "dineout/search/as/Offers.png",
                    type: "LOGO_TYPE_SEARCH_SUGGESTION",
                  },
                  {
                    type: 3,
                  },
                ],
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerCount: 2,
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            offerLogo: {
              logo: "dineout/rx-card/OFFER.png",
            },
            vendorOffer: {
              title: "Flat 15% off",
              subtitle: "on pre-booking",
              subtext: "+ 2 more",
              style: {
                textColour: "text_color_highest_emphasis_inverse",
                bgColour: "positive",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/zayka-by-the-hagrids-kitchen-ernakulam-kochi-997893/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "704831",
          name: "Barbeque Nation",
          rating: {
            value: "4.3",
            count: 699,
            countDescription: "699 Google ratings",
          },
          costForTwo: "₹2000 for two",
          cuisines: ["North Indian", "Chinese"],
          locality: "Edappally",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2025-04-04T05:15:01.760",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/4/4/494dc9b1-345b-4714-9b95-0d609d36a017_Cover85557decbfe84effb8a0e2775b48dc81.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-04-04T05:15:08.488",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/4/4/d5b98615-3797-46fc-8c3e-981c6dbd2e29_DSC0054525e4bf1371c24f298b5659d03b69bc5b.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-04-04T05:15:08.598",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/4/4/f37a4635-001a-4981-a911-f2b456f174cd_Buffet3d99bcbcd978d4b318f3c9a85da610d09.JPG",
            },
            {
              type: "IMAGE",
              id: "2023-04-24T19:11:42.583",
              name: "Dish",
              url: "v1682350926/be5eb844755e66b755effcfeee336032.jpg",
            },
            {
              type: "IMAGE",
              id: "2023-04-24T19:11:18.915",
              name: "Dish",
              url: "v1682350864/627b8dfc85726c704693fe494fe26abd.jpg",
            },
            {
              type: "IMAGE",
              id: "2023-04-24T19:11:19.328",
              name: "Dish",
              url: "v1682350865/69eeb18deaee8f3f81a5ef5ff09d9b37.jpg",
            },
            {
              type: "IMAGE",
              id: "2023-04-24T19:11:18.874",
              name: "Dish",
              url: "v1682350864/e40b024a4405a687e4f353f46b60d3ba.jpg",
            },
          ],
          highlights: ["Parking available", "Valet parking", "Free wifi"],
          locationInfo: {
            distanceString: "21.2 km",
            landmarkName: "Lulu Mall",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Lulu Mall, Edappally, Kochi",
          },
          offerInfoV2: {
            customerOffer: {
              header: " 10% off with WELCOME + Up to 10% bank offers",
              otherOfferLogo: {
                logo: "OFFER_LOGO",
              },
            },
          },
          vendorOffer: {
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            paymentOffer: {
              title: "Up to 10% off with bank offers",
              style: {
                textColour: "positive",
                bgColour: "color_positive_sub",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/barbeque-nation-edappally-kochi-704831/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "53372",
          name: "Zaatar Arabic Restaurant ",
          rating: {
            value: "4.1",
            count: 13195,
            countDescription: "13K+ Google ratings",
          },
          costForTwo: "₹1000 for two",
          cuisines: ["Arabian", "North Indian"],
          locality: "Palarivattom",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2023-02-23T10:40:23.649",
              url: "v1677148825/ee2fd941587b4d89ced04c24c3247ca3.webp",
            },
            {
              type: "IMAGE",
              id: "2023-02-23T10:40:23.538",
              url: "v1676876348/62a8af60499fa542aebb36cb22f9d05b.webp",
            },
            {
              type: "IMAGE",
              id: "2023-02-23T10:37:12.596",
              url: "v1677148633/8a86aa8aa4f47050967f1ae392733de0.webp",
            },
            {
              type: "IMAGE",
              id: "2023-02-23T10:37:12.609",
              url: "v1677148634/78b9a524f4202f2c05e92d1700bb86b2.webp",
            },
            {
              type: "IMAGE",
              id: "2023-02-23T10:37:12.601",
              url: "v1677148634/fd6a167a0bfcfc03f31e03dc208386b2.webp",
            },
          ],
          highlights: ["Parking available", "SwiggyPay accepted"],
          locationInfo: {
            distanceString: "18.7 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Palarivattom, Kochi",
          },
          offerInfoV2: {
            customerOffer: {
              header: " 10% off with WELCOME + Up to 10% bank offers",
              otherOfferLogo: {
                logo: "OFFER_LOGO",
              },
            },
          },
          vendorOffer: {
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          offerInfoV3: {
            paymentOffer: {
              title: "Up to 10% off with bank offers",
              style: {
                textColour: "positive",
                bgColour: "color_positive_sub",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/zaatar-arabic-restaurant-palarivattom-kochi-53372/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "821084",
          name: "Chopstix",
          rating: {
            value: "4.2",
            count: 1650,
            countDescription: "1K+ Google ratings",
          },
          costForTwo: "₹1000 for two",
          cuisines: ["Chinese", "Asian"],
          locality: "Tripunithura",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2024-01-22T06:00:10.011",
              name: "trip-5---Robin-Y-Appillil jpg",
              url: "v1705903213/2dd7ef916852a660ff53d53b04724512.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-01-22T06:00:15.155",
              name: "trip---Robin-Y-Appillil jpg",
              url: "v1705903216/88861839ef78fbab44e6a50ca3aac846.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-01-22T06:01:49.288",
              name: "Celearly-fish---Robin-Y-Appillil jpg",
              url: "v1705903311/8bdfb475b2354a8dc2891d7d18e5b601.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-01-22T06:01:53.835",
              name: "Chicken-pum-sasuage---Robin-Y-Appillil jpg",
              url: "v1705903315/cc5bce204d9874e91effc9ebcdd74852.jpg",
            },
          ],
          highlights: [
            "Reservation available",
            "Parking available",
            "SwiggyPay accepted",
          ],
          locationInfo: {
            distanceString: "10.6 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Tripunithura, Kochi",
          },
          offerInfoV2: {
            vendorOffer: {
              header: "FLAT 10% OFF",
              offerLogo: {},
            },
            customerOffer: {
              header: "+ 10% off with WELCOME + Up to 10% bank offers",
              offerLogo: {},
            },
          },
          vendorOffer: {
            info: {
              header: "TODAY’S \nDISCOUNT",
              type: "FLAT",
              title: "10% Off",
              subtitle: "on total bill",
              description: "FLAT 10% OFF",
              isOfferApplicableNow: true,
              tnc: [
                "Discount on this restaurant is applicable throughout the day for you.",
                "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                "You get a flat discount on your bill amount with no upper limit.",
                "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                "The restaurant may levy Service charge/Entry fees as per its discretion",
                "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                "Any items ordered that are not included in the offer will be billed separately.",
                "Menu prices and items may change without prior notice.",
                "Weekend and weekdays offer might differ as per restaurant’s discretion.",
              ],
              offerType: "OFFER_TYPE_V2_REGULAR",
              availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
              offersLogoV2: [
                {
                  logo: "dineout/rx-card/OFFER.png",
                  type: "LOGO_TYPE_RX_TILE",
                },
                {
                  logo: "dineout/search/as/Offers.png",
                  type: "LOGO_TYPE_SEARCH_SUGGESTION",
                },
                {
                  type: 3,
                },
              ],
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 10,
              },
            },
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerCount: 1,
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            offerLogo: {
              logo: "dineout/rx-card/OFFER.png",
            },
            vendorOffer: {
              title: "Flat 10% off",
              subtitle: "on walk-in",
              subtext: "+ 1 more",
              style: {
                textColour: "text_color_highest_emphasis_inverse",
                bgColour: "positive",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/chopstix-tripunithura-kochi-821084/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "824695",
          name: "Chopstix",
          rating: {
            value: "4.2",
            count: 4099,
            countDescription: "4K+ Google ratings",
          },
          costForTwo: "₹1200 for two",
          cuisines: ["Chinese", "Asian"],
          locality: "Kakkanad",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2024-01-29T12:06:59.313",
              name: "Chopstix-KKND---Robin-Y-Appillil jpg",
              url: "v1706530021/cfeec175c1870daadb26cd764a0788e3.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-01-29T12:09:10.137",
              name: "Chilly-garlic-chicken-rice---Robin-Y-Appillil jpg",
              url: "v1706530153/d12cc500584f49c07dc8162d09e6bbf6.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-01-29T12:09:15.837",
              name: "Cottage-cheese-pepper-salt---Robin-Y-Appillil jpg",
              url: "v1706530157/8d96294f5e4295e684e76ba6995f57c8.jpg",
            },
            {
              type: "IMAGE",
              id: "2025-02-09T05:22:58.732",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/9/d2d59c27-1f43-4495-a084-b3620249a28d_image122fa6a2a0d81644a488f6b98672882d88.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-02-09T05:22:58.666",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/9/b4dda2d0-b68a-4e8a-957d-26412b4eed0c_image680cb8849bd0f47e5a338ac8ec3121103.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-02-09T05:23:27.655",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/9/6062ea1b-0caa-483c-9ca2-bbe4e82dfab7_image153d064aac2ce84c1c803311fd74b5fb74.JPG",
            },
            {
              type: "IMAGE",
              id: "2024-01-29T12:09:20.513",
              name: "Crispy-corn-homey-glazed---Robin-Y-Appillil jpg",
              url: "v1706530162/7f345efba42f1371dd0adba87ea043b7.jpg",
            },
          ],
          highlights: [
            "Reservation available",
            "Parking available",
            "Free wifi",
            "SwiggyPay accepted",
          ],
          locationInfo: {
            distanceString: "17.4 km",
            landmarkName: "Flair Business Floor",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Flair Business Floor, Kakkanad, Kochi",
          },
          offerInfoV2: {
            customerOffer: {
              header: " 10% off with WELCOME + Up to 10% bank offers",
              otherOfferLogo: {
                logo: "OFFER_LOGO",
              },
            },
          },
          vendorOffer: {
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            paymentOffer: {
              title: "Up to 10% off with bank offers",
              style: {
                textColour: "positive",
                bgColour: "color_positive_sub",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/chopstix-kakkanad-kochi-824695/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "1049865",
          name: "TOT - Talk of the Town",
          rating: {
            value: "4.6",
            count: 1185,
            countDescription: "1K+ Google ratings",
          },
          costForTwo: "₹1500 for two",
          cuisines: ["Continental", "Kerala"],
          locality: "Elamakkara",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2025-02-21T07:28:04.625",
              description: "Ambience ",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/21/bc28c6f0-425b-454e-b217-a39c6164b1be_image25ab8819461afc430abd63054ed0c98e28.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-02-21T07:28:04.683",
              description: "Ambience ",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/21/6d64503a-936e-404e-967e-041b10adb207_image8b3acdd8fbe604588bef822ba512ccd14.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-02-21T07:28:04.714",
              description: "Ambience ",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/21/5f1bbc5f-a7e9-4565-be98-ae4fad04ffe9_image17963e391bd83c4d2cb60d6dfbbfebfbeb.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-09-18T10:07:37.991",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/9/18/c92a2a85-f203-4dee-bbac-129ec1cb024c_11d74231ed42f94433a9f27878c7c255eb.PNG",
            },
            {
              type: "IMAGE",
              id: "2025-09-18T10:07:38.008",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/9/18/13ec6b0e-663b-49e8-b691-6f3cc0142d68_1f094e893d31247fd8acfaaea8a4710c7.PNG",
            },
            {
              type: "IMAGE",
              id: "2025-09-18T10:07:49.856",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/9/18/df067404-4337-42a9-a3e4-bf3c15217acf_2177dc6a13b7243cfafb33ecacd86c510.PNG",
            },
            {
              type: "IMAGE",
              id: "2025-02-21T07:06:47.244",
              name: "Food ",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/21/adb929a1-a16d-4558-b657-0e3e35563dc9_image9ab5fa798b8bb4dfeb243378d3fbe3978.JPG",
            },
          ],
          highlights: ["Parking available", "SwiggyPay accepted"],
          locationInfo: {
            distanceString: "19.5 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Elamakkara, Kochi",
          },
          offerInfoV2: {
            otherOffers: {
              logo: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
              },
              offers: [
                {
                  header: "FLAT 5% OFF",
                  offerLogo: {},
                  availability: "AVAILABILITY_AVAILABLE_TODAY",
                  dealCategory: "Pre-Book",
                  availabilityDescription: "Available today",
                },
              ],
            },
          },
          vendorOffer: {
            otherOffersInfo: [
              {
                header: "TODAY’S \nDISCOUNT",
                type: "FLAT",
                title: "5% OFF",
                description: "FLAT 5% OFF",
                isOfferApplicableNow: true,
                offerType: "OFFER_TYPE_V2_PRE_BOOK",
                availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                otherLogoContext: {
                  logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
                },
                dealCategory: "Pre-Book",
                availabilityDescription: "Available today",
                offersLogoV2: [
                  {
                    logo: "dineout/rx-card/OFFER.png",
                    type: "LOGO_TYPE_RX_TILE",
                  },
                  {
                    logo: "dineout/search/as/Offers.png",
                    type: "LOGO_TYPE_SEARCH_SUGGESTION",
                  },
                  {
                    type: 3,
                  },
                ],
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 5,
                },
              },
            ],
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerCount: 1,
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            offerLogo: {
              logo: "dineout/rx-card/OFFER.png",
            },
            vendorOffer: {
              title: "Flat 5% off",
              subtitle: "on pre-booking",
              subtext: "+ 1 more",
              style: {
                textColour: "text_color_highest_emphasis_inverse",
                bgColour: "positive",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/tot-talk-of-the-town-elamakkara-kochi-1049865/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "818002",
          name: "Hamza's Naadan Grills",
          rating: {
            value: "4.1",
            count: 1932,
            countDescription: "1K+ Google ratings",
          },
          costForTwo: "₹600 for two",
          cuisines: ["Middle Eastern", "South Indian"],
          locality: "Ernakulam",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2024-01-15T11:00:25.797",
              name: "HND-AMBIANCE-1---Pooja-Suresh jpg",
              url: "v1705316429/4a6f4398c18448b7eb999a3623aec2a7.jpg",
            },
            {
              type: "IMAGE",
              id: "2025-01-27T07:30:26.045",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/27/04a7e994-f942-4bc5-9899-dfa2eba58d1c_76b182363330a4a5695d65c1fade7ac57.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-01-27T07:30:43.013",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/27/3fc8b394-0861-42fc-8d77-56a360aedc5b_144024c3748e1f4ae5babbff50edd0bb1e.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-01-27T07:30:50.649",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/27/f98a9526-ba1e-4711-8e1b-4bc17872fcdb_187252e45fc4724347880285d74e5ebcf1.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-01-27T07:34:38.472",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/27/0ab642a3-ad6f-4b66-9120-65049c03d846_269c0060e62e744f3192894a4bba7f6156.JPG",
            },
            {
              type: "IMAGE",
              id: "2024-01-15T11:00:46.032",
              name: "HNG-Food-7---Pooja-Suresh jpg",
              url: "v1705316447/33472bebfdf12900a1cb80beb1cd27ab.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-01-15T11:00:53.537",
              name: "HNG-Food-3---Pooja-Suresh jpg",
              url: "v1705316454/9501e7aa64ad704a1796e42ff08a8f00.jpg",
            },
          ],
          highlights: [
            "Reservation available",
            "Parking available",
            "SwiggyPay accepted",
          ],
          locationInfo: {
            distanceString: "16.1 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Ernakulam, Kochi",
          },
          offerInfoV2: {
            customerOffer: {
              header: " 10% off with WELCOME + Up to 10% bank offers",
              otherOfferLogo: {
                logo: "OFFER_LOGO",
              },
            },
          },
          vendorOffer: {
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          offerInfoV3: {
            paymentOffer: {
              title: "Up to 10% off with bank offers",
              style: {
                textColour: "positive",
                bgColour: "color_positive_sub",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/hamzas-naadan-grills-ernakulam-kochi-818002/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "308505",
          name: "The Oven",
          rating: {
            value: "4.3",
            count: 580,
            countDescription: "580 Google ratings",
          },
          costForTwo: "₹800 for two",
          cuisines: ["Continental", "Beverages"],
          locality: "Pallimukku",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2022-08-17T15:40:57.467",
              name: "ambience",
              url: "v1660750860/pyyiluvawqzqcszktpq2.jpg",
            },
            {
              type: "IMAGE",
              id: "2022-08-17T15:40:53.792",
              name: "ambience",
              url: "v1660750856/zktjj3rgc9xvuakbc2pt.jpg",
            },
            {
              type: "IMAGE",
              id: "2025-02-07T12:16:43.282",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/7/17a7d416-9075-4690-9551-9835f74d9782_image9e49999d94fc34d32bdda26cea3869bde.JPG",
            },
            {
              type: "IMAGE",
              id: "2022-08-17T15:41:21.208",
              name: "Dish",
              url: "v1660750883/sb3wt5nvmq3jcbhuwauv.jpg",
            },
            {
              type: "IMAGE",
              id: "2025-02-07T12:16:43.316",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/7/a90db8e6-e4f0-4868-b16c-e4a823e079c4_image8c20fa34015534fe1b08b66488f667819.JPG",
            },
            {
              type: "IMAGE",
              id: "2025-02-07T12:16:42.954",
              url: "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/7/7b59eabb-871a-4ec7-9636-fc2eabb99e9b_image51c32cf044c5e4e43a9aa49103353dbb6.JPG",
            },
            {
              type: "IMAGE",
              id: "2022-08-17T15:41:24.685",
              name: "Dish",
              url: "v1660750887/jy5smgyqqygwynfwbhvp.jpg",
            },
          ],
          highlights: ["SwiggyPay accepted"],
          locationInfo: {
            distanceString: "18.1 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Pallimukku, Kochi",
          },
          offerInfoV2: {
            vendorOffer: {
              header: "FLAT 10% OFF",
              offerLogo: {},
              availability: "AVAILABILITY_AVAILABLE_TODAY",
            },
            otherOffers: {
              logo: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
              },
              offers: [
                {
                  header: "FLAT 15% OFF",
                  offerLogo: {},
                  availability: "AVAILABILITY_AVAILABLE_LATER",
                  dealCategory: "Pre-Book",
                  availabilityDescription: "Available 3 Nov",
                },
              ],
            },
          },
          vendorOffer: {
            info: {
              header: "TODAY’S \nDISCOUNT",
              type: "FLAT",
              title: "10% Off",
              subtitle: "on total bill",
              description: "FLAT 10% OFF",
              isOfferApplicableNow: true,
              tnc: [
                "Discount on this restaurant is applicable throughout the day for you.",
                "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                "You get a flat discount on your bill amount with no upper limit.",
                "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                "The restaurant may levy Service charge/Entry fees as per its discretion",
                "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                "Any items ordered that are not included in the offer will be billed separately.",
                "Menu prices and items may change without prior notice.",
                "Weekend and weekdays offer might differ as per restaurant’s discretion.",
              ],
              offerType: "OFFER_TYPE_V2_REGULAR",
              availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
              offersLogoV2: [
                {
                  logo: "dineout/rx-card/OFFER.png",
                  type: "LOGO_TYPE_RX_TILE",
                },
                {
                  logo: "dineout/search/as/Offers.png",
                  type: "LOGO_TYPE_SEARCH_SUGGESTION",
                },
                {
                  type: 3,
                },
              ],
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 10,
              },
            },
            otherOffersInfo: [
              {
                header: "TODAY’S \nDISCOUNT",
                type: "FLAT",
                title: "15% OFF",
                description: "FLAT 15% OFF",
                offerType: "OFFER_TYPE_V2_PRE_BOOK",
                availability: "OFFER_AVAILABILITY_AVAILABLE_LATER",
                otherLogoContext: {
                  logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
                },
                dealCategory: "Pre-Book",
                availabilityDescription: "Available 3 Nov",
                offersLogoV2: [
                  {
                    logo: "dineout/rx-card/OFFER.png",
                    type: "LOGO_TYPE_RX_TILE",
                  },
                  {
                    logo: "dineout/search/as/Offers.png",
                    type: "LOGO_TYPE_SEARCH_SUGGESTION",
                  },
                  {
                    type: 3,
                  },
                ],
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerCount: 2,
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            offerLogo: {
              logo: "dineout/rx-card/OFFER.png",
            },
            vendorOffer: {
              title: "Flat 15% off",
              subtitle: "on pre-booking",
              subtext: "+ 2 more",
              style: {
                textColour: "text_color_highest_emphasis_inverse",
                bgColour: "positive",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/the-oven-pallimukku-kochi-308505/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
      {
        "@type":
          "type.googleapis.com/swiggy.presentation.dinersone.v1.DinersoneRestaurant",
        info: {
          id: "841461",
          name: "Caravan Ice Cream Cafe",
          rating: {
            value: "4.6",
            count: 1279,
            countDescription: "1K+ Google ratings",
          },
          costForTwo: "₹900 for two",
          cuisines: ["Fast Food"],
          locality: "Kakkanad",
          mediaFiles: [
            {
              type: "IMAGE",
              id: "2024-02-23T14:05:22.082",
              name: "Caravan-3---Robin-Y-Appillil jpg",
              url: "v1708697123/4aa96c937f3edcb462a1d3cb5f689d88.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-02-23T14:05:42.733",
              name: "Chocolate-Sundae 1 ---Robin-Y-Appillil jpg",
              url: "v1708697144/40717f3b9ca486215017989cadb19799.jpg",
            },
            {
              type: "IMAGE",
              id: "2024-02-23T14:05:46.993",
              name: "DSCF6787 a ---Robin-Y-Appillil jpg",
              url: "v1708697148/0261e35a81e53eb41db60505f21ec388.jpg",
            },
          ],
          highlights: [
            "Reservation available",
            "Parking available",
            "Free wifi",
            "SwiggyPay accepted",
          ],
          locationInfo: {
            distanceString: "17.3 km",
            city: {
              name: "Kochi",
            },
            formattedAddress: "Kakkanad, Kochi",
          },
          offerInfoV2: {
            otherOffers: {
              logo: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
              },
              offers: [
                {
                  header: "FLAT 10% OFF",
                  offerLogo: {},
                  availability: "AVAILABILITY_AVAILABLE_TODAY",
                  dealCategory: "Pre-Book",
                  availabilityDescription: "Available today",
                },
              ],
            },
          },
          vendorOffer: {
            otherOffersInfo: [
              {
                header: "TODAY’S \nDISCOUNT",
                type: "FLAT",
                title: "10% OFF",
                description: "FLAT 10% OFF",
                isOfferApplicableNow: true,
                offerType: "OFFER_TYPE_V2_PRE_BOOK",
                availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                otherLogoContext: {
                  logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
                },
                dealCategory: "Pre-Book",
                availabilityDescription: "Available today",
                offersLogoV2: [
                  {
                    logo: "dineout/rx-card/OFFER.png",
                    type: "LOGO_TYPE_RX_TILE",
                  },
                  {
                    logo: "dineout/search/as/Offers.png",
                    type: "LOGO_TYPE_SEARCH_SUGGESTION",
                  },
                  {
                    type: 3,
                  },
                ],
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                header: "Get extra 10% off using WELCOME",
                description: " 10% off with WELCOME + Up to 10% bank offers",
                coupon: {
                  code: "WELCOME",
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            offerCount: 1,
            offerHighlights: [
              {
                logoCtx: {
                  text: "Table booking",
                  logo: "dineout/rx-card/highlights/book.png",
                },
              },
            ],
          },
          customerOffer: {
            info: {
              description: "+ Up to 10% bank offers",
              otherLogoContext: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
              },
              discountInfo: {
                discountType: "DISCOUNT_TYPE_PERCENTAGE",
                discountValue: 15,
              },
            },
            loyaltyInfo: {
              cta: {
                link: "swiggy://fusion-landing?id=SWIGGY_ONE_NEVER",
                text: "Buy Swiggy One",
                type: "DEEPLINK",
              },
              offerDetail: {
                type: "FLAT",
                title: "₹150 Off",
                subtitle: "above ₹1500",
                description: " ₹150 off",
                logoContext: {
                  text: "with",
                  logo: "ONE",
                },
                coupon: {
                  availableCouponCount: 2,
                },
                otherLogoContext: {
                  logo: "OFFER_LOGO",
                },
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_FLAT",
                  discountValue: 150,
                },
              },
              oneBenefit: {
                logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
              },
            },
            otherOffersInfo: [
              {
                header: "ADDITIONAL OFFERS",
                type: "CASHBACK",
                title: "10%*",
                description: "Up to 15% off with bank offers",
                logoContext: {
                  logo: "MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_",
                },
                tnc: [
                  "Valid only on Swiggy HDFC Bank Credit Card",
                  "Applicable on a minimum net transaction value of ₹100",
                  "Monthly cashback limit of ₹1500 on Swiggy spends",
                  "Cashback will be processed in the next statement cycle",
                  "Other T&Cs may apply",
                ],
                coupon: {},
                adjoiningSubtext: "Above ₹100",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 10,
                },
              },
            ],
            infos: [
              {
                description: "Up to 10% off with bank offers",
                discountInfo: {
                  discountType: "DISCOUNT_TYPE_PERCENTAGE",
                  discountValue: 15,
                },
              },
            ],
            offerCount: 1,
          },
          isPaymentAccepted: true,
          mediaStyle: {
            aspectRatio: 1.7778,
          },
          vendorHighlights: [
            {
              logo: {
                logo: "dineout/rx-card/highlights/book.png",
              },
              title: "Table booking",
              style: {
                textColour: "text_color_med_emphasis",
                bgColour: "background_button_tertiary_low",
              },
            },
          ],
          offerInfoV3: {
            offerLogo: {
              logo: "dineout/rx-card/OFFER.png",
            },
            vendorOffer: {
              title: "Flat 10% off",
              subtitle: "on pre-booking",
              subtext: "+ 1 more",
              style: {
                textColour: "text_color_highest_emphasis_inverse",
                bgColour: "positive",
              },
            },
            couponOffer: {
              title: "Get extra 10% off using WELCOME",
              style: {
                textColour: "primary_accent",
              },
            },
          },
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/caravan-ice-cream-cafe-kakkanad-kochi-841461/dineout",
          text: "DINERSONE_REST_DETAIL",
          type: "WEBLINK",
        },
      },
    ],
  },
};

const RestaurantCard = (props) => {
  //   console.log(props.resData.info);
  const { name, cuisines, rating, locality, costForTwo } = props.resData
    ?.info ?? {
    name: "name",
    cuisines: [],
    rating: "Ratings Not Found",
    locality: "LocationInfo not found",
    costForTwo: "Cost info not found",
  };
  // console.log(locationInfo.distanceString);

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tft4169GXVNh_EVNGeciNJWOVVGTZy7_5A&s"
        alt="Restaurant Logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating.value} stars</h4>
      <h4>{locality}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={ResObj.data.restaurants[1]} />
        {ResObj.data.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
    </div>
  );
};
const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(<AppLayout />);
