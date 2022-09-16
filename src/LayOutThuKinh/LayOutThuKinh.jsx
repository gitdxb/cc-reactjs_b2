import React, { Component } from "react";

export default class LayOutThuKinh extends Component {

    dataGlasses = [
        { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
        { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
        { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
        { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
        { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
        { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
        { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
    ]

    renderGlasses = () => {
        let content = ``;
        dataGlasses.map((eachPair) => {
            content += `
                <div class="col-4">
                    <img style="cursor: pointer;" onclick="glassesOn('${eachPair.id}')" class="img-fluid" src="${eachPair.src}" alt="">
                </div>
            `;
        });
        document.querySelector("#glassesList").innerHTML = content
    }
    renderGlasses()

    render() {
        return (
        <div className="myContainer">
            <nav className="navbar navbar-light justify-content-center">
            <span className="mb-0 h1 myTitle">TRY GLASSES APP ONLINE</span>
            </nav>
            <div className="row">
                <div className="col-6">
                    <img className="leftIMG img-fluid" src="./img/glassesImage/model.jpg" alt="" />
                </div>
                <div className="col-6">
                    <img className="rightIMG img-fluid" src="./img/glassesImage/model.jpg" alt="" />
                </div>
            </div>
            <div className="container glassesWrap">
                <div className="row" id="glassesList">
                    {this.renderGlasses()}
                </div>
            </div>
        </div>
        );
    }
}
