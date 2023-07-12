import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import "./style.css";

export const ContentModal = ({ isOpen, setIsOpen, contentData }) => {
  const {
    platform,
    category,
    videoId,
    name,
    colabType,
    description,
    technicalSpecs,
  } = contentData;

  return (
    <div className="javi-content-modal">
      <Modal
        className="javi-content-modal"
        show={isOpen}
        size="lg"
        onHide={() => setIsOpen(false)}
        centered
      >
        {/*         <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body style={{ minHeight: "30vh" }}>
          <div>
            <iframe
              width="100%"
              height="410px"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube Video"
              //frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ minHeight: "60vh" }}>
          <div>
            <p>
              <h4>{name}</h4>
            </p>
            <p>
              <span className="subtitle">Platform: </span>
              <span>{platform}</span>
              <br />
              <span className="subtitle">Category: </span>
              <span>{category}</span>
              <br />
              <span className="subtitle">Colaboration type: </span>
              <span>{colabType}</span>
              <br />
              <span className="subtitle">Technical specs:</span>
              <span>{technicalSpecs}</span>
              <br />
              <span className="subtitle">Description: </span>
              <span>{description}</span>
            </p>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ContentModal.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  contentData: PropTypes.object,
};
