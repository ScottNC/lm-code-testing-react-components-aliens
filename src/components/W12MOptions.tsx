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

export const SpeciesName : React.FC<SpeciesNameProps> = ({changeSpeciesName}) => (
	<>
		<label htmlFor='speciesName'>Species Name: </label>
		<input id='speciesName' type='text' onChange={changeSpeciesName} />
	</>
);

export const PlanetName : React.FC<PlanetNameProps> = ({changePlanetName}) => (
	<>
		<label htmlFor='planetName'>Planet Name: </label>
		<input id='planetName' type='text' onChange={changePlanetName} />
	</>
);

export const Beings : React.FC<BeingsProps> = ({changeBeings}) => (
	<>
		<label htmlFor='beings'>Number of Beings: </label>
		<input id='beings' type='text' onChange={changeBeings} />
	</>
);

export const Sum : React.FC<SumProps> = ({changeSum}) => (
  <><label htmlFor="sum" >What is 2 + 2? </label>
  <select className="form__text form__text--answer form__text--answer--select" onChange={changeSum}>
    <option value="4">4</option>
    <option value="Not 4">Not 4</option>
  </select>
  </>
);

export const Spare : React.FC<SpareProps> = ({changeSpare}) => (
	<>
		<label htmlFor='spare'>Reason for Sparing: </label>
		<textarea rows={3} id='spare' onChange={changeSpare} />
	</>
);

	

