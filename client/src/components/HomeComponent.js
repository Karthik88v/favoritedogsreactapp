import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const HomeComponent = () => {
    const [fetchUrls, setFetchUrls] = useState(true);
    const [picsUrl, setPicsUrl] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (fetchUrls){
            async function fetchData() {
                await loadRandomUrls();
            }
            fetchData();
            setFetchUrls(false);
        }
    }, [fetchUrls]);

    const loadRandomUrls = async () => {
        const response = await fetch('/api/random/urls');
        const randomUrls = await response.json();
        setPicsUrl(randomUrls); // setting the urls list
        setFetchUrls(false);
    };

    const addToFavorite = (event, item) => {
        event.preventDefault();
        let favorites = [];
        favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(item);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        event.target.classList.add('icon-favorite-color');
        setTimeout(() => event.target.classList.remove('icon-favorite-color'), 1000)
    };

    return (
        <div>
            <div className="header-container">
                <span className="header-container-left">
                    <h1>Random Dog Pictures</h1>
                </span>
                <span className="header-container-right">
                    <button className="float-right margin-left" onClick={loadRandomUrls}>Next</button>
                    <button className="float-right" onClick={() => navigate("/favorites")} >View Favorites</button>
                </span>
            </div>
            <div>
                {picsUrl.map((item, i) => {
                    return (
                        <div className="container">
                            <img src={item} alt={item} height="300" width="300" style={{"margin":"10px"}} className="image" />
                            <a href="#" className="icon" onClick={event => {addToFavorite(event, item)}} title="Add to favorite">
                                <i className="fa fa-star"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default HomeComponent;