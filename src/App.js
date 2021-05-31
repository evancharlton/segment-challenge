import './App.css';
import ChallengeInputForm from './ChallengeInputForm.js';

function App() {
  return (
    <div className="stravaChallenge">
      <h1>The Strava Challenge</h1>
      <div className="challengeInputForm">
        <ChallengeInputForm />
      </div>
      <div className="challengeList">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
      <div class="footer">
        <p>&copy; alexdiem.io</p>
      </div>
    </div>
  );
}

export default App;
