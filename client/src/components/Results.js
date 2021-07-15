import React from "react";
import { Link } from "react-router-dom";
import "../assets/Results.scss";
const Results = (props) => {
  const imgurlindex = Math.floor(Math.random() * 5);
  const noImageURL = "noImage.png";
  return (
    <div className="result">
      <Link
        to={{
          pathname: "/fullresult/" + props.list.id,
          state: { id: props.list.id },
        }}
        className="result-link"
      >
        <div onClick={props.clicked} className="all_result">
          <div className="property__primary">
            <div className="property__primary-text">
              <div>
                <strong>{props.list.headline}</strong>
              </div>
              <div>
                <i className="fas fa-bed icon"></i> Bedrooms:{" "}
                {props.list.propertyDetails.bedrooms}
              </div>
              <div>
                <i className="fas fa-bath icon"></i> Bathrooms:
                {props.list.propertyDetails.bathrooms}
              </div>
              <div>
                <i className="fas fa-car icon"></i> Carspaces:{" "}
                {props.list.propertyDetails.carspaces}
              </div>
              <div>
                Address: {props.list.propertyDetails.displayableAddress},{" "}
                {props.list.propertyDetails.postcode},{" "}
                {props.list.propertyDetails.state}
              </div>
              <div>Price guide: {props.list.priceDetails.displayPrice}</div>
            </div>

            <img
              src={props.img[imgurlindex].url}
              height="300px"
              width="400px"
              alt="property-img"
              className="property-img"
            />
          </div>
          <div className="contact__primary">
            <h1>Contact:</h1>
            <div>{props.list.advertiser.name}</div>
            <div className="contact">
              {props.list.advertiser.contacts.map((c, index) => (
                <div className="comb" key={index}>
                  <div>{c.name}</div>
                  <div className="contact-wrapper">
                    <img
                      src={c.photoUrl}
                      height="300px"
                      width="300px"
                      alt={noImageURL}
                      className="contact-wrapper-pic"
                    ></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Results;
