import { Prompt } from "./Notification.styled";

export const Notification = ({message}) => {
    return (
        <Prompt>{message}</Prompt>
    );
}