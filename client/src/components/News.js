import React from "react";
import "../assets/News.scss";
import MaterialTable from "material-table";

class News extends React.Component {
  state = {
    Sydney: [],
    Melbourne: [],
    Brisbane: [],
    Adelaide: [],
    Canberra: [],
  };

  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-Api-Key", "key_358bea2380f4e7f0acb999de88b0b4e9");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.domain.com.au/v1/salesResults/Sydney", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ Sydney: result });
      })
      .catch((error) => console.log("error", error));
    fetch("https://api.domain.com.au/v1/salesResults/Melbourne", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ Melbourne: result });
      })
      .catch((error) => console.log("error", error));
    fetch("https://api.domain.com.au/v1/salesResults/Brisbane", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ Brisbane: result });
      })
      .catch((error) => console.log("error", error));
    fetch("https://api.domain.com.au/v1/salesResults/Adelaide", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ Adelaide: result });
      })
      .catch((error) => console.log("error", error));
    fetch("https://api.domain.com.au/v1/salesResults/Canberra", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ Canberra: result });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div className="newsResult">
        <div
          style={
            ({ maxWidth: "100%" }, { fontSize: "100px" }, { fontWeight: "800" })
          }
        >
          <MaterialTable
            options={{ exportButton: true }}
            columns={[
              { title: "City", field: "city" },
              {
                title: "Number Listed For Auction",
                field: "numberListedForAuction",
              },
              { title: "Number Sold", field: "numberSold", type: "numeric" },
              {
                title: "ClearanceRate",
                field: "clearanceRate",
              },
            ]}
            data={[
              {
                city: "Sydney",
                numberListedForAuction: `${this.state.Sydney.numberListedForAuction}`,
                numberSold: `${this.state.Sydney.numberSold}`,
                clearanceRate: `${
                  Math.floor(this.state.Sydney.adjClearanceRate * 100) + "%"
                } `,
              },
              {
                city: "Melbourne",
                numberListedForAuction: `${this.state.Melbourne.numberListedForAuction}`,
                numberSold: `${this.state.Melbourne.numberSold}`,
                clearanceRate: `${
                  Math.floor(this.state.Melbourne.adjClearanceRate * 100) + "%"
                }`,
              },
              {
                city: "Brisbane",
                numberListedForAuction: `${this.state.Brisbane.numberListedForAuction}`,
                numberSold: `${this.state.Brisbane.numberSold}`,
                clearanceRate: `${
                  Math.floor(this.state.Brisbane.adjClearanceRate * 100) + "%"
                }`,
              },
              {
                city: "Adelaide",
                numberListedForAuction: `${this.state.Adelaide.numberListedForAuction}`,
                numberSold: `${this.state.Adelaide.numberSold}`,
                clearanceRate: `${
                  Math.floor(this.state.Adelaide.adjClearanceRate * 100) + "%"
                }`,
              },
              {
                city: "Canberra",
                numberListedForAuction: `${this.state.Canberra.numberListedForAuction}`,
                numberSold: `${this.state.Canberra.numberSold}`,
                clearanceRate: `${
                  Math.floor(this.state.Canberra.adjClearanceRate * 100) + "%"
                }`,
              },
            ]}
            title="Sales Report"
          />
        </div>
      </div>
    );
  }
}

export default News;
