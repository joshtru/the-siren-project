import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Carousel, Row, Col } from "antd";
import LandingSlider from "../landing-slider/landing-slider.component";
import LandingThumb from "../landing-thumb/landing-thumb.component";

import WithSpinner from "../witth-spinner/with-spinner.component";

import { extractDate } from "../../redux/until";

import "antd/dist/antd.css";
import "./landing-section.styles.scss";

const LandingSection = ({ topHeadlines }) => {
  return (
    <div className="landing-section">
      <Row gutter={[8, 16]}>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <div className="landing-section__main-slider">
            <Carousel
              speed={2500}
              autoplay
              autoplaySpeed={5000}
              dotPosition={"right"}
              dots={true}
              pauseOnFocus
              draggable={true}
            >
              {topHeadlines
                .filter((item, idx) => idx < 4)
                .map((item, index) => (
                  <LandingSlider
                    key={index + 1}
                    index={index + 1}
                    title={item.title}
                    imageUrl={item.urlToImage}
                    category={item.source.name}
                    date={item.publishedAt}
                  />
                ))}
            </Carousel>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          {/* <div className="landing-section__seconday-section"> */}
          {topHeadlines
            .filter((item, idx) => idx >= 4)
            .map((headline, index) => (
              <LandingThumb
                key={index}
                title={headline.title}
                imageUrl={headline.urlToImage}
                category={headline.source.name}
                date={extractDate(headline.publishedAt)}
              />
            ))}
          {/* </div> */}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ headline }) => ({
  topHeadlines: headline.shuffledHeadlines,
  isFetching: headline.isFetchingShuffledHeadlines
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(LandingSection);
