const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5001;

// Cors settings so front-end can access API
app.use(cors({
    origin: "http://localhost:3000"
}));

app.get('/Comic', async (req, res) => {
    const url = 'https://xkcd.com/info.0.json';
    try {
       const data = await axios.get(url);
       res.status(200).json(data.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/Comic/:number', async (req, res) => {
    const { number } = req.params;
    const url = `https://xkcd.com/${number}/info.0.json`;
    try {
        const data = await axios.get(url);
        res.status(200).json(data.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }  
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});