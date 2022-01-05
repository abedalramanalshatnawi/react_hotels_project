import React, { useState } from "react";
import "./Shop.css";
import ProductItem from "./ProductItem";
import Hotels from "./Hotels.json";
import { Link } from "react-router-dom";

export function Shop() {
  const [HotelArray, setHotelArray] = useState(Hotels);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [value, setValue] = useState("");

  const categoryHandle = (category) => {
    switch (category) {
      case "Mercedes":
        setHotelArray(Hotels.filter((Hotel) => Hotel.name === "Mercedes"));
        setSelectedCategory("Mercedes");
        break;
      case "Audi":
        setHotelArray(Hotels.filter((Hotel) => Hotel.name === "Audi"));
        setSelectedCategory("Audi");
        break;
      case "Toyota":
        setHotelArray(Hotels.filter((Hotel) => Hotel.name === "Toyota"));
        setSelectedCategory("Toyota");
        break;
      case "Mitsubishi":
        setHotelArray(Hotels.filter((Hotel) => Hotel.name === "Mitsubishi"));
        setSelectedCategory("Mitsubishi");
        break;
      case "Fiat":
        setHotelArray(Hotels.filter((Hotel) => Hotel.name === "Fiat"));
        setSelectedCategory("Fiat");
        break;
      default:
        setHotelArray(Hotels);
        setSelectedCategory("");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    switch (e.target.value) {
      case "Low price":
        setHotelArray(
          HotelArray.sort((firstHotel, nextHotel) =>
            firstHotel.price > nextHotel.price ? 1 : -1
          )
        );
        break;
      case "High price":
        setHotelArray(
          HotelArray.sort((firstHotel, nextHotel) =>
            nextHotel.price > firstHotel.price ? 1 : -1
          )
        );

        break;

      default:
        setHotelArray(HotelArray);
        break;
    }
  };
  return (
    <>
      <div className="hero-gallery">
        <h1>Gallery</h1>
      </div>
      <div className="shop-container">
        <div className="Hotel-gallery">
         
          {HotelArray.map((Hotel) => {
            return (
              <ProductItem
                key={Hotel.id}
                id={Hotel.id}
                name={Hotel.name}
                price={Hotel.price}
                src={Hotel.img}
                city={Hotel.city}
                stars={Hotel.stars}
                year={Hotel.year}
               
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Shop;
