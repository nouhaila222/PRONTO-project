import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFile } from 'fs/promises';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/products', async (req, res) => {
    try {
        const data = await readFile(resolve(__dirname, 'db', 'product.json'), 'utf-8');
        const products = JSON.parse(data);
        res.json(products.products); // إرجاع قائمة المنتجات فقط
    } catch (error) {
        console.error('Error reading the file:', error);
        res.status(500).send('Error reading the product data.');
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});