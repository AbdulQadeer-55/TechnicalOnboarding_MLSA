/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background.webp";

const imageAltText = "data science network";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Computer Science student studying at SZABIST. I enjoy creating unique and simplistic visualizations in creative ways with building and deploying models to cloud or on local machines.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python/Javascript/Java/Julia",
  "Tensorflow/Keras/PyTorch",
  "Scikit-Learn",
  "Numpy/Pandas",
  "Matplotlib/Seaborn/Plotly",
  "Power BI and Salesforce Tableau",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "AWS and Azure Cloud",
  "Git/GitHub",
  "Docker",
  "Kubernetes",
  "Django/Flask/Streamlit/Gradio/Heroku",
  "Data Visualization",
  "Data Analysis",
  "Data Science",
  "Data Warehousing",
  "Data Modeling",
  "Data Analytics",
  "Data Structures and Algorithms",
  "SQL",
  "MySQL",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a Data Scientist and Machine Learning Engineer. I am passionate about Data Science and Machine Learning. I am a quick learner and a team player. I am always ready to learn new technologies and implement them in my projects. I am a hardworking and dedicated person. I am always ready to face challenges and get along with people very well. I believe in vision and action. I learn from my mistakes. I am a self-motivated person and I believe in \"Do your best and leave the rest\".";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
