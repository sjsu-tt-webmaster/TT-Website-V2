import React from 'react';

const TimelineEvent = ({ date, title, description }) => (
  <div className="flex flex-col md:flex-row items-center md:items-start text-left mb-8">
    <div className="flex flex-col items-center mr-4 mb-4 md:mb-0">
      <div className="w-1 h-full bg-blue-500 hidden md:block"></div>
      <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
    </div>
    <div className="md:w-1/2 px-4">
      <p className="text-sm font-semibold text-blue-300">{date}</p>
      <h4 className="text-lg font-bold mb-2 text-white">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const About = function About() {
  const timelineEvents = [
    {
      date: "Spring 2018",
      title: "Inception",
      description: "Mark Muendelein meets brothers from Epsilon Delta Chapter of Theta Tau at UCSD."
    },
    {
      date: "Fall 2018",
      title: "Chapter Formation",
      description: "Muendelein enlists friends, peers, colleagues, and mentors to begin a chapter at SJSU."
    },
    {
      date: "Spring 2022",
      title: "Omega Epsilon Chapter",
      description: "Theta Tau's Omega Epsilon Chapter thrives at San Jose State University."
    }
  ];

  return (
    <div className="mt-4 text-center font-light max-w-4xl mx-auto px-4 text-white">
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
        <ul className="text-gray-300 list-inside list-disc mx-auto text-center">
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
  );
};

export default About;