import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

export const Root = ({ className }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.wixstatic.com/media/a64542_c8662235d739471db3e1e3ad0c902d71~mv2.png/v1/fill/w_1532,h_826,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a64542_c8662235d739471db3e1e3ad0c902d71~mv2.pngslide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.wixstatic.com/media/a64542_55d40c75d5634302aea3e5e6b017ce58~mv2.png/v1/fill/w_1434,h_766,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a64542_55d40c75d5634302aea3e5e6b017ce58~mv2.png slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.wixstatic.com/media/a64542_aaa1869ac35d4ede8cd44b5d1b432c5d~mv2.png/v1/fill/w_1470,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a64542_aaa1869ac35d4ede8cd44b5d1b432c5d~mv2.png slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};
