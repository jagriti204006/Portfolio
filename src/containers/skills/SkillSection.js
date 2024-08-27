import React, { useState } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SkillSection = ({ theme }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {skills.data.map((skillCategory, index) => (
        <div className="skills-main-div" key={index}>
          <Fade left duration={2000}>
            <div className="skills-image-div">
              <img
                alt="Shriya is designing Logo"
                src={require(`../../assests/images/what.png`)}
              ></img>
            </div>
          </Fade>

          <div className="skills-text-div">
            <Fade right duration={1000}>
              <h1 className="skills-heading" style={{ color: theme.text }}>
                {skillCategory.title}
              </h1>
            </Fade>
            <Fade right duration={1500}>
              <SoftwareSkill logos={skillCategory.softwareSkills} />
            </Fade>
            <Fade right duration={2000}>
              <div>
                {skillCategory.skills.map((skill, skillIndex) => {
                  const panelId = `panel-${index}-${skillIndex}`;
                  return (
                    <Accordion
                      expanded={expanded === panelId}
                      onChange={handleChange(panelId)}
                      key={skillIndex}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${panelId}-content`}
                        id={`${panelId}-header`}
                        className="accordion-summary"
                      >
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skill.name}
                        </p>
                      </AccordionSummary>
                      <AccordionDetails className="accordion-details">
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skill.description}
                        </p>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            </Fade>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
