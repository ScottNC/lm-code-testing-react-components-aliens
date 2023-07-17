import { fireEvent, render, screen } from '@testing-library/react';
import W12MForm from '../W12MForm';

test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');
});

describe('submit button', () => {

	const enterValues = () => {
		const button = screen.getByRole('button');

		const speciesInput = screen.getByLabelText(/Species Name:/i);
		fireEvent.change(speciesInput, {target: {value: 'Wookie'}});

		const planetInput = screen.getByLabelText(/Planet Name:/i);
		fireEvent.change(planetInput, {target: {value: 'Kashyyyk'}});

		const beingsInput = screen.getByLabelText(/Number of Beings:/i);
		fireEvent.change(beingsInput, {target: {value: 500}});

		const sumInput = screen.getByLabelText('What is 2 + 2?');
		fireEvent.change(sumInput, {target: {value: '4'}});

		const spareInput = screen.getByLabelText(/Reason for Sparing:/i);
		fireEvent.change(spareInput, {target: {value: 'because ummmmmmmmmmmmmmmmmmmmmmmm....'}});

		fireEvent.click(button);
	}

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
    const beings = screen.getByText(/Number of Beings: 500/i);
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