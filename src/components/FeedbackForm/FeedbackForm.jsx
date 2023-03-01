import { Formik } from 'formik';
import { Form, HeadingLabel, SubmitWrapper, InfoLabel, FeedbackButton } from './FeedbackForm.styled';

export const FeedbackForm = () => {
  return (
    <Formik
      initialValues={{
        good: 0,
        neutral: 0,
        bad: 0,
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <HeadingLabel>Please leave feedback</HeadingLabel>
        <SubmitWrapper>
          <FeedbackButton type="submit">Good</FeedbackButton>
          <FeedbackButton type="submit">Neutral</FeedbackButton>
          <FeedbackButton type="submit">Bad</FeedbackButton>
        </SubmitWrapper>

        <HeadingLabel>Statistics</HeadingLabel>
        <InfoLabel>Good: </InfoLabel>
        <InfoLabel>Neutral: </InfoLabel>
        <InfoLabel>Bad: </InfoLabel>
      </Form>
    </Formik>
  );
};
