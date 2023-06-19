import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>
        Good: <b>{good}</b>
      </p>
      <p>
        Neutral: <b>{neutral}</b>
      </p>
      <p>
        Bad: <b>{bad}</b>
      </p>
      <p>
        Total: <b>{total}</b>
      </p>
      <p>
        Positive feedback: <b>{positivePercentage}%</b>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
