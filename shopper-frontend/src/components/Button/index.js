import React from 'react';
import { StyledButton, Text } from './styles.js';

const Button = ({ text, onClick, isDisabled }) => {
  return (
    <StyledButton onClick={() => onClick()} disabled={isDisabled}>
      <Text>{text}</Text>
    </StyledButton>
  );
};

export default Button;
