import { ButtonContainer } from './style';

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <img src="/imgs/icon-dice.svg" alt="dice" />
    </ButtonContainer>
  );
};

export default Button;
