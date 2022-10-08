import { ButtonContainer } from './style';

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} aria-label="click for other advice">
      <img src="/imgs/icon-dice.svg" alt="dice" aria-hidden />
    </ButtonContainer>
  );
};

export default Button;
