const express = require('express');
const { OpenAI } = require('@openai/openai-api');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();
const port = 3000;

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // Serve your HTML page here
});

app.post('/message', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await openai.complete({
      engine: 'davinci', // or any other engine you prefer
      prompt: userMessage,
      maxTokens: 150,
    });

    const botMessage = response.data.choices[0].text.trim();

    res.json({ botMessage });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error processing your message');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
