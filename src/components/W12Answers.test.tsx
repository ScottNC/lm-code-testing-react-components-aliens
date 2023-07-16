import { render, screen } from '@testing-library/react';
import { Answers } from './W12Answers';

const answersExample = {
  speciesName : 'Dalek',
	planetName : 'Skaro',
	beings : 1000,
	sum: '4',
	spare: 'Exterminate! Exterminate!'
}

describe('Render Answer test when show is true', () => {
  test('Species shows', () => {
    render(<Answers show={true} allAnswers={answersExample} />);
    const species = screen.getByText(/Species Name: Dalek/i);
    expect(species).toBeInTheDocument();
  });

  test('Planet shows', () => {
    render(<Answers show={true} allAnswers={answersExample} />);
    const planet = screen.getByText(/Planet Name: Skaro/i);
    expect(planet).toBeInTheDocument();
  });

  test('Number of Beings show', () => {
    render(<Answers show={true} allAnswers={answersExample} />);
    const beings = screen.getByText(/Number of Beings: 1000/i);
    expect(beings).toBeInTheDocument();
  });

  test('2+2=4 shows', () => {
    render(<Answers show={true} allAnswers={answersExample} />);
    const twoPlusTwo = screen.getByText('2 + 2 = 4');
    expect(twoPlusTwo).toBeInTheDocument();
  });

  test('Reason for sparing shows', () => {
    render(<Answers show={true} allAnswers={answersExample} />);
    const beings = screen.getByText(/Reason for sparing: Exterminate! Exterminate!/i);
    expect(beings).toBeInTheDocument();
  });
});
