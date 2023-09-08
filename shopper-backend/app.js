import express from 'express';
import multer from 'multer';
import cors from 'cors';

import { checkExtension, validateCsv, updateProduct } from './commands.js';

const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: false,
};
app.use(cors(corsOptions));

const upload = multer({ dest: 'tmp/csv/' });

app.post('/validate-csv/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      error: 'Please make sure to upload a file.',
    });
  }

  const isCsv = checkExtension(req.file);
  if (!isCsv) {
    return res.status(400)
      .json({ error: 'Invalid file format. Please upload a .csv file.' });
  }
  
  try {
    const { isValid, results } = await validateCsv(req.file);
    if (isValid) { 
      res.status(200).json({ message: 'CSV file validated successfully!', data: results });
    } else {
      res.status(400).json({ error: 'No valid data found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.post('/upload-csv/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      error: 'Please, make sure to upload a file.',
    });
  }

  try {
    const { isValid, results } = await validateCsv(req.file);
    if (isValid) { 
      for (const result of results) {
        await updateProduct(result);
        res.status(200).json({ message: 'CSV file uploaded successfully!', data: results });
      }
    } else {
      res.status(400).json({ error: 'No valid data found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(8080, () => {
  console.log('~> Server is up and running, listening on port 8080!');
});
