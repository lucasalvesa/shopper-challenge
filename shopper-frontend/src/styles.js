import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 30px;
    background: #fff;
    border-radius: 4px;
    border: 3px solid #0dab77;
    padding: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #0dab77;
  margin-top: 16px;
`;