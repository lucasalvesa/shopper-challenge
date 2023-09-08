import styled from 'styled-components';

export const UploadSectionWrapper = styled.div`
  border: 2px dashed #ccc;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  align-items: center;
  cursor: pointer;
`;

export const ClearButton = styled.button`
  padding: 10px 10px;
  border: none;
  border-radius: 4px;  
  background-color: #ff4b4b;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  &:hover {
    color: #dd0000;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;