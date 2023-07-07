import React, { useState } from 'react';

const SavedJobsPage = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  const handleRemoveSavedJob = jobId => {
    // Remove the job from the saved jobs list
    setSavedJobs(prevSavedJobs => prevSavedJobs.filter(job => job.id !== jobId));
  };

  return (
    <div>
      <h1>Saved Jobs Page</h1>
      {savedJobs.length === 0 ? (
        <p>No saved jobs</p>
      ) : (
        savedJobs.map(job => (
          <div key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <button onClick={() => handleRemoveSavedJob(job.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedJobsPage;
