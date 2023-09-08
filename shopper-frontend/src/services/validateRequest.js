const validateRequest = (uploadedFile, setIsDisabled) => {
  const apiURL = 'http://localhost:8080';

  const formData = new FormData();
  formData.append('file', uploadedFile);

  const requestOptions = {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
    },
  };

  fetch(`${apiURL}/validate-csv/`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Request error');
      } else {
        setIsDisabled(false);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default validateRequest;
