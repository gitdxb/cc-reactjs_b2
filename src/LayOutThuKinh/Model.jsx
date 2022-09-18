import React, { Component } from "react";

export default class Model extends Component {
  render() {
    return (
      <div className="col-6">
        <div className="vglasses__card">
          <div className="vglasses__model" id="avatar">
              <img className="leftIMG img-fluid" src="./glassesImage/model.jpg" alt="" />
          </div>
          <div id="glassesInfo" className="vglasses__info"></div>
        </div>
      </div>
    );
  }
}
