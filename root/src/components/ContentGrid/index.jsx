import "./style.css";
import PropTypes from "prop-types";

import { ContentCard } from "../ContentCard";

export const ContentGrid = ({ contentDb }) => {
  return (
    <>
      <div className="javi-content-grid">
        {contentDb.map((element, index) => {
          return <ContentCard key={"cards" + index} contentData={element} />;
        })}
      </div>
    </>
  );
};

ContentGrid.propTypes = {
  contentDb: PropTypes.array,
};
