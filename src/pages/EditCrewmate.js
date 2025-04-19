// src/pages/EditCrewmate.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';

const EditCrewmate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('Red');

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select()
        .eq('id', id)
        .single();
      if (error) {
        alert('Fetch failed');
      } else {
        setName(data.name);
        setSpeed(data.speed);
        setColor(data.color);
      }
    };
    fetchCrewmate();
  }, [id]);

  const handleUpdate = async () => {
    const { error } = await supabase
      .from('crewmates')
      .update({ name, speed, color })
      .eq('id', id);
    if (error) alert('Update failed');
    else {
      alert('Updated!');
      navigate('/');
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase
      .from('crewmates')
      .delete()
      .eq('id', id);
    if (error) alert('Delete failed');
    else {
      alert('Deleted');
      navigate('/');
    }
  };

  return (
    <div className="edit-page">
      <h2>Edit Crewmate</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        placeholder="Speed"
      />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Pink</option>
        <option>Orange</option>
        <option>Purple</option>
      </select>
      <br />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </div>
  );
};

export default EditCrewmate;

