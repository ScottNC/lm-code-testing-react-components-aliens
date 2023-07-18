import { fireEvent, render, screen } from '@testing-library/react';
import W12MForm from '../W12MForm';

export const enterValues = () => {
	const button = screen.getByText('Submit Form');

	const speciesInput = screen.getByLabelText(/Species Name:/i);
	fireEvent.change(speciesInput, {target: {value: 'Wookie'}});

	const planetInput = screen.getByLabelText(/Planet Name:/i);
	fireEvent.change(planetInput, {target: {value: 'Kashyyyk'}});

	const beingsInput = screen.getByLabelText(/Number of Beings:/i);
	fireEvent.change(beingsInput, {target: {value: 50000000000}});

	const sumInput = screen.getByLabelText('What is 2 + 2?');
	fireEvent.change(sumInput, {target: {value: '4'}});

	const spareInput = screen.getByLabelText(/Reason for Sparing:/i);
	fireEvent.change(spareInput, {target: {value: 'because ummmmmmmmmmmmmmmmmmmmmmmm....'}});

	fireEvent.click(button);
}

test('renders form element', () => {
	render(<W12MForm />);
	const form = screen.getByTestId('w12MForm');
	expect(form).toHaveClass('w12MForm');
});

describe('submit button', () => {
	test('species show', () => {
		render(<W12MForm />);
		enterValues();
		const species = screen.getByText(/Species Name: Wookie/i);
    expect(species).toBeInTheDocument();
  });

  test('Planet shows', () => {
		render(<W12MForm />);
		enterValues();
    const planet = screen.getByText(/Planet Name: Kashyyyk/i);
    expect(planet).toBeInTheDocument();
  });

  test('Number of Beings show', () => {
		render(<W12MForm />);
		enterValues();
    const beings = screen.getByText(/Number of Beings: 50000000000/i);
    expect(beings).toBeInTheDocument();
  });

  test('2+2=4 shows', () => {
		render(<W12MForm />);
		enterValues();
    const twoPlusTwo = screen.getByText('2 + 2 = 4');
    expect(twoPlusTwo).toBeInTheDocument();
  });

  test('Reason for sparing shows', () => {
		render(<W12MForm />);
		enterValues();
    const spare = screen.getByText(/Reason for sparing: because ummmmmmmmmmmmmmmmmmmmmmmm..../i);
    expect(spare).toBeInTheDocument();
	});

});