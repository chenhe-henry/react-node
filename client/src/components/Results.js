import React from "react";

const Results = props => {
  const summary = props.list.summaryDescription.split("<b></b><br />");
  const imgurlindex = Math.floor(Math.random() * 5);
  return (
    <div>
      <div>
        <div>{props.list.id}</div>
        <div>Property Description: {summary}</div>
        <div>Address: {props.list.propertyDetails.displayableAddress}</div>
        <div>Postcode: {props.list.propertyDetails.postcode}</div>
        <div>Region: {props.list.propertyDetails.region}</div>
        <div>{props.list.headline}</div>
        <div>Price guide: {props.list.priceDetails.displayPrice}</div>
        <div>
          <img
            src={props.img[imgurlindex].url}
            height="500px"
            width="500px"
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
              <img
                src={c.photoUrl}
                height="300px"
                width="300px"
                alt={c.name}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
