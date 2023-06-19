import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOption from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import css from './App.module.css';

export  function App()  {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = feedbackName => {
    switch (feedbackName) {
      case "good":
        setGood(prevState => prevState + 1);
        break;
      case "neutral":
        setNeutral(state => state +1);
        break;
      case "bad":
        setBad(state => state +1);
        break;
      default:
        return;    
    }
  }

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
        return Math.round((good * 100) / (good + neutral + bad));
  };

    return (
      <div className={css.container}>
        <Section title="Please live feedback">
          <FeedbackOption
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }

