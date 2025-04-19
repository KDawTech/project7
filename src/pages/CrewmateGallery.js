import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { Link } from "react-router-dom";

const CrewmateGallery = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from("crewmates")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Fetch error:", error);
      else setCrewmates(data);
    };

    fetchCrewmates();
  }, []);

  return (
    <div className="page">
      <h2>Your Crewmate Gallery!</h2>
      {crewmates.length === 0 ? (
        <p>You haven’t made a crewmate yet!</p>
      ) : (
        <div className="gallery">
          {crewmates.map((c) => (
            <div className="card" key={c.id}>
              <h3>Name: {c.name}</h3>
              <p>Speed: {c.speed} mph</p>
              <p>Color: {c.color}</p>
              <Link to={`/detail/${c.id}`}>View</Link>
              <Link to={`/edit/${c.id}`}>Edit</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CrewmateGallery;
