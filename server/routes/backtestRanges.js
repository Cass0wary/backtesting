const express = require('express');
const router = express.Router();
// const { Client } = require('@elastic/elasticsearch');
const client = require('../elasticsearchClient');

// Create a function to generate a unique ID for each event
function generateEventId(event) {
  return `${event.ticker}_${event.timestamp}_${event.position}`;
}

timezone = "Australia/Brisbane"

// POST request handler for backtests-ranges form
router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const eventId = generateEventId(body);

    const result = await client.index({
      index: 'backtests-ranges-000001',
      id: eventId, // Use the generated ID as the document ID
      body: body,
    });

    res.status(201).json({ message: 'Data submitted successfully', result });
  } catch (error) {
    console.error('Error submitting data to Elasticsearch:', error);
    res.status(500).json({ message: 'An error occurred while submitting data' });
  }
});

module.exports = router;
