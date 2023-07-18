import { useState } from "react";
import { ErrorMessage } from "./W12ErrorMessage";

interface SpeciesNameProps {
	speciesName: string;
	changeSpeciesName:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface BeingsProps {
	beings: number;
	changeBeings:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PlanetNameProps {
	planetName: string;
	changePlanetName:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SumProps {
	answer: string;
	changeSum: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface SpareProps {
	spare: string;
	changeSpare:(e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const SpeciesName : React.FC<SpeciesNameProps> = ({changeSpeciesName}) => {
	
	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	const validate = (name: string) => {
		if (name.length < 3 || name.length > 23)
			return 'Species Name must be between 3 and 23 characters';
		
		if (!(/^[a-zA-Z ]+$/).test(name))
			return 'Species Name must not contain numbers or special characters';
	} 

	return (
		<>
			<label htmlFor='speciesName'>Species Name: </label>
			<input id='speciesName' type='text' onChange={(e) => {
					const newError = validate(e.target.value);
					setErrorMessage(newError);
					changeSpeciesName(e)
				}} />
			<ErrorMessage message={errorMessage} />
		</>
	);
}

export const PlanetName : React.FC<PlanetNameProps> = ({changePlanetName}) => {
	
	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	const validate = (name: string) => {
		if (name.length < 2 || name.length > 49)
			return 'Planet Name must be between 2 and 49 characters';
		
		if (!(/^[a-zA-Z0-9]+$/).test(name))
			return 'Planet Name must not contain special characters';
	} 

	return (
		<>
			<label htmlFor='planetName' >Planet Name: </label>
			<input id='planetName' type='text' onChange={(e) => {
					const newError = validate(e.target.value);
					setErrorMessage(newError);
					changePlanetName(e)
				}} />
			<ErrorMessage message={errorMessage} />
		</>
	);
}

export const Beings : React.FC<BeingsProps> = ({changeBeings}) => {

	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	const validate = (beingsStr: string) => {

		
		if (!(/^[0-9]+$/).test(beingsStr))
			return 'Must be a number';
		
		const beingsNumber = parseInt(beingsStr);
		if (beingsNumber < 1e9)
			return 'There must be at least 1,000,000,000 members of a species';
	} 

	return (
		<>
			<label htmlFor='beings'>Number of Beings: </label>
			<input id='beings' type='text' onChange={(e) => {
					const newError = validate(e.target.value);
					setErrorMessage(newError);
					changeBeings(e)
				}} />
			<ErrorMessage message={errorMessage} />
		</>
	);
}

export const Sum : React.FC<SumProps> = ({changeSum}) => {
	const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

	const validate = (finalSum: string) => {
		
		if (finalSum === 'Not 4')
			return 'This is not correct';
		
	} 

	return (
		<><label htmlFor="sum" >What is 2 + 2? </label>
		<select id='sum' className="form__text form__text--answer form__text--answer--select" onChange={(e) => {
					const newError = validate(e.target.value);
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

	const validate = (reason: string) => {
		if (reason.length < 17 || reason.length > 153)
			return 'Reason must be between 17 and 153 characters';
	} 

	return (
		<>
			<label htmlFor='spare'>Reason for Sparing: </label>
			<textarea rows={3} id='spare' onChange={(e) => {
					const newError = validate(e.target.value);
					setErrorMessage(newError);
					changeSpare(e)
				}} />
			<ErrorMessage message={errorMessage} />
		</>
	);
}