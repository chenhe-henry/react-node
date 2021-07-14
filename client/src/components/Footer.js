import React from "react";

import "../assets/Footer.scss";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <footer className="section-footer">
        <div className="section-footer--secondary">
          <div className="section-footer--secondary--info">
            <div className="section-footer--secondary--info-title">
              <strong>States</strong>
            </div>
            <div className="section-footer--secondary--info-link">NSW</div>
            <div className="section-footer--secondary--info-link">Victoria</div>
            <div className="section-footer--secondary--info-link">
              Queensland
            </div>
            <div className="section-footer--secondary--info-link">
              Western Australia
            </div>
            <div className="section-footer--secondary--info-link">
              South Australia
            </div>
            <div className="section-footer--secondary--info-link">Tasmania</div>
            <div className="section-footer--secondary--info-link">ACT</div>
            <div className="section-footer--secondary--info-link">
              Northern Territory
            </div>
          </div>
          <div className="section-footer--secondary--info">
            <div className="section-footer--secondary--info-title">
              <strong>Capital Cities</strong>
            </div>
            <div className="section-footer--secondary--info-link">
              Sydney real estate
            </div>
            <div className="section-footer--secondary--info-link">
              Melbourne real estate
            </div>
            <div className="section-footer--secondary--info-link">
              Brisbane real estate
            </div>
            <div className="section-footer--secondary--info-link">
              Perth real estate
            </div>
            <div className="section-footer--secondary--info-link">
              Adelaide real estate
            </div>
            <div className="section-footer--secondary--info-link">
              Hobart real estate
            </div>
            <div className="section-footer--secondary--info-link">
              Canberra real estate
            </div>
            <div className="section-footer--secondary--info-link">
              Darwin real estate
            </div>
          </div>
          <div className="section-footer--secondary--info">
            <div className="section-footer--secondary--info-title">
              <strong>Capital Cities - Rentals</strong>
            </div>
            <div className="section-footer--secondary--info-link">
              Sydney rental properties
            </div>
            <div className="section-footer--secondary--info-link">
              Melbourne rental properties
            </div>
            <div className="section-footer--secondary--info-link">
              Brisbane rental properties
            </div>
            <div className="section-footer--secondary--info-link">
              Perth rental properties
            </div>
            <div className="section-footer--secondary--info-link">
              Adelaide rental properties
            </div>
            <div className="section-footer--secondary--info-link">
              Hobart rental properties
            </div>
            <div className="section-footer--secondary--info-link">
              Canberra rental properties
            </div>
            <div className="section-footer--secondary--info-link">
              Darwin rental properties
            </div>
          </div>
          <div className="section-footer--secondary--info">
            <div className="section-footer--secondary--info-title">
              <strong>Popular Areas</strong>
            </div>
            <div className="section-footer--secondary--info-link">
              Eastern Suburbs Sydney
            </div>
            <div className="section-footer--secondary--info-link">
              Inner West Sydney
            </div>
            <div className="section-footer--secondary--info-link">
              Lower North Shore
            </div>
            <div className="section-footer--secondary--info-link">
              East Melbourne
            </div>
            <div className="section-footer--secondary--info-link">
              Bayside Melbourne
            </div>
            <div className="section-footer--secondary--info-link">
              Sydney City
            </div>
            <div className="section-footer--secondary--info-link">
              Inner City Melbourne
            </div>
            <div className="section-footer--secondary--info-link">
              Upper North Shore
            </div>
          </div>
        </div>
        <div className="section-footer--primary">
          <div className="section-footer--primary--navi">
            <div className="section-footer--primary--navi-link">
              <strong>&copy; 2020 Henry He, All Right Reserved.</strong>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
