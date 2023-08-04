import React from "react";
import news from "../images/image1.png"
import weather from "../images/image2.png"
import food from "../images/image3.png"


export default function Work() {
    return(
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">View My Work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div className="portfolio">
                <a href="https://github.com/pakhi77/News-App" className="portfolio__item" target="_blank">
                    <img src={news}  alt="" className="portfolio__img"/>
                </a>

                <a href="https://github.com/pakhi77/Food-Order-Website" className="portfolio__item" target="_blank">
                    <img src={food}  alt="" className="portfolio__img"/>
                </a>

                <a href="https://github.com/pakhi77/Weather-App" className="portfolio__item" target="_blank">
                    <img src={weather}  alt="" className="portfolio__img"/>
                </a>
            </div>
        </section>
    )
}