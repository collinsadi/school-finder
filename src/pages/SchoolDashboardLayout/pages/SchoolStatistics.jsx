// stylesheet
import "./style/SchoolStatistics.css";

// images
import Chart from "./images/Chart.png";
import Review from "./images/Reviews.svg";
import Avatar from "./images/Avatar.svg";

const SchoolStatistics = () => {
  return (
    <div className="school_stat">
      <div className="profile_dash_header">
        <h1>Statistics</h1>
      </div>
      <div className="chart">
        <img src={Chart} alt="chart" />
      </div>
      <div className="reviews">
        <div className="reviews_header">
          <h3>Reviews</h3>
          <img src={Review} alt="Review" />
        </div>
        <div className="review_content">
          <div className="reviewer">
            <img src={Avatar} alt="avatar" />
            <span>Sir Promise</span>
          </div>
          <p>
            This school is undeniably impressive, although it comes with a hefty
            price tag. I successfully passed their entrance exam last year and
            received admission just a month later. Since then, their academic
            curriculum has consistently exceeded my expectations. I
            wholeheartedly rate them 5 stars, and that's only because there
            isn't a higher rating available! 😂🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolStatistics;
