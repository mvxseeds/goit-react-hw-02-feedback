import { OptionsList, Option, FeedbackButton } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <OptionsList>{
            options.map(option => {
                return (
                    <Option key={option}>
                        <FeedbackButton type="button" value={option} onClick={onLeaveFeedback}>{option}</FeedbackButton>
                    </Option>
                );
            })
        }</OptionsList>
    );
};
