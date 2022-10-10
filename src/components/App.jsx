import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = event => {
    const label = event.target.textContent;

    this.setState((prevState) => ({ [label]: (prevState[label] += 1) }));
  }

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((a, value) => a + value, 0);
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    let percent = Math.round((this.state.good * 100) / this.countTotalFeedback());
    if (isNaN(percent)) {
      percent = percent || 0;
    } 
    return percent;
  }

  render() {    
    const { good, neutral, bad } = this.state
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">        
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }  
};

export default App;