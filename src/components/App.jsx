import { Component } from 'react';
import { ModernNormalize } from 'emotion-modern-normalize';
import { GlobalStyle } from 'GlobalStyle';
import { FeedbackForm } from './FeedbackForm/FeedbackForm';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <FeedbackForm />
        <ModernNormalize />
        <GlobalStyle />
      </>
    );
  }
}
