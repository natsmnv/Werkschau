import React from "react";
import "./Timetable.css";

function Timetable() {
  const GenerateNumberOfBlocks = () => {
    return Math.floor(Math.random() * 3 + 1);
  };

  let newLineIndex = 0;
  const projects1 = [
    {
      time: "17:00",
      text: "Opening \n Werkschau \n (Audimax)",
    },
    {
      time: "17:00-21:00",
      text: "\n Ausstellung Games \n Ausstellung \n Kommunikationsdesign",
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

  const projectBlocks = projects1.map(() => ({
    numberLightBlocks: GenerateNumberOfBlocks(),
    numberDarkBlocks: GenerateNumberOfBlocks(),
  }));

  return (
    <div>
      <div className="projects1">
        {/* Generate random number of blocks per project */}
        {projects1.map((project, index) => (
          <div key={index} className="project">
            {Array.from(
              { length: projectBlocks[index].numberLightBlocks },
              (_, i) => (
                <div key={`light-${i}`} className="light-square" />
              ),
            )}

            {Array.from(
              { length: projectBlocks[index].numberDarkBlocks },
              (_, i) => (
                <div key={`dark-${i}`} className="dark-square" />
              ),
            )}

            {/* Project text */}
            <div className="project-text">
              <p className="hour">{project.time}</p>

              <p>
                {project.text.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
        <div>
          <p className="weekDayInfo">MONTAG</p>
          <p className="dateInfo">01.JUNI</p>
        </div>
      </div>
    </div>
  );
}

export default Timetable;
