import { Chip } from "@material-ui/core";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdCode } from "react-icons/md";
import { GiNewBorn } from "react-icons/gi";
import {
  FaLaptopCode,
  FaServer,
  FaCampground,
  FaLightbulb,
  FaUniversity,
  FaUserGraduate,
  FaRocket,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import portfolioData from "../../data/timeline.json";
import SchoolIcon from "@material-ui/icons/School";
import { aboutMeColor } from "../../data/color";
import "../../App.css";

const AboutMe = () => {
  const timelineData = portfolioData;

  const EventIcons = [
    FaLaptopCode,
    FaRocket,
    FaLaptopCode,
    SchoolIcon,
    FaServer,
    FaCampground,
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
        {timelineData.map((event, index) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: aboutMeColor[index],
                color: "#edf5e1",
              }}
              contentArrowStyle={{
                borderRight: `7px solid  ${aboutMeColor[index]}`,
              }}
              icon={React.createElement(EventIcons[index])}
              date={event.date}
              dateClassName="timeline-date-style"
              iconStyle={{ background: aboutMeColor[index], color: "#edf5e1" }}
            >
              <h3 className="vertical-timeline-element-title">
                {event.eventName}
              </h3>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ marginTop: "10px" }}
              >
                {event.location}
              </h5>
              {event.hasLink && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#edf5e1",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <FaExternalLinkAlt style={{ marginRight: "8px" }} />
                  <span>https://navigopro.com</span>
                </a>
              )}
              <p>{event.eventDetails}</p>
              <div className="tag-style">
                {event.technologies.length === 0
                  ? null
                  : event.technologies.map((skill, index) => {
                      return (
                        <Chip
                          key={index}
                          style={{
                            backgroundColor: "#edf5e1",
                            marginRight: "5px",
                          }}
                          label={skill}
                        />
                      );
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
