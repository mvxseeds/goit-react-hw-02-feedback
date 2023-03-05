import { Component } from 'react';
import { ModernNormalize } from 'emotion-modern-normalize';
import { GlobalStyle } from 'GlobalStyle';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.value]: prevState[e.target.value] + 1
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, val) => acc + val, 0);
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const pos = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return (pos) ? pos : 0;
  }


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.onLeaveFeedback} 
          />
        </Section>

        {total ? 
          <Section title="Statistics">
            <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={this.countTotalFeedback()} 
              positivePercentage={this.countPositiveFeedbackPercentage()}>
            </Statistics>
          </Section>
        :
          <Notification message="There is no feedback"></Notification>
        }

        <ModernNormalize />
        <GlobalStyle />
      </>
    );
  }
}
