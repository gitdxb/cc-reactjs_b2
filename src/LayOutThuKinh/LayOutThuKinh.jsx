import React, { Component } from "react";

export default class LayOutThuKinh extends Component {
  render() {
    return (
      <div className="myContainer">
        <nav className="navbar navbar-light justify-content-center">
        <span className="mb-0 h1 myTitle">TRY GLASSES APP ONLINE</span>
        </nav>
        <div className="row">
            <div className="col-6">
                <img className="img-fluid" src="./img/glassesImage/model.jpg" alt="" />
            </div>
            <div className="col-6">
                <img className="img-fluid" src="./img/glassesImage/model.jpg" alt="" />
            </div>
        </div>
        <div className="row" id="glassesList">
            <div className="col-4">
                <img style={{cursor: 'pointer'}} onclick="glassesOn('G1')" className="myItem img-fluid" src="./img/glassesImage/g1.jpg" alt=""/>
            </div>
            <div className="col-4">
                <img style={{cursor: 'pointer'}} onclick="glassesOn('G2')" className="myItem img-fluid" src="./img/glassesImage/g2.jpg" alt=""/>
            </div>
            <div className="col-4">
                <img style={{cursor: 'pointer'}} onclick="glassesOn('G3')" className="myItem img-fluid" src="./img/glassesImage/g3.jpg" alt=""/>
            </div>
            <div className="col-4">
                <img style={{cursor: 'pointer'}} onclick="glassesOn('G4')" className="myItem img-fluid" src="./img/glassesImage/g4.jpg" alt=""/>
            </div>
            <div className="col-4">
                <img style={{cursor: 'pointer'}} onclick="glassesOn('G5')" className="myItem img-fluid" src="./img/glassesImage/g5.jpg" alt=""/>
            </div>
            <div className="col-4">
                <img style={{cursor: 'pointer'}} onclick="glassesOn('G6')" className="myItem img-fluid" src="./img/glassesImage/g6.jpg" alt=""/>
            </div>
            <div className="col-4">
                <img style={{cursor: 'pointer'}} onclick="glassesOn('G7')" className="myItem img-fluid" src="./img/glassesImage/g7.jpg" alt=""/>
            </div>
            <div className="col-4">
                <img style={{cursor: 'pointer'}} onclick="glassesOn('G8')" className="myItem img-fluid" src="./img/glassesImage/g8.jpg" alt />
            </div>
            <div className="col-4">
                <img style={{cursor: 'pointer'}} onclick="glassesOn('G9')" className="myItem img-fluid" src="./img/glassesImage/g9.jpg" alt=""/>
            </div>
            </div>

      </div>
    );
  }
}
