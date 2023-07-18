import { useState } from "react";
import { ErrorMessage } from "./W12ErrorMessage";

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

type valFunc = (value: string) => boolean;

type valFuncObj = {
	[key in string] : {
		validation: valFunc;
		message: string;
	}[]
}

const validationFunctions : valFuncObj = {
	speciesName: 
		[
			{
				validation: (value: string) => (value.length < 3 || value.length > 23),
				message: 'Species Name must be between 3 and 23 characters'
			},
			{
				validation: (value: string) => (!(/^[a-zA-Z ]+$/).test(value)),
				message: 'Species Name must not contain numbers or special characters'
			}
		],

	planetName: 
		[
			{
				validation: (value: string) => (value.length < 2 || value.length > 49),
				message: 'Planet Name must be between 2 and 49 characters'
			},
			{
				validation: (value: string) => (!(/^[a-zA-Z\d ]+$/).test(value)),
				message: 'Planet Name must not contain special characters'
			}
		],

	beings:
		[
			{
				validation: (value: string) => (!(/^\d+$/).test(value)),
				message: 'Must be a number'
			},
			{
				validation: (value: string) => (parseInt(value) < 1e9),
				message: 'There must be at least 1,000,000,000 members of a species'
			}
		],

	sum:
		[
			{
				validation: (value: string) => (value === 'Not 4'),
				message: 'This is not correct'
			},
		],
	
	spare:
		[
			{
				validation: (value: string) => (value.length < 17 || value.length > 153),
				message: 'Reason must be between 17 and 153 characters'
			},
		],
}

const validate = (newInput: string, id: string) => {
	return validationFunctions[id].reduce((response: string | undefined, validation) => {
		if (response === undefined && validation.validation(newInput))
			return validation.message;

		return response;
	}, undefined);
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