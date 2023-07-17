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
    const planetInput = screen.getByLabelText(/Number of Beings:/i);
    fireEvent.change(planetInput, {target: {value: 500}});
    
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



