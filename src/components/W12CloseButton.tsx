interface CloseProps {
  show: boolean;
  setAnswer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CloseButton: React.FC<CloseProps> = ({show, setAnswer}) => {
  if (show)
    return (
      <button type="button" onClick={
        () => {
          setAnswer(() => false);
        }
      }>Close Response </button>
    );

  return <></>;
}
