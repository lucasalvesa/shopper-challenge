import React, { useState } from 'react';

import UploadSection from './components/UploadSection';
import Header from './components/Header';
import Button from './components/Button';
import validateRequest from './services/validateRequest';
import updateRequest from './services/updateRequest';
import GlobalStyle from './styles/global';
import { Container, Content, ButtonWrapper } from './styles';

const App = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [hasFile, setHasFile] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [data, setData] = useState([]);

  const resetPage = () => {
    setHasFile(false);
    setIsDisabled(true);
    setUploadedFile(null);
  };

  const handleValidation = () => {
    if (!uploadedFile) return;
    validateRequest(uploadedFile, setIsDisabled);
  };

  const handleUpdate = () => {
    if (!uploadedFile) return;
    updateRequest(uploadedFile, setData);
    resetPage();
  };

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content>
        <UploadSection
          setHasFile={setHasFile}
          setUploadedFile={setUploadedFile}
        />
      </Content>
      <ButtonWrapper>
        <Button
          text={'Validar'}
          onClick={handleValidation}
          isDisabled={!hasFile}
        />
        <Button
          text={'Atualizar'}
          onClick={handleUpdate}
          isDisabled={isDisabled}
        />
      </ButtonWrapper>
      {data.length > 0 && (
        <Text>
          Sucesso! {data.length} registros atualizados.
        </Text>
      )}
    </Container>
  );
};

export default App;
