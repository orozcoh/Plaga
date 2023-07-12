import "./style.css";
import PropTypes from "prop-types";

import { ContentCard } from "../ContentCard";

export const ContentGrid = ({ contentDb }) => {
  return (
    <>
      <div className="javi-content-grid">
        <ContentCard contentData={contentDb["content-1"]} />
        <ContentCard contentData={contentDb["content-2"]} />
        <ContentCard contentData={contentDb["content-3"]} />
        <ContentCard contentData={contentDb["content-3"]} />
        <ContentCard contentData={contentDb["content-2"]} />
        <ContentCard contentData={contentDb["content-1"]} />
        <ContentCard contentData={contentDb["content-3"]} />
      </div>
    </>
  );
};

ContentGrid.propTypes = {
  contentDb: PropTypes.array,
};
