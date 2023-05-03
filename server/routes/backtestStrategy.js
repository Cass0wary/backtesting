const express = require('express');
const router = express.Router();

const client = require('../elasticsearchClient');

// Create a function to generate a unique ID for each event
function generateEventId(event) {
  return `${event.ticker}_${event.timestamp}_${event.position}`;
}
  


router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const eventId = generateEventId(body);

    // Insert data into the backtests-strategies index
    const response = await client.index({
      index: 'backtests-strategies-000001',
      id: eventId, // Use the generated ID as the document ID
      body: body,
    });

    res.status(201).json({
      message: 'Data submitted successfully',
      result: response,
    });
  } catch (error) {
    console.error('Error submitting data:', error);
    res.status(500).json({
      message: 'An error occurred while submitting the data',
      error: error.message,
    });
  }
});

module.exports = router;
