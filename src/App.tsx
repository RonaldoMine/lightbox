import React from 'react';
import food1 from "./assets/images/food1.jpg";
import food2 from "./assets/images/food2.jpg";
import food3 from "./assets/images/food3.jpg";
import food4 from "./assets/images/food4.jpg";
import food5 from "./assets/images/food5.jpg";
import food6 from "./assets/images/food6.jpg";
import food7 from "./assets/images/food7.jpg";
import food8 from "./assets/images/food8.jpg";
import food9 from "./assets/images/food9.jpg";
import food10 from "./assets/images/food10.jpg";
import LightBox from "./components/LightBox";


function App() {
    const images = [
        {
            title: "Food 1",
            img: food1
        }, {
            title: "Food 2",
            img: food2
        }, {
            title: "Food 3",
            img: food3
        }, {
            title: "Food 4",
            img: food4
        }, {
            title: "Food 5",
            img: food5
        }, {
            title: "Food 6",
            img: food6
        }, {
            title: "Food 7",
            img: food7
        }, {
            title: "Food 8",
            img: food8
        }, {
            title: "Food 9",
            img: food9
        }, {
            title: "Food 10",
            img: food10
        }
    ]
    return (
        <>
            <LightBox showMiniuature={true} images={images}/>
        </>
    );
}

export default App;
