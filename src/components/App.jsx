import { Component } from 'react';
import { ModernNormalize } from 'emotion-modern-normalize';
import { GlobalStyle } from 'GlobalStyle';
import { FeedbackForm } from './FeedbackForm/FeedbackForm';

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
    return (
      <>
        <FeedbackForm 
          stats={this.state} 
          onLeaveFeedback={this.onLeaveFeedback}
          total={this.countTotalFeedback()}
          positive={this.countPositiveFeedbackPercentage()}
        />
        <ModernNormalize />
        <GlobalStyle />
      </>
    );
  }
}
