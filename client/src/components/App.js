import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../assets/App.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import Filter from "./Filter";
import Results from "./Results";
import FullResult from "./FullResult";

const Dashboard = () => <h1>Coming Soon...</h1>;
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="all">
            <Header />
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/filter" component={Filter}></Route>
            <Route exact path="/results" component={Results}></Route>
            <Route exact path="/fullresult/:id" component={FullResult}></Route>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
