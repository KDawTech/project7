// src/pages/CreateCrewmate.js
import React, { useState } from 'react';
import supabase from '../supabaseClient';

const CreateCrewmate = () => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('crewmates').insert([{ name, speed: parseInt(speed), color }]);
    if (error) {
      alert('Insert failed: ' + error.message);
    } else {
      alert('Crewmate added!');
      setName('');
      setSpeed('');
      setColor('');
    }
  };

  return (
    <div>
      <h2>Create a New Crewmate</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Speed" value={speed} onChange={(e) => setSpeed(e.target.value)} required />
        <select value={color} onChange={(e) => setColor(e.target.value)} required>
          <option value="">Pick a color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Pink">Pink</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCrewmate;
