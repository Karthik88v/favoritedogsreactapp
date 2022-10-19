import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const FavoritesComponent = () => {
    let favoritePicsUrl = localStorage.getItem("favorites");
    if(favoritePicsUrl === null) {
        favoritePicsUrl = [];
    }
    const [picsUrl, setPicsUrl] = useState(JSON.parse(favoritePicsUrl));
    const navigate = useNavigate();

    return (
        <div>
            <div className="header-container">
                <span className="header-container-left">
                    <h1>Favorite Dog Pictures</h1>
                </span>
                <span className="header-container-right">
                    <button className="float-right" onClick={() => navigate("/")}>Home</button>
                </span>
            </div>
            <div>
                {picsUrl.map((item, i) => {
                    return (
                        <div className="container">
                            <img src={item} alt={item} height="300" width="300" style={{"margin":"10px"}} className="image" />
                            <a className="icon icon-favorite-color">
                                <i className="fa fa-star"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default FavoritesComponent;