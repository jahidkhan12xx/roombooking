import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const YourExistingComponent = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleBooking = () => {
    // Perform the booking logic here using selectedRoom and selectedDate
    console.log(`Room ID: ${selectedRoom}, Date: ${selectedDate}`);
    // Make API calls, perform validations, etc.
  };

  return (
    <div>
      <h1>Your Existing Component</h1>
      {/* Your existing component content goes here */}
      {/* Room selection dropdown */}
      <label>Select a Room:</label>
      <select value={selectedRoom} onChange={(e) => handleRoomSelection(e.target.value)}>
        <option value="">Select a room</option>
        <option value="room1">Room 1</option>
        <option value="room2">Room 2</option>
        {/* Add your list of rooms dynamically if available */}
      </select>

      {/* Date picker */}
      <label>Select Booking Date:</label>
      <DatePicker selected={selectedDate} onChange={date => handleDateSelection(date)} />

      {/* Button to perform the booking */}
      <button onClick={handleBooking}>Book Room</button>
    </div>
  );
};

export default YourExistingComponent;
