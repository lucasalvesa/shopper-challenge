import React, { useEffect, useState } from 'react';
import { UploadSectionWrapper, ClearButton, ButtonWrapper } from './styles';

const UploadSection = ({ setHasFile, setUploadedFile }) => {
  const [file, setFile] = useState(null);
  const [wrongExtension, setWrongExtension] = useState(false);

  useEffect(() => {
    if(file && file.type === 'text/csv') {
      setUploadedFile(file);
      setHasFile(true);
    } else {
      setUploadedFile(null);
      setHasFile(false);
    }
    setWrongExtension(false);
  }, [file, setHasFile]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile.type !== 'text/csv') {
      setWrongExtension(true);
      return;
    };
    setFile(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClearFile = () => {
    setFile(null);
  };

    return (
    <div>
      {!file && (
        <UploadSectionWrapper
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => document.getElementById('fileInput').click()}
        >
          Arraste e solte o arquivo .csv ou clique aqui para selecionar um.
        </UploadSectionWrapper>
      )}
      <input
        id='fileInput'
        type='file'
        accept='text/csv'
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {file && (
        <div>
          Arquivo selecionado: {file.name}
          <ButtonWrapper>
            <ClearButton onClick={handleClearFile}>Remover arquivo</ClearButton>
          </ButtonWrapper>
        </div>
      )}
      {wrongExtension && (
        <div>
          Este arquivo não possui a extensão correta. Por favor, selecione um arquivo .csv.
        </div>
      )}
    </div>
  );
};

export default UploadSection;
