import React from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.siteName}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.siteName}</strong>
                  </Tooltip>
                }
              >
                <li className="competitive-sites-inline" name={logo.siteName}>
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {logo.siteName === "InDesign" ? (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg"
                        alt={logo.siteName}
                        style={{ width: "48px", height: "48px", ...logo.style }} // Add any custom styles here
                      />
                    ) : (
                      <span
                        className="iconify"
                        data-icon={logo.iconifyClassname} // Ensure this references the correct class
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}
                  </a>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
