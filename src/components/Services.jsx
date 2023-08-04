import React from "react";

export default function Services() {
    return(
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services" >
                <div className="service">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As a passionate programmer, I dedicate a significant portion of my time to honing my skills in data structures and algorithms. My enthusiasm for problem-solving has led me to actively engage in solving LeetCode questions regularly. By tackling these challenges, I continuously improve my problem-solving abilities, algorithmic thinking, and coding proficiency.</p>
                </div>
                <div className="service">
                    <h3>Frontend Development</h3>
                    <p> My love for crafting visually appealing and user-friendly interfaces drives me to explore the latest trends and technologies in web development. Over the years, I have gained knowledge in HTML, CSS, and JavaScript, allowing me to bring ideas to life through intuitive and responsive websites. </p>
                </div>
            </div>

            <a href="#work" className="btn">My Work</a>
        </section>
    )
}