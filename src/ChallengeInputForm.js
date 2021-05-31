import React from 'react';
import { useFormik } from 'formik';

const ChallengeInputForm = () => {
  const formik = useFormik({
    initialValues: {
      challengeSegment: '',
      challengeStartDate: new Date(),
      challengeEndDate: new Date(),
      challengePassphrase: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div>
      <h3>Open a new challenge:</h3>
      <form id="challengeInputForm" onSubmit={formik.handleSubmit}>
        <div class="form-group">
          <label for="challengeSegment">Link to Strava segment </label>
          <input
            type="text"
            id="challengeSegment"
            onChange={formik.handleChange}
            value={formik.values.challengeSegment} 
            placeholder="Link to Strava segment"/>
        </div>
        <div class="form-group">
          <label for="challengeStartDate">Challenge start date </label>
          <input
            type="date"
            id="challengeStartDate"
            onChange={formik.handleChange}
            value={formik.values.challengeStartDate} />
        </div>
        <div class="form-group">
          <label for="challengeEndDate">Challenge end date </label>
          <input
            type="date"
            id="challengeEndDate"
            onChange={formik.handleChange}
            value={formik.values.challengeEndDate} />
        </div>
        <div class="form-group">
          <label for="challengePassphrase">Passphrase to enter challenge (auto-generated if left empty) </label>
          <input
            type="text"
            id="challengePassphrase"
            onChange={formik.handleChange}
            value={formik.values.challengePassphrase} 
            placeholder="Passphrase to enter challenge"/>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ChallengeInputForm;