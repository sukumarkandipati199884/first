import React from 'react';

const sampleApplications = [
  { id: 1, applicant: 'John Doe', jobTitle: 'Frontend Developer', status: 'Pending' },
  { id: 2, applicant: 'Jane Smith', jobTitle: 'Backend Developer', status: 'Interview Scheduled' }
];

function Applications() {
  return (
    <div>
      <h2>Applications</h2>
      <ul>
        {sampleApplications.map(application => (
          <li key={application.id}>
            <p>{application.applicant} applied for {application.jobTitle} - Status: {application.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Applications;
