import { Formik } from 'formik';
import { Form, HeadingLabel, SubmitWrapper, InfoLabel, FeedbackButton } from './FeedbackForm.styled';

export const FeedbackForm = ({stats, onLeaveFeedback, total, positive}) => {
  return (
    <Formik
      initialValues={{...stats}}
    >
      <Form>
        <HeadingLabel>Please leave feedback</HeadingLabel>
        <SubmitWrapper>
          <FeedbackButton type="button" value="good" onClick={onLeaveFeedback}>Good</FeedbackButton>
          <FeedbackButton type="button" value ="neutral" onClick={onLeaveFeedback}>Neutral</FeedbackButton>
          <FeedbackButton type="button" value ="bad" onClick={onLeaveFeedback}>Bad</FeedbackButton>
        </SubmitWrapper>

        <HeadingLabel>Statistics</HeadingLabel>
        <InfoLabel>Good: {stats.good}</InfoLabel>
        <InfoLabel>Neutral: {stats.neutral}</InfoLabel>
        <InfoLabel>Bad: {stats.bad}</InfoLabel>
        <InfoLabel>Total: {total}</InfoLabel>
        <InfoLabel>PositiveFeedback: {positive}%</InfoLabel>
      </Form>
    </Formik>
  );
};
