import { Button, Chip } from "@material-ui/core";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import reactLogo from "../../assets/images/node-brands.svg";
import portfolioData from "../../data/data.json";
console.log(portfolioData);

const Portfolio = () => {
  return (
    <div>
      <VerticalTimeline>
        {portfolioData.map((event) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={event.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                {event.eventName}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {event.location}
              </h5>
              <p>{event.eventDetails}</p>
              {event.technologies.map((skill) => {
                return <Chip label={skill} color="secondary" />;
              })}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
export default Portfolio;
