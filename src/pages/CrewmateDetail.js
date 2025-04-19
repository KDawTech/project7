import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import supabase from "../supabaseClient";

const CrewmateDetail = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error("Error fetching crewmate:", error);
      else setCrewmate(data);
    };

    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <p>Loading crewmate...</p>;

  return (
    <div className="page">
      <h2>Crewmate: {crewmate.name}</h2>
      <h3>Stats:</h3>
      <p>Color: {crewmate.color}</p>
      <p>Speed: {crewmate.speed} mph</p>

      <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
        You may want to find a Crewmate with more speed, this one is kind of slow 😅
      </p>

      <Link to={`/edit/${crewmate.id}`}>
        <button>Edit Crewmate</button>
      </Link>
    </div>
  );
};

export default CrewmateDetail;

