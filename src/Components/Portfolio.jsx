/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfoliopicture.jpg";

const imageAltText = "visualizations in the computer screen";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Mastering NLP: A Hands-on Journey with Large Language Models",
    description:
      "A Medium article that explains the basics of NLP and how to use large language models to generate text.",
    url: "https://medium.com/@the.datascientist/mastering-nlp-a-hands-on-journey-with-large-language-models-8e30239456af",
  },
  {
    title: "Data Analytics Capstone Project",
    description:
      "A project that uses data analytics to analyze the data of a company and provide insights to the company.",
    url: "https://github.com/AbdulQadeer-55/Data-Analytics-Capstone-Project",
  },
  {
    title: "Prediction of Corporate Bankruptcy",
    description:
      "A project that uses machine learning to predict the bankruptcy of a company.",
    url: "https://github.com/AbdulQadeer-55/Prediction-of-Corporate-Bankruptcy/tree/TeamA",
  },
  {
    title: "Analysis of Bank Debit Collections",
    description:
      "A project that uses data analytics to analyze the data of a bank and provide insights to the bank.",
    url: "https://github.com/AbdulQadeer-55/Analysis-of-Bank-Debit-Collections",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
