interface ErrorMessageProps {message: string | undefined}

export const ErrorMessage : React.FC<ErrorMessageProps> = ({message}) => {
    return message ? <p className="w12MForm__form--error">Error: {message}</p> : <></>;
}