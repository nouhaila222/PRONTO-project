import express from 'express';
import { readFile } from 'fs/promises';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/products', async (req, res) => {
    try {
        const data = await readFile(new URL('./db/product.json', import.meta.url), 'utf-8');
        const product = JSON.parse(data);  
        res.json(product);  
    } catch (error) {
        console.error('Error reading the file:', error);
        res.status(500).send('Error reading the product data.');
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
