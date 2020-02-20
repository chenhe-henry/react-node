import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div>
    <strong>{text}</strong>
  </div>
);

const SimpleMap = props => {
  const center = {
    lat: props.latAdd,
    lng: props.lngAdd
  };
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    let marker = new maps.Marker({
      position: center,
      map,
      title: "Hello World!"
    });
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={""}
        defaultCenter={center}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {/* <AnyReactComponent
          lat={props.latAdd}
          lng={props.lngAdd}
          text="Address"
        /> */}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
