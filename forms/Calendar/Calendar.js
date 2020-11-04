/*
const express = require('express');
const { google } = require('googleapis');

const app = express();
const port = 3000;

const SCOPES = 'https://calendar.google.com/calendar/u/0?cid=NnVrZzV0N3R1MzFvZW8wOWVnN2hsMXZ0aGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ';
const GOOGLE_PROJECT_NUMBER = "41274600246"
const GOOGLE_CALENDAR_ID = "6ukg5t7tu31oeo09eg7hl1vthg@group.calendar.google.com"

app.get('/', (req, res) => {
  const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES
  );

  const calendar = google.calendar({
    version: 'v3',
    project: GOOGLE_PROJECT_NUMBER,
    auth: jwtClient
  });

  calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (error, result) => {
    if (error) {
      res.send(JSON.stringify({ error: error }));
    } else {
      if (result.data.items.length) {
        res.send(JSON.stringify({ events: result.data.items }));
      } else {
        res.send(JSON.stringify({ message: 'No upcoming events found.' }));
      }
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
*/