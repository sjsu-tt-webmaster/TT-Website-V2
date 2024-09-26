import React from "react";

const TimelineEvent = ({ date, title, description }) => (
  <div className="mb-8 flex flex-col items-center text-left md:flex-row md:items-start">
    <div className="mb-4 mr-4 flex flex-col items-center md:mb-0">
      <div className="bg-rose-800 hidden h-full w-1 md:block"></div>
      <div className="bg-rose-800 h-6 w-6 rounded-full border-2 border-white"></div>
    </div>
    <div className="px-4 md:w-1/2">
      <p className="text-sm font-semibold text-white">{date}</p>
      <h4 className="mb-2 text-lg font-bold text-white">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const About = function About() {
  const timelineEvents = [
    {
      date: "Spring 2018",
      title: "Inception",
      description: "Mark Muendelein meets brothers from Epsilon Delta Chapter of Theta Tau at UCSD.",
    },
    {
      date: "Fall 2018",
      title: "Chapter Formation",
      description: "Muendelein enlists friends, peers, colleagues, and mentors to begin a chapter at SJSU.",
    },
    {
      date: "December 2022",
      title: "Omega Epsilon Chapter",
      description:
        "At end of spring 2022, under Kaye Eloise Difuntorum as Regent, petition for Chapter Status was submitted to Nationals. The petition was approved later that summer and the Installation Ceremony took place on December 3rd, 2022, where the body became known as the Omega Epsilon Chapter of Theta Tau.",
    },
  ];

  return (
    <div className="mx-auto mt-4 max-w-4xl px-4 text-center font-light text-white">
      <div className="font-bold">WHO WE ARE ... add some images like a carousel?</div>

      <div>
        <br />
        Founded in 1904 at the University of Minnesota in Minneapolis as the Society of Hammer and Tongs by four
        engineering students, Theta Tau is the oldest, largest, and foremost Fraternity for Engineers. Today, Theta Tau
        proudly has a diverse membership of men and women studying engineering and computer science at more than 80
        campuses across the US.
      </div>
      <div>
        <br />
        <div className="font-bold">OMEGA EPSILON CHAPTER HISTORY</div>
        <br />
        <div className="mx-auto">
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} {...event} />
          ))}
        </div>
        <br />
        Omega Epsilon is part of the Western Region of Theta Tau.
      </div>

      <div>
        <br />
        <div className="font-bold">NATIONAL HISTORY</div>
        <br />

        <br />
        <br />
        <div className="pb-16">
          <ul className="mx-auto list-inside list-disc text-center text-gray-300">
            <li>Chi Chapter (University of Arizona)</li>
            <li>Delta Gamma Chapter (Arizona State University)</li>
            <li>Epsilon Chapter (University of California, Berkeley)</li>
            <li>Epsilon Delta Chapter (University of California, San Diego)</li>
            <li>Kappa Epsilon Chapter (University of Southern California)</li>
            <li>Lambda Delta Chapter (University of the Pacific)</li>
            <li>Lambda Epsilon Chapter (University of San Diego)</li>
            <li>Mu Delta Chapter (University of California, Merced)</li>
            <li>Omicron Epsilon Chapter (Northern Arizona University)</li>
            <li>Omicron Gamma Chapter (University of California, Davis)</li>
            <li>Phi Epsilon (California State University, Fullerton)</li>
            <li>Rho Delta Chapter (University of Nevada, Reno)</li>
            <li>Sigma Delta Chapter (University of California, Riverside)</li>
            <li>Sigma Epsilon Chapter (University of California, Santa Barbara)</li>
            <li>Upsilon Delta Chapter (University of California, Los Angeles)</li>
            <li>Upsilon Epsilon (Santa Clara University)</li>
            <li>Xi Epsilon Chapter (California State University, Long Beach)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
