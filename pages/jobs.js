import React, { useEffect, useState } from 'react';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch job data and update state
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Make an API request to fetch job data
        const response = await fetch('https://documenter.getpostman.com/view/18545278/UVJbJdKh');
        const data = await response.json();

        // Update the state with the fetched job data
        setJobs(data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobs();
  }, []);

  // Pagination logic...

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search term change
  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Jobs Page</h1>

      {/* Search input */}
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} placeholder="Search jobs" />

      {/* Render the job listings based on the current page and filtered data */}
      {filteredJobs.length > 0 ? (
        currentJobs.map(job => (
          <div key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            {/* Additional job information */}
          </div>
        ))
      ) : (
        <p>No jobs found.</p>
      )}

      {/* Pagination buttons */}
      {jobs.length > jobsPerPage && (
        <div>
          {Array.from({ length: Math.ceil(filteredJobs.length / jobsPerPage) }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsPage;



