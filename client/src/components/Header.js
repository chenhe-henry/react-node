import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
          <a href="/api/logout" className="login-white">
            Logout
          </a>
        );
    }
  }
  render() {
    return (
      <div className="banner">
        <div className="banner-container">
          <div className="banner-container-brand">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="banner-container-brand-link"
            >
              Find Home
            </Link>
          </div>
          <div className="banner-container-nav">
            <div className="banner-container-nav-link">Find a Property</div>
            <div className="banner-container-nav-link">Research</div>
            <div className="banner-container-nav-link">Find Agents</div>
            <div className="banner-container-nav-link">For Owners</div>
            <div className="banner-container-nav-link">Home Loans</div>
            <div className="banner-container-nav-link">Insurance</div>
            <div className="banner-container-nav-link">News</div>
            <div className="banner-container-nav-link">Commercial</div>
            <div className="banner-container-nav-link login">
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
