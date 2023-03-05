import { Prompt } from "components/Notification/Notification.styled";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
            <Prompt>Good: {good}</Prompt>
            <Prompt>Neutral: {neutral}</Prompt>
            <Prompt>Bad: {bad}</Prompt>
            <Prompt>Total: {total}</Prompt>
            <Prompt>PositiveFeedback: {positivePercentage}%</Prompt>
        </>
    );
};

