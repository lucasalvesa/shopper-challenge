const validateRequest = (file, setData) => {
  const apiURL = 'http://localhost:8080';

  const formData = new FormData();
  formData.append('file', file);

  const requestOptions = {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
    },
  };

  fetch(`${apiURL}/upload-csv/`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Request error');
      }
      return setData(response.json());
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default validateRequest;
