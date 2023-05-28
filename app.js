const express = require('express');
const app = express();
const port = 3000;

// GET endpoint to get events by type, limit, and page
app.get('/events', (req, res) => {
  const { type, limit, page } = req.query;
  // Implement logic to fetch events based on type, limit, and page
  // Example response with paginated events
  const events = [
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 3, name: 'Event 3' },
    // ...
  ];
  res.json({ events });
});

// POST endpoint to create an event
app.post('/events', (req, res) => {
  const { name, files, tagline, schedule, description, moderator, category, sub_category, rigor_rank } = req.body;
  // Implement logic to create a new event with the provided details
  // Example response with the created event's id
  const createdEvent = { id: 1, name: 'New Event' };
  res.json({ eventId: createdEvent.id });
});

// DELETE endpoint to delete an event by id
app.delete('/events/:id', (req, res) => {
  const eventId = req.params.id;
  // Implement logic to delete the event with the provided id
  // Example response after successful deletion
  res.json({ message: `Event ${eventId} deleted successfully` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
