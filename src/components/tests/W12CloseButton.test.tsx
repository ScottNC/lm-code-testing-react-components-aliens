import { fireEvent, render, screen } from "@testing-library/react";
import W12MForm from "../W12MForm";
import { enterValues } from "./W12MForm.test";
import { CloseButton } from "../W12CloseButton";

describe('close button', () => {

  test('close button exists when show is true', () => {
    const setAnswer = jest.fn;
    render(<CloseButton show={true} setAnswer={setAnswer}/>);
    const closeButton = screen.getByText('Close Response');
    expect(closeButton).toBeInTheDocument();
  })

  test('close button doesn\'t exist when show is false', () => {
    const setAnswer = jest.fn;
    render(<CloseButton show={false} setAnswer={setAnswer}/>);
    expect(() => screen.getByText('Close Response')).toThrow();
  })

  test('close button doesn\'t exist when document starts', () => {
    render(<W12MForm />);
    expect(() => screen.getByText('Close Response')).toThrow();
  })

  test('close button does exist when form is submitted', () => {
    render(<W12MForm />);
    enterValues();
    const closeButton = screen.getByText('Close Response');
    expect(closeButton).toBeInTheDocument();
  })

  test('close button closes species', () => {
    render(<W12MForm />);
		enterValues();
    const closeButton = screen.getByText('Close Response');
    fireEvent.click(closeButton);
    expect(() => screen.getByText(/Species Name: Wookie/i)).toThrow();
  })

  test('close button closes planet', () => {
    render(<W12MForm />);
		enterValues();
    const closeButton = screen.getByText('Close Response');
    fireEvent.click(closeButton);
    expect(() => screen.getByText(/Planet Name: Kashyyyk/i)).toThrow();
  })

  test('close button closes being', () => {
    render(<W12MForm />);
		enterValues();
    const closeButton = screen.getByText('Close Response');
    fireEvent.click(closeButton);
    expect(() => screen.getByText(/Number of Beings: 50000000000/i)).toThrow();
  })

  test('close button closes sum', () => {
    render(<W12MForm />);
		enterValues();
    const closeButton = screen.getByText('Close Response');
    fireEvent.click(closeButton);
    expect(() => screen.getByText('2 + 2 = 4')).toThrow();
  })

  test('close button closes reason', () => {
    render(<W12MForm />);
		enterValues();
    const closeButton = screen.getByText('Close Response');
    fireEvent.click(closeButton);
    expect(() => screen.getByText(/Reason for sparing: because ummmmmmmmmmmmmmmmmmmmmmmm..../i)).toThrow();
  })
});
