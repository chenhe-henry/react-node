import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BackGroundVideo from "./BackGroundVideo";

import "../assets/Header.scss";

class Header extends React.Component {
  state = {};
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google" className="login-white">
            Log in
          </a>
        );
      default:
        return (
          <div>
            <div>{this.props.auth.googleId}</div>
            <a href="/api/logout" className="login-white">
              Logout
            </a>
          </div>
        );
    }
  }
  render() {
    return (
      <div className="section-header">
        <BackGroundVideo />
        <div className="section-header-container">
          <div className="section-header-container-brand">
            <Link to="/" className="section-header-container-brand-link">
              <img
                src="/findhome-logo_transparent.png"
                height="100px"
                width="100px"
                className="section-header-container-brand-link-img"
              ></img>
              <p className="section-header-container-brand-link-text">
                Find Home
              </p>
            </Link>
          </div>
          <div className="section-header-container-nav">
            <div className="section-header-container-nav-link">
              <Link to="/filter" className="filter">
                Find a Property
              </Link>
            </div>
            <div className="section-header-container-nav-link">News</div>
            <div className="section-header-container-nav-link login">
              {this.renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
