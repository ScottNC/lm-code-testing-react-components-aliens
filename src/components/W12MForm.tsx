import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { Beings, PlanetName, Spare, SpeciesName, Sum } from './W12MOptions';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('humans');
	const [planetName, setPlanetName] = useState<string>('earth');
	const [beings, setBeings] = useState<number>(10);
	const [sum, setSum] = useState<string>('4');
	const [spare, setSpare] = useState<string>('no reason');

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
			<form className='w12MForm__form' onSubmit={handleSubmit}>
				<SpeciesName speciesName={speciesName} changeSpeciesName={(e: any) => setSpeciesName(e.target.value)}/>
				<PlanetName planetName={planetName} changePlanetName={(e: any) => setPlanetName(e.target.value)}/>
				<Beings beings={beings} changeBeings={(e: any) => setBeings(parseInt(e.target.value))}/>
				<Sum answer={sum} changeSum={(e: any) => setSum(e.target.value)}/>
				<Spare spare={spare} changeSpare={(e: any) => setSpare(e.target.value)}/>
				<button type="submit">Submit Form</button>
			</form>
		</section>
	);
};

export default W12MForm;
