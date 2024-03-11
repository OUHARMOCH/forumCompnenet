import React, { useState } from 'react';
import './FormComponent.css'; // Import the CSS file

const FormComponent = () => {
  const [subjects, setSubjects] = useState('');
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  const [lessonsTaught, setLessonsTaught] = useState('');
  const [aboutYou, setAboutYou] = useState('');
  const [location, setLocation] = useState('');
  const [locationPreference, setLocationPreference] = useState('');
  const [levels, setLevels] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');

  const handleSubjectsChange = (e) => {
    setSubjects(e.target.value);
  };

  const handleHeadlineChange = (e) => {
    setHeadline(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLessonsTaughtChange = (e) => {
    setLessonsTaught(e.target.value);
  };

  const handleAboutYouChange = (e) => {
    setAboutYou(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLocationPreferenceChange = (e) => {
    setLocationPreference(e.target.value);
  };

  const handleLevelsChange = (e) => {
    setLevels(e.target.value);
  };

  const handleHourlyRateChange = (e) => {
    setHourlyRate(e.target.value);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { subjects, headline, description, lessonsTaught, aboutYou, location, locationPreference, levels, hourlyRate });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h4>Complete your information</h4>
      <p>Briefly tell potential students what you teach and what your lessons are like:</p>
      <div className="size">
        <div className="form-row">
          <label className="label">
            <span>Subject:</span>
            <input
              type="text"
              value={subjects}
              onChange={handleSubjectsChange}
              placeholder=""
            />
          </label>
        </div>
        <div className="form-row">
          <label className="label">
            <span>Headline:</span>
            <input
              type="text"
              value={headline}
              onChange={handleHeadlineChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="label">
            <span>Description:</span>
            <textarea
              className="textarea-input"
              value={description}
              onChange={handleDescriptionChange}
            />
            
          </label>
        </div> 
        <div className="form-row">
          <label className="label">
            <span>Lessons Taught:</span>
            <input
              type="text"
              value={lessonsTaught}
              onChange={handleLessonsTaughtChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="label">
            <span>About You:</span>
            <textarea
              className="textarea-input"
              value={aboutYou}
              onChange={handleAboutYouChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="label">
            <span>Location:</span>
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="label">
            <span>Location Preference:</span>
            <input
              type="text"
              value={locationPreference}
              onChange={handleLocationPreferenceChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="label">
            <span>Levels:</span>
            <input
              type="text"
              value={levels}
              onChange={handleLevelsChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="label">
            <span>Hourly Rate:</span>
            <input
              type="text"
              value={hourlyRate}
              onChange={handleHourlyRateChange}
            />
          </label>
        </div>
        <button className='button'>Post my ad now</button>
      </div>
    </form>
  );
};

export default FormComponent;
