import React from "react";
import { themeColor } from "../../data/color";
import { Chip, CardContent, Collapse, Typography } from "@material-ui/core";
import ImageGallery from "./ImageGallery";

const AccordionContainer = (props) => {
  return (
    <Collapse in={props.expanded === props.index} timeout="auto" unmountOnExit>
      <CardContent>
        <div className="tag-style-project">
          {props.technologiesLength === 0 ||
          props.technologiesLength === undefined
            ? null
            : props.technologies.map((skill, index) => {
                return (
                  <Chip
                    style={{ backgroundColor: themeColor[index] }}
                    label={skill}
                    key={index}
                  />
                );
              })}
        </div>
        <Typography style={{ marginTop: "1vh", color: "#05386B" }} paragraph>
          ScreenShots:
        </Typography>
        {props.ProjectName === "Kovan" ? (
          <ImageGallery imageList={props.imageListKovan} />
        ) : props.ProjectName === "Taskiton" ? (
          <ImageGallery imageList={props.imageListTaskiton} />
        ) : props.ProjectName === "Odyssey" ? (
          <ImageGallery imageList={props.imageListOdeyssey} />
        ) : null}
      </CardContent>
    </Collapse>
  );
};
export default AccordionContainer;
