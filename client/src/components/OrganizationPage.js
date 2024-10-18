import React, { useState } from 'react';
import './OrganizationPage.css';

function OrganizationPage() {
  // Initial dummy data
  const [jobsCreated, setJobsCreated] = useState([
    {
      title: "Product/process development scientist",
      description: "Represent focus yourself assume always enjoy. Crime talk people. Start stay rise time.",
      date: "2024-08-06",
      maxHours: 50
    },
    {
      title: "Product/process development scientist",
      description: "Represent focus yourself assume always enjoy. Crime talk people. Start stay rise time.",
      date: "2024-08-06",
      maxHours: 50
    }
  ]);

  const [jobApplications, setJobApplications] = useState([
    {
      name: "andrew62",
      job: "Product/process development scientist",
      date: "2024-08-06",
      rating: 4.4
    },
    {
      name: "thomasbradley",
      job: "Product/process development scientist",
      date: "2024-08-06",
      rating: 4.6
    }
  ]);

  const [completedJobs, setCompletedJobs] = useState([
    {
      title: "Child psychotherapist",
      completedBy: "hatcher72"
    }
  ]);

  // Add a new job (triggered by the plus button)
  const addJob = () => {
    const newJob = {
      title: "New Job Title",
      description: "Job description here.",
      date: "2024-10-18",
      maxHours: 40
    };
    setJobsCreated([...jobsCreated, newJob]);
  };

  // Approve application (remove from list)
  const approveApplication = (index) => {
    // Removing the approved applicant from the job applications list
    const updatedApplications = jobApplications.filter((_, i) => i !== index);
    setJobApplications(updatedApplications);
  };
  

  // Reject application (remove from list)
  const rejectApplication = (index) => {
    const updatedApplications = jobApplications.filter((_, i) => i !== index);
    setJobApplications(updatedApplications);
  };

  // Mark job as completed (remove from created jobs)
  const markJobAsCompleted = (index) => {
    const completedJob = jobsCreated[index];
    setCompletedJobs([...completedJobs, completedJob]);
    const updatedJobs = jobsCreated.filter((_, i) => i !== index);
    setJobsCreated(updatedJobs);
  };

  return (
    <div className="organization-page">
      {/* Sidebar: Profile Info & Jobs Completed */}
      <div className="sidebar">
        <div className="profile-section">
          <img src="https://via.placeholder.com/80" alt="Profile" className="profile-pic" />
          <p className="profile-name">Mcgee, Myers and Co</p>
          <p className="profile-email">shawphyllis@exam.com</p>
          <p className="profile-website">Website: jimenez.com</p>
          <button className="logout-btn">LOGOUT</button>
          <button className="delete-btn">DELETE</button>
        </div>

        <div className="jobs-completed">
          <h3>Jobs Completed</h3>
          {completedJobs && completedJobs.length > 0 ? (
            completedJobs.map((job, index) => (
              <div key={index} className="completed-job">
                <p className="job-title">{job.title}</p>
                <p>Completed by: {job.completedBy}</p>
                <button className="cert-btn">Give certificate</button>
              </div>
            ))
          ) : (
            <p>No completed jobs available</p>
          )}
        </div>
      </div>

      {/* Main Content: Jobs Created & New Job Applications */}
      <div className="main-content">
        <div className="jobs-created">
          <h3>Jobs Created ({jobsCreated.length})</h3>
          {jobsCreated && jobsCreated.length > 0 ? (
            jobsCreated.map((job, index) => (
              <div key={index} className="job-card">
                <p className="job-title">{job.title}</p>
                <p>{job.description}</p>
                <p>Date: {job.date} • Maximum Hours required: {job.maxHours}</p>
                <button className="mark-completed-btn" onClick={() => markJobAsCompleted(index)}>
                  Mark Completed
                </button>
                <button className="delete-btn">DELETE</button>
              </div>
            ))
          ) : (
            <p>No jobs created yet</p>
          )}
          <button className="add-job-btn" onClick={addJob}>+ Add Job</button>
        </div>

        <div className="new-job-applications">
          <h3>New Job Applications ({jobApplications.length})</h3>
          {jobApplications && jobApplications.length > 0 ? (
            jobApplications.map((application, index) => (
              <div key={index} className="application-card">
                <p className="applicant-name">{application.name}</p>
                <p>Job applying for: {application.job}</p>
                <p>Date: {application.date} • Overall Rating: {application.rating}</p>
                <button className="approve-btn" onClick={() => approveApplication(index)}>
                  APPROVE
                </button>
                <button className="reject-btn" onClick={() => rejectApplication(index)}>
                  REJECT
                </button>
              </div>
            ))
          ) : (
            <p>No new job applications</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrganizationPage;
