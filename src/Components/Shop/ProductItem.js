import React from "react";
import { useNavigate } from "react-router";


export function ProductItem({
  id,
  name,
  price,
  src,
  city,
  year,
  alt,
  stars
}) {
  let navigate = useNavigate();

  const toBook = (id)=>{
    localStorage.setItem('selected',id);
    navigate('/Hotelt')
  }

  return (
    <div className="shop-Hoteld shop-text-center" key={id}>
      <img src={src} alt={alt} className="shop-Hoteld-img" />
      <div className="Hotel-data">
        <div>
        <p className="shop-Hoteld-label">
          {name}
        </p>
        </div>
        <div><p> {year}</p></div>
        <div><p> {stars}</p></div>
        <div><p> {city}</p></div>
        <p className="shop-Hoteld-price"> Price: JOD {price}</p>
        <button
          id={id}
          type="submit"
          className="shop-Hoteld-btn"
          onClick={() => toBook(id)}
        >
          View deal
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
