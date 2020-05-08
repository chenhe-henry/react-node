import React from "react";
import "../assets/List.scss";
import BackGroundVideo from "./BackGroundVideo";
import { Link } from "react-router-dom";
class List extends React.Component {
  state = {};
  render() {
    return (
      <div className="section-list">
        <div className="section-list__item">
          <Link to="/filter" className="word-link">
            <div className="section-list__item-detail">
              <p className="word">Find a property</p>
            </div>
          </Link>
          <Link to="/news" className="word-link">
            <div className="section-list__item-detail">
              <p className="word">News</p>
            </div>
          </Link>
        </div>
        <BackGroundVideo />
      </div>
    );
  }
}

export default List;
