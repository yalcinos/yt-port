import { Chip } from "@material-ui/core";
import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { DiReact } from "react-icons/di";
import { MdWork, MdCode } from "react-icons/md";
import { GiNewBorn } from "react-icons/gi";
import {
  FaStudiovinari,
  FaServer,
  FaCampground,
  FaLightbulb,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import portfolioData from "../../data/data.json";
import SchoolIcon from "@material-ui/icons/School";

// console.log(portfolioData);

const Portfolio = () => {
  const [userData, setUserData] = useState(portfolioData);
  const themeColor = [
    "#05386B",
    "#ea9438",
    "#d7385e",
    "#000000",
    "#b17373",
    "#335d2d",
    "#590995",
    "#03c4a1",
    "#726a95",
    "#1e5f74",
    "#79d1e0",
  ];
  const EventIcons = [
    FaStudiovinari,
    SchoolIcon,
    FaServer,
    SchoolIcon,
    FaCampground,
    FaUniversity,
    FaLightbulb,
    MdCode,
    MdCode,
    FaUserGraduate,
    GiNewBorn,
  ];
  return (
    <div>
      <VerticalTimeline>
        {userData.map((event, index) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: themeColor[index], color: "#edf5e1" }}
              contentArrowStyle={{
                borderRight: "7px solid  #05386B",
              }}
              icon={React.createElement(EventIcons[index])}
              date={event.date}
              iconStyle={{ background: themeColor[index], color: "#edf5e1" }}
            >
              <h3 className="vertical-timeline-element-title">
                {event.eventName}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {event.location}
              </h5>
              <p>{event.eventDetails}</p>
              {event.technologies.map((skill) => {
                return (
                  <Chip label={skill} style={{ backgroundColor: "#edf5e1" }} />
                );
              })}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
export default Portfolio;
