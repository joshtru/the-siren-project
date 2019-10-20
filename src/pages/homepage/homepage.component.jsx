import React from "react";
import { connect } from "react-redux";
import LandingSection from "../../components/landing-section/landing-section.component";
import TopHeadlines from "../../components/top-headlines/top-headlines.component";

import { fetchTopHeadlinesStart } from "../../redux/headline/headline.action";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchTopHeadlinesStart } = this.props;
    fetchTopHeadlinesStart();
  }
  render() {
    return (
      <div className="homePage">
        <LandingSection />
        <TopHeadlines />
      </div>
    );
  }
}

const maptDispatchToProps = dispatch => ({
  fetchTopHeadlinesStart: () => dispatch(fetchTopHeadlinesStart())
});

export default connect(
  null,
  maptDispatchToProps
)(HomePage);