import React from "react";
import "./Timetable.css";
function Timetable() {
  const GenerateNumberOfBlocks = () => {
    return Math.floor(Math.random() * 3);
  };

  const projects = ["Project1", "Project2"];
  const projectBlocks = Array.from({ length: projects.length }, () => ({
    numberLightBlocks: GenerateNumberOfBlocks(),
    numberDarkBlocks: GenerateNumberOfBlocks(),
  }));

  const ChooseDarkLight = projects.map(() =>
    Math.random() < 0.5 ? "dark-square" : "light-square",
  );

  return (
    <div>
        {/* Generate random number of blocks per project */}
      {projects.map((project, index) => (
        <div key={index} className="project">
           
           {Array.from(
            { length: projectBlocks[index].numberLightBlocks },
            (_, i) => (
              <div key={`l-${i}`} className="light-square" />
            )
          )}


           {Array.from(
            { length: projectBlocks[index].numberDarkBlocks },
            (_, i) => (
              <div key={`l-${i}`} className="dark-square" />
            )
          )}

            <div className="project-text">
                <p className="hour">17:00</p>
          <p>Performance Audio</p>
            </div>
          
        </div>
      ))}

      {/* Date*/}


    </div>
  );
}
export default Timetable;
