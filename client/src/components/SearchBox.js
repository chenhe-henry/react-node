import React from "react";
import "../assets/SearchBox.scss";

class SearchBox extends React.Component {
  state = {};
  render() {
    return (
      <div className="section-search">
        <div className="section-search__title">
          Search Australia's home of property
        </div>
        <div className="section-search__box">
          <div className="section-search__box--nav">Buy</div>
          <div className="section-search__box--nav">Rent</div>
          <div className="section-search__box--nav">New Homes</div>
          <div className="section-search__box--nav">Sold</div>
          <div className="section-search__box--nav">Rural</div>
          <br />
          <input
            className="section-search__box--input"
            type="text"
            value="Try a location or school you want to live by"
          ></input>

          <div className="section-search__box--btn">Search</div>
          <div className="section-search__box--recent">
            <div className="section-search__box--recent-title">
              Recent Searches &darr;
            </div>
            <div className="section-search__box--recent-detail">
              <div className="section-search__box--recent-detail-result">
                DeeWhy
              </div>
              <div className="section-search__box--recent-detail-result">
                DeeWhy
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;
