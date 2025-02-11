import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { Spare,  Sum, TextInput } from './W12MOptions';
import { Answers } from './W12Answers';
import { CloseButton } from './W12CloseButton';

export interface AllAnswers {
	speciesName: string,
	planetName: string,
	beings: number,
	sum: string,
	spare: string;
}

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('humans');
	const [planetName, setPlanetName] = useState<string>('earth');
	const [beings, setBeings] = useState<number>(10);
	const [sum, setSum] = useState<string>('4');
	const [spare, setSpare] = useState<string>('no reason');

	const [showAnswers, setAnswer] = useState<boolean>(false);

	const [allAnswers, setAllAnswers] = useState<AllAnswers>({
		speciesName,
		planetName,
		beings,
		sum,
		spare
	})

	const handleSubmit = (e: any) => {
		e.preventDefault();
		
		console.log(speciesName);
		console.log(planetName);
		console.log(beings);
		console.log(sum);
		console.log(spare);

		setAnswer(() => true);
		setAllAnswers(() => {
			return {
				speciesName,
				planetName,
				beings,
				sum,
				spare
			};
		})
	}

	return (
		<section data-testid="w12MForm" className='w12MForm'>
			<W12MHeader />
			<form className='w12MForm__form' onSubmit={handleSubmit}>
				<TextInput id='speciesName' input={speciesName} question={'Species Name:'} changeValue={(e: any) => setSpeciesName(e.target.value)}/>
				<TextInput id='planetName' input={planetName} question={'Planet Name:'} changeValue={(e: any) => setPlanetName(e.target.value)}/>
				<TextInput id='beings' input={beings} question={'Number of Beings:'} changeValue={(e: any) => setBeings(parseInt(e.target.value))}/>
				<Sum answer={sum} changeSum={(e: any) => setSum(e.target.value)}/>
				<Spare spare={spare} changeSpare={(e: any) => setSpare(e.target.value)}/>
				<button type="submit" >Submit Form</button>
			</form>
			<Answers show={showAnswers} allAnswers={allAnswers}/>
			<CloseButton show={showAnswers} setAnswer={setAnswer}/>
		</section>
	);
};

export default W12MForm;
