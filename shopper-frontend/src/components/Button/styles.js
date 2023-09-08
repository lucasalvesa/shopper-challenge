import styled from 'styled-components';

const hoverStyle = `
  &:hover {
    background-color: #0dab77;
  }
  `;
const disabledStyle = `
  background-color: #ccc;
  cursor: not-allowed;
  border: 2px solid #0dab77;
  `;

export const StyledButton = styled.button`
  background-color: #00b780;
  color: #fff;
  padding: 20px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${(props) => !props.disabled && hoverStyle}

  ${(props) => props.disabled && disabledStyle}
  }
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;
