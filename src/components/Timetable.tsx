import React from "react";
import "./Timetable.css";

function Timetable() {
  const GenerateNumberOfBlocks = () => {
    return Math.floor(Math.random() * 3 + 1);
  };

  const projects1 = [
    {
      time: "17:00",
      text: "Opening \n Werkschau \n (Audimax)",
    },
    {
      time: "17:00-21:00",
      text: "Ausstellung Games \n Ausstellung \n Kommunikationsdesign",
    },
    {
      time: "17:30",
      text: "Performance \n Audio",
    },
    {
      time: "18:00",
      text: "Screening \n Animation",
    },
    {
      time: "18:30",
      text: "Performance \n Audio",
    },
    {
      time: "19:00",
      text: "Screening Buhle + \n Film Highlights",
    },
    {
      time: "20:00",
      text: "Performance \n Audio",
    },
    {
      time: "20:30",
      text: "Filmscreening oder \n Audio Performance",
    },
  ];

  const projects2 = [
    {
      time: "09:00-10:00",
      text: "Web & Mobile Expo",
    },
    {
      time: "09:00-19:00",
      text: "Ausstellung \n Kommunikationsdesign",
    },
    {
      time: "10:00-12:30",
      text: "Präsentation \n Web BA",
    },
    {
      time: "13:00-13:30",
      text: "Web & Mobile \n Expo",
    },
    {
      time: "13:00-16:00",
      text: "Ausstellung HCI \n Prototypen",
    },
    {
      time: "13:30-17:00",
      text: "Präsentation \n Web MA",
    },
    {
      time: "14:00-21:00",
      text: "Film- und \n Animationsscreenings \n (Audimax)",
    },
    {
      time: "14:00-19:00",
      text: "Ausstellung \n Game",
    },
    {
      time: "20:00-22:30",
      text: "Performance Audio",
    },
  ];

  const projects3 = [
    {
      time: "18:00",
      text: "Audioperformances",
    },
    {
      time: "19:00",
      text: "Filmscreening",
    },
    {
      time: "20:00-22:30",
      text: "Performances Audio",
    },
  ];

  const projectBlocksPR1 = projects1.map(() => ({
    numberLightBlocks: GenerateNumberOfBlocks(),
    numberDarkBlocks: GenerateNumberOfBlocks(),
  }));

  const projectBlocksPR2 = projects2.map(() => ({
    numberLightBlocks: GenerateNumberOfBlocks(),
    numberDarkBlocks: GenerateNumberOfBlocks(),
  }));

  const projectBlocksPR3 = projects3.map(() => ({
    numberLightBlocks: GenerateNumberOfBlocks(),
    numberDarkBlocks: GenerateNumberOfBlocks(),
  }));

  const renderProjects = (
    projects: { time: string; text: string }[],
    blocks: {
      numberLightBlocks: number;
      numberDarkBlocks: number;
    }[],
  ) => {
    return projects.map((project, index) => (
      <div key={index} className="project">
        {Array.from(
          { length: blocks[index].numberLightBlocks },
          (_, i) => (
            <div key={`light-${i}`} className="light-square" />
          ),
        )}

        {Array.from(
          { length: blocks[index].numberDarkBlocks },
          (_, i) => (
            <div key={`dark-${i}`} className="dark-square" />
          ),
        )}

        <div className="project-text">
          <p className="hour">{project.time}</p>

          <p className="description">
            {project.text.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="timetable">
      {/* MONDAY */}
      <div className="projects1">
        {renderProjects(projects1, projectBlocksPR1)}

        <div>
          <p className="weekDayInfo">MONTAG</p>
          <p className="dateInfo">01.JUNI</p>
        </div>
      </div>

      {/* TUESDAY */}
      <div className="projects2">
        {renderProjects(projects2, projectBlocksPR2)}

        <div>
          <p className="weekDayInfoDay2">DIENSTAG</p>
          <p className="dateInfo">02.JUNI</p>
        </div>
      </div>

      {/* WEDNESDAY */}
      <div className="projects3">
        {renderProjects(projects3, projectBlocksPR3)}

        <div>
          <p className="weekDayInfo">MITTWOCH</p>
          <p className="dateInfo">03.JUNI</p>
        </div>
      </div>
      <div className="moreInfos">
        <p>more infos</p>
        <p>↓</p>
      </div>

    </div>
  );
}

export default Timetable;