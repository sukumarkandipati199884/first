import React from 'react';

const sampleJobs = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote' },
  { id: 2, title: 'Backend Developer', company: 'Innovate Ltd', location: 'New York' }
];

function JobListings() {
  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {sampleJobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobListings;
