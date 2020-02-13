import React from "react";
import "../assets/List.scss";
class List extends React.Component {
  state = {};
  render() {
    return (
      <div className="list">
        <div className="list__title">While you are here</div>
        <div className="list__item">
          <div className="list__item-detail">
            <p>Search property as you wish</p>
          </div>
          <div className="list__item-detail">
            <p>See what your property may be worth</p>
          </div>
          <div className="list__item-detail">
            <p>Looking to sell?</p>
          </div>
          <div className="list__item-detail">
            <p>Insure your property</p>
          </div>
          <div className="list__item-detail">
            <p>See auction results</p>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
