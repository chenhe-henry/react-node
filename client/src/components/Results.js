import React from "react";
import { Link } from "react-router-dom";
import "../assets/Results.scss";
const Results = props => {
  const imgurlindex = Math.floor(Math.random() * 5);
  return (
    <div className="result">
      <Link
        to={{
          pathname: "/fullresult/" + props.list.id,
          state: { id: props.list.id }
        }}
      >
        <div onClick={props.clicked}>
          <div>{props.list.id}</div>
          <div>
            <strong>{props.list.headline}</strong>
          </div>
          <div>Bedrooms: {props.list.propertyDetails.bedrooms}</div>
          <div>Bathrooms: {props.list.propertyDetails.bathrooms}</div>
          <div>Carspaces: {props.list.propertyDetails.carspaces}</div>
          <div>
            Address: {props.list.propertyDetails.displayableAddress},{" "}
            {props.list.propertyDetails.postcode},{" "}
            {props.list.propertyDetails.state}
          </div>
          <div>Price guide: {props.list.priceDetails.displayPrice}</div>
          <div>
            <img
              src={props.img[imgurlindex].url}
              height="300px"
              width="400px"
              alt="property-img"
            />
          </div>
          {/* <div>
            {props.img.map((i, index) => (
              <img
                key={index}
                src={i.url}
                height="300px"
                width="400px"
                alt="pics"
              ></img>
            ))}
          </div> */}
          <h1>Contact:</h1>
          <div>{props.list.advertiser.name}</div>
          <div>
            {props.list.advertiser.contacts.map(c => (
              <div>
                <div>{c.name}</div>
                <div className="contact-wrapper">
                  <img
                    src={c.photoUrl}
                    height="300px"
                    width="300px"
                    alt={c.name}
                    className="contact-wrapper-pic"
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Results;
