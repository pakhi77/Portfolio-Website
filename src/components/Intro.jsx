import React from "react";
import dp from "../images/port-profile.jpg"

export default function Intro() {
    return(
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Pakhi Rao</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Frontend Developer</p>
            <img src={dp} alt="My profile photo" className="intro__img"/>
        </section>
    )
}
