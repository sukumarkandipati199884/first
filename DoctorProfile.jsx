import React from 'react';
import { useParams } from 'react-router-dom';

function DoctorProfile() {
  const { id } = useParams();

  return (
    <div>
      <h2>Doctor Profile</h2>
      <p>Details for doctor with ID: {id}</p>
    </div>
  );
}

export default DoctorProfile;