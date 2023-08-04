import React from "react";
import profile from "../images/port-profile-long.jpg"

export default function About() {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">I am a</h2>
            <p className="section__subtitle section__subtitle--about">Frontend Developer</p>

            <div className="about-me__body">
                <p>As an enthusiastic and self-motivated individual, I bring a strong sense of reliability, responsibility, and dedication to my work. My commitment to excellence allows me to excel as a team player and adapt swiftly to challenging situations. I take pride in my ability to collaborate effectively within a team while also demonstrating initiative when working independently. I thrive under pressure, remaining focused and composed, and I have a proven track record of delivering results even within strict deadlines.
                </p>
                <p>By combining my skills in frontend development with my problem-solving abilities in data structures and algorithms, I can deliver seamless user experiences and elegant solutions to complex programming challenges.
                </p>
            </div>

            <img src={profile} alt="" className="about-me__img"/>
        </section>
    )
}
