import React from "react";
import womenIcon from     '../assets/women.png'
import '../css/Therapy.css'

function TherapistHelp() {
  // Array of therapist data
  const therapists = [
    {
      name: "John Doe",
      specialization: "Anxiety and Stress Management",
      description: "John has 10 years of experience in helping individuals overcome anxiety and manage stress.",
      // image:{womenIcon}, // Placeholder image path
    },
    {
      name: "Jane Smith",
      specialization: "Relationship Therapy",
      description: "Jane specializes in relationship counseling, focusing on communication and trust-building.",
      // image: {womenIcon}, // Placeholder image path
    },
    {
      name: "Emily Johnson",
      specialization: "Depression Counseling",
      description: "Emily is an expert in supporting individuals with depression through therapy and guidance.",
      // image: {womenIcon}, // Placeholder image path
    },
  ];

  return (
    <>
      <section className="therapist-help-section">
        <div className="therapist-help-header">
          <h2>Ask Therapist</h2>
          <p>Browse professional therapists available to help you via messaging or video call.</p>
        </div>

        {/* Mapping through the array of therapists to display their profile */}
        {therapists.map((therapist, index) => (
          <div className="therapist-profile" key={index}>
            <div className="therapist-image">
              <img src={womenIcon}alt={therapist.name} />
            </div>
            <div className="therapist-info">
              <h2>{therapist.name}</h2>
              <p>
                <span>Specialization:</span> {therapist.specialization}
              </p>
              <p>{therapist.description}</p>
              <div className="therapist-actions">
                <button className="therapy-button">Therapist help</button>
                <button className="donate-button">Donate</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default TherapistHelp;
