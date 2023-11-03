const homeModel = require('../models/home'); // Assuming you have a model named 'Event'

const getEvents = async (req, res) => {
  try {
    const events = await homeModel.find(); // Retrieve all events from the database

    const markers = [];

    for (const event of events) {
      const eventData = {
        eventName: event.eventName,
        eventDate: event.eventDate,
        eventTime: event.eventTime,
        address: event.address,
        details: event.details,
      };

      try {
        const locationResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(eventData.address)}`);
        const locationData = await locationResponse.json();

        if (locationData.length > 0) {
          const location = locationData[0];
          const latitude = location.lat;
          const longitude = location.lon;

          const marker = {
            title: eventData.eventName,
            date: eventData.eventDate,
            address: eventData.address,
            latitude,
            longitude,
          };

          markers.push(marker);
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    }

    res.json({ events, markers });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = getEvents;
