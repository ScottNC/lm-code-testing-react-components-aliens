import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { Beings, PlanetName, Spare, SpeciesName, Sum } from './W12MOptions';
import { Answers } from './W12Answers';

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

	const handleSubmit = () => {
		console.log(); // DevTools won't log the first console log???
		console.log(speciesName);
		console.log(planetName);
		console.log(beings);
		console.log(sum);
		console.log(spare);
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form className='w12MForm__form'>
				<SpeciesName speciesName={speciesName} changeSpeciesName={(e: any) => setSpeciesName(e.target.value)}/>
				<PlanetName planetName={planetName} changePlanetName={(e: any) => setPlanetName(e.target.value)}/>
				<Beings beings={beings} changeBeings={(e: any) => setBeings(parseInt(e.target.value))}/>
				<Sum answer={sum} changeSum={(e: any) => setSum(e.target.value)}/>
				<Spare spare={spare} changeSpare={(e: any) => setSpare(e.target.value)}/>
				<button type="button" onClick={
					() => {
						handleSubmit();
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
			}>Submit Form </button>
			</form>
			<Answers show={showAnswers} allAnswers={allAnswers}/>
		</section>
	);
};

export default W12MForm;
