import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Ensure node-fetch is installed
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.VITE_API_KEY;
const pageSize = 21;
const page = 1;
const country = 'us';

app.get('/api/news', async (req, res) => {
    const { category } = req.query;
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
      
      if (category) {
        url += `&category=${category}`;
      }
  
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching news:', error);
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  });  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
