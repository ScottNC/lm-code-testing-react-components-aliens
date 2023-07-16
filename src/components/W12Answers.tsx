import {AllAnswers} from './W12MForm';

interface AnswerProps {
  show: boolean;
	allAnswers: AllAnswers;
}

export const Answers : React.FC<AnswerProps> = ({show, allAnswers}) => {
  if (show)
    return (
    <div>
      <p>Species Name: {allAnswers.speciesName}</p>
      <p>Planet Name: {allAnswers.planetName}</p>
      <p>Number of Beings: {allAnswers.beings}</p>
      <p>2 + 2 = {allAnswers.sum}</p>
      <p>Reason for sparing: {allAnswers.spare}</p>
    </div>
    )
  else
    return <></> 
}

