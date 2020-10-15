import { Chip } from "@material-ui/core";
import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdCode } from "react-icons/md";
import { GiNewBorn } from "react-icons/gi";
import {
  FaStudiovinari,
  FaServer,
  FaCampground,
  FaLightbulb,
  FaUniversity,
  FaUserGraduate,
  FaHeart,
} from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import portfolioData from "../../data/data.json";
import SchoolIcon from "@material-ui/icons/School";
import Divider from "@material-ui/core/Divider";
import "../../App.css";

const AboutMe = () => {
  const [userData, setUserData] = useState(portfolioData);
  const themeColor = [
    "#05386B",
    "#ea9438",
    "#d7385e",
    "#000000",
    "#de2b2b",
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
                borderRight: `7px solid  ${themeColor[index]}`,
              }}
              icon={React.createElement(EventIcons[index])}
              date={event.date}
              dateClassName="timeline-date-style"
              iconStyle={{ background: themeColor[index], color: "#edf5e1" }}
            >
              <h3 className="vertical-timeline-element-title">
                {event.eventName}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {event.location}
              </h5>
              <p>{event.eventDetails}</p>
              <div className="tag-style">
                {event.technologies.length === 0
                  ? null
                  : event.technologies.map((skill) => {
                      return <Chip label={skill} />;
                    })}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
export default AboutMe;
