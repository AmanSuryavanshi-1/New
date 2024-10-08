import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Ensure node-fetch is installed
import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.VITE_NEWS_API_KEY;
const pageSize = 24;
const page = 1;
const country = 'in';

//~ server.js for avoiding CORS requests for fetching news based categories
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

//~ server.js for avoiding CORS requests for fetching news based on search term
app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  try{
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&pageSize=${pageSize}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ error: 'Failed to fetch search results' });
  }
})

//~ Fetching Notion data getting CORS issue for private data
const notion = new Client({ auth: process.env.VITE_NOTION_API_KEY });

app.get('/api/notion-page/:pageId', async (req, res) => {
  try {
    const response = await notion.pages.retrieve({ page_id: req.params.pageId });
    res.json(response);
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    res.status(500).json({ error: 'Failed to fetch Notion page', details: error.message });
  }
});

// Adding new endpoint in backend to fetch page content
app.get('/api/notion-blocks/:pageId', async (req, res) => {
  try {
    const blocks = await notion.blocks.children.list({
      block_id: req.params.pageId,
      page_size: 100,
    });
    res.json(blocks);
  } catch (error) {
    console.error('Error fetching Notion blocks:', error);
    res.status(500).json({ error: 'Failed to fetch Notion blocks', details: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
