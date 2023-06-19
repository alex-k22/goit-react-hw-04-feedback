import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
  options.map(option => (
    
      <button 
      className={`${css.button} ${css[option]}`}
      type="button"
      key={option}
      onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    
  ))
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
