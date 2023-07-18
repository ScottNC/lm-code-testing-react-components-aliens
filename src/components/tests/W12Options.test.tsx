import { fireEvent, render, screen } from "@testing-library/react";
import { Beings, PlanetName, Spare, SpeciesName, Sum } from "../W12MOptions";


describe('species input', () => {
  test('ask species', () => {
    const changeSpeciesName = jest.fn(); 
    render(<SpeciesName speciesName={'human'} changeSpeciesName={changeSpeciesName}/>);
    const speciesQuestion = screen.getByText(/Species Name:/i);
    expect(speciesQuestion).toBeInTheDocument();
  });

  test('species input', () => {
    const setSpeciesName = jest.fn(); 

    const changeSpeciesName = (e: any) => setSpeciesName(e.target.value);

    render(<SpeciesName speciesName={'human'} changeSpeciesName={changeSpeciesName}/>);
    const speciesInput = screen.getByLabelText(/Species Name:/i);
    fireEvent.change(speciesInput, {target: {value: 'Wookie'}});
    
    expect(setSpeciesName).toHaveBeenCalledWith('Wookie');
  });

  test('species input too small', () => {
    const setSpeciesName = jest.fn(); 

    const changeSpeciesName = (e: any) => setSpeciesName(e.target.value);

    render(<SpeciesName speciesName={'human'} changeSpeciesName={changeSpeciesName}/>);
    const speciesInput = screen.getByLabelText(/Species Name:/i);
    fireEvent.change(speciesInput, {target: {value: 'a'}});
    
    const errorMessage = screen.getByText(/Species Name must be between 3 and 23 characters/i);

    expect(errorMessage).toBeInTheDocument();
  });

  test('species input too big', () => {
    const setSpeciesName = jest.fn(); 

    const changeSpeciesName = (e: any) => setSpeciesName(e.target.value);

    render(<SpeciesName speciesName={'human'} changeSpeciesName={changeSpeciesName}/>);
    const speciesInput = screen.getByLabelText(/Species Name:/i);
    fireEvent.change(speciesInput, {target: {value: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}});
    
    const errorMessage = screen.getByText(/Species Name must be between 3 and 23 characters/i);

    expect(errorMessage).toBeInTheDocument();
  });

  test('species input has special characters', () => {
    const setSpeciesName = jest.fn(); 

    const changeSpeciesName = (e: any) => setSpeciesName(e.target.value);

    render(<SpeciesName speciesName={'human'} changeSpeciesName={changeSpeciesName}/>);
    const speciesInput = screen.getByLabelText(/Species Name:/i);
    fireEvent.change(speciesInput, {target: {value: '!!??'}});
    
    const errorMessage = screen.getByText(/Species Name must not contain numbers or special characters/i);

    expect(errorMessage).toBeInTheDocument();
  });

});

describe('planet input', () => {
  test('ask planet', () => {
    const changePlanetName = jest.fn(); 
    render(<PlanetName planetName={'earth'} changePlanetName={changePlanetName}/>);
    const planetQuestion = screen.getByText(/Planet Name:/i);
    expect(planetQuestion).toBeInTheDocument();
  });

  test('planet input', () => {
    const setPlanetName = jest.fn(); 

    const changePlanetName = (e: any) => setPlanetName(e.target.value);

    render(<PlanetName planetName={'human'} changePlanetName={changePlanetName}/>);
    const planetInput = screen.getByLabelText(/Planet Name:/i);
    fireEvent.change(planetInput, {target: {value: 'Kashyyyk'}});
    
    expect(setPlanetName).toHaveBeenCalledWith('Kashyyyk');
  });

  test('planet input too small', () => {
    const setPlanetName = jest.fn(); 

    const changePlanetName = (e: any) => setPlanetName(e.target.value);

    render(<PlanetName planetName={'human'} changePlanetName={changePlanetName}/>);
    const planetInput = screen.getByLabelText(/Planet Name:/i);
    fireEvent.change(planetInput, {target: {value: 'a'}});
    
    const errorMessage = screen.getByText(/Planet Name must be between 2 and 49 characters/i);

    expect(errorMessage).toBeInTheDocument();
  });

  test('planet input too big', () => {
    const setPlanetName = jest.fn(); 

    const changePlanetName = (e: any) => setPlanetName(e.target.value);

    render(<PlanetName planetName={'human'} changePlanetName={changePlanetName}/>);
    const planetInput = screen.getByLabelText(/Planet Name:/i);
    fireEvent.change(planetInput, {target: {value: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}});
    
    const errorMessage = screen.getByText(/Planet Name must be between 2 and 49 characters/i);

    expect(errorMessage).toBeInTheDocument();
  });

  test('planet input has special characters', () => {
    const setPlanetName = jest.fn(); 

    const changePlanetName = (e: any) => setPlanetName(e.target.value);

    render(<PlanetName planetName={'human'} changePlanetName={changePlanetName}/>);
    const planetInput = screen.getByLabelText(/Planet Name:/i);
    fireEvent.change(planetInput, {target: {value: '!!??'}});
    
    const errorMessage = screen.getByText(/Planet Name must not contain special characters/i);

    expect(errorMessage).toBeInTheDocument();
  });

});

describe('beings input', () => {
  test('ask numebr of beings', () => {
    const changeBeings = jest.fn(); 
    render(<Beings beings={0} changeBeings={changeBeings}/>);
    const beingsQuestion = screen.getByText(/Number of Beings:/i);
    expect(beingsQuestion).toBeInTheDocument();
  });

  test('beings input', () => {
    const setBeings = jest.fn(); 

    const changeBeings = (e: any) => setBeings(parseInt(e.target.value));

    render(<Beings beings={0} changeBeings={changeBeings}/>);
    const beingsInput = screen.getByLabelText(/Number of Beings:/i);
    fireEvent.change(beingsInput, {target: {value: 500}});
    
    expect(setBeings).toHaveBeenCalledWith(500);
  });

});

describe('sum input', () => {
  test('ask sum', () => {
    const changeSum = jest.fn(); 
    render(<Sum answer={'Not 4'} changeSum={changeSum}/>);
    const sumQuestion = screen.getByLabelText('What is 2 + 2?');
    expect(sumQuestion).toBeInTheDocument();
  });

  test('sum input', () => {
    const setSum = jest.fn(); 

    const changeSum = (e: any) => setSum(e.target.value);

    render(<Sum answer={'Not 4'} changeSum={changeSum}/>);
    const sumInput = screen.getByLabelText('What is 2 + 2?');
    fireEvent.change(sumInput, {target: {value: '4'}});
    
    expect(setSum).toHaveBeenCalledWith('4');
  });

});

describe('spare input', () => {
  test('ask spare', () => {
    const changeSpare = jest.fn(); 
    render(<Spare spare={'there is no reason you should spare us'} changeSpare={changeSpare}/>);
    const spareQuestion = screen.getByLabelText(/Reason for Sparing:/i);
    expect(spareQuestion).toBeInTheDocument();
  });

  test('spare input', () => {
    const setSpare = jest.fn(); 

    const changeSpare = (e: any) => setSpare(e.target.value);

    render(<Spare spare={'there is no reason you should spare us'} changeSpare={changeSpare}/>);
    const spareInput = screen.getByLabelText(/Reason for Sparing:/i);
    fireEvent.change(spareInput, {target: {value: 'because ummmmmmmmmmmmmmmmmmmmmmmm....'}});
    
    expect(setSpare).toHaveBeenCalledWith('because ummmmmmmmmmmmmmmmmmmmmmmm....');
  });

});



