import fastcsv from 'fast-csv';
import fs from 'fs';

import pool from './database.js';

export const getProductByCode = async (id) => {
  const [rows] = await pool.query(
    `
      SELECT cost_price, sales_price
      FROM products
      WHERE code = ?`,
    [id]
  );

  return rows[0];
};

export const productCodeExists = async (id) => {
  const [rows] = await pool.query(
    `
      SELECT code
      FROM products
      WHERE code = ?`,
    [id]
  );

  return rows.length > 0 ? true : false;
};

export const updateProduct = async (object) => {
  const { productCode, newPrice } = object;
  const product = await getProductByCode(productCode);

  if (
    newPrice < product.cost_price ||
    newPrice >= 1.1 * product.sales_price ||
    newPrice <= 0.9 * product.sales_price
  )
    return 'Invalid price';

  const modifiedProduct = await pool.query(
    `
      UPDATE products
      SET sales_price = ?
      WHERE code = ?`,
    [newPrice, productCode]
  );

  return modifiedProduct;
};

export const checkExtension = (file) => {
  const allowedExtensions = '.csv';
  const uploadedFileName = file.originalname;
  const fileExtension = uploadedFileName.split('.').pop().toLowerCase();

  return allowedExtensions.includes(fileExtension) ?  true : false;
};

export const validateCsv = (file) => {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(file.path, { encoding: 'utf8' });
    const results = [];

    stream
      .pipe(fastcsv.parse({ headers: true }))
      .on('data', (row) => {
        const productCode = parseInt(row.product_code);
        const newPrice = parseFloat(row.new_price);
        if (
          isNaN(productCode) ||
          isNaN(newPrice) ||
          typeof productCode !== 'number' ||
          typeof newPrice !== 'number'
        )
          return;

        const productIsValid = productCodeExists(productCode);
        productIsValid
          ? results.push({ productCode, newPrice })
          : results.push({ productCode, error: 'Invalid product code.' });
      })
      .on('end', () => {
        fs.unlinkSync(file.path);
        const isValid = results.length > 0;
        resolve({ isValid, results });
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};
