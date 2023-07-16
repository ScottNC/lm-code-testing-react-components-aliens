import { render, screen } from '@testing-library/react';
import { Answers } from '../W12Answers';

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

describe('Render Answer test when show is false', () => {
  test('Species don\'t show', () => {
    render(<Answers show={false} allAnswers={answersExample} />);
    expect(() => screen.getByText(/Species Name: Dalek/i)).toThrow();
  });

  test('Planet doesn\'t show', () => {
    render(<Answers show={false} allAnswers={answersExample} />);
    expect(() => screen.getByText(/Planet Name: Skaro/i)).toThrow();
  });

  test('Number of Beings don\'t show', () => {
    render(<Answers show={false} allAnswers={answersExample} />);
    expect(() => screen.getByText(/Number of Beings: 1000/i)).toThrow();
  });

  test('2+2=4 doesn\'t show', () => {
    render(<Answers show={false} allAnswers={answersExample} />);
    expect(() => screen.getByText('2 + 2 = 4')).toThrow();
  });

  test('Reason for sparing doesn\'t show', () => {
    render(<Answers show={false} allAnswers={answersExample} />);
    expect(() => screen.getByText(/Reason for sparing: Exterminate! Exterminate!/i)).toThrow();
  });
});
