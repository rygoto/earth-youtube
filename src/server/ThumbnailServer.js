import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

app.get('/proxy', async (req, res) => {
    const url = req.query.url;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.error('Error status code:', response.status);
            return res.status(response.status).send('Error retrieving content.');
        }

        const buffer = await response.buffer();
        const contentType = response.headers.get('content-type') || 'application/octet-stream';

        res.header('Content-Type', contentType);
        res.send(buffer);
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).send('Error retrieving content.');
    }
});

app.listen(port, () => console.log(`Proxy server running on port ${port}!`));