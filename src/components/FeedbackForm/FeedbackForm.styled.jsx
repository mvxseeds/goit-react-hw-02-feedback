import styled from '@emotion/styled';
import { Form as FormStyled } from 'formik';

export const Form = styled(FormStyled)`
  display: flex;
  flex-direction: column;

  width: 400px;
`;

export const HeadingLabel = styled.label`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  gap: 10px;

  padding: 0 10px;
  margin-bottom: 24px;
`;

export const InfoLabel = styled.label`
  font-size: 20px;
  margin-bottom: 6px;

  font-weight: 400;
`;

export const FeedbackButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;

  &:active {
    background-color: #6fa8dc;
    border-color: #0074cc;
  }
`;
