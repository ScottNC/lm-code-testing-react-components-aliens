import { useState } from "react";
import { ErrorMessage } from "./W12ErrorMessage";
import { validate } from "./validate";

interface SumProps {
	answer: string;
	changeSum: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface SpareProps {
	spare: string;
	changeSpare:(e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface TextInputProps {
	question: string;
	id: string;
	input: string | number;
	changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput : React.FC<TextInputProps> = ({id, changeValue, question}) => {
	
	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	return (
		<>
			<label htmlFor={id}>{question}</label>
			<input id={id} type='text' onChange={(e) => {
					const newError = validate(e.target.value, id);
					setErrorMessage(newError);
					changeValue(e)
				}} />
			<ErrorMessage message={errorMessage} />
		</>
	);
}

export const Sum : React.FC<SumProps> = ({changeSum}) => {
	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	return (
		<><label htmlFor="sum" >What is 2 + 2? </label>
		<select id='sum' className="form__text form__text--answer form__text--answer--select" onChange={(e) => {
					const newError = validate(e.target.value, 'sum');
					setErrorMessage(newError);
					changeSum(e)
				}}>
			<option value="4">4</option>
			<option value="Not 4">Not 4</option>
		</select>
		<ErrorMessage message={errorMessage} />
		</>
	);
}

export const Spare : React.FC<SpareProps> = ({changeSpare}) => {

	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	return (
		<>
			<label htmlFor='spare'>Reason for Sparing: </label>
			<textarea rows={3} id='spare' onChange={(e) => {
					const newError = validate(e.target.value, 'spare');
					setErrorMessage(newError);
					changeSpare(e)
				}} />
			<ErrorMessage message={errorMessage} />
		</>
	);
}