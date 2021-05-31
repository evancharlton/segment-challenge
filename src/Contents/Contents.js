import { useStrava } from '../StravaContainer';
import ChallengeInputForm from './ChallengeInputForm';

const Contents = () => {
  const token = useStrava();

  return (
    <div className="stravaChallenge">
      <h1>The Strava Challenge</h1>
      <div>Your Strava token is: {token}</div>
      <div className="challengeInputForm">
        <ChallengeInputForm />
      </div>
      <div className="challengeList">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
      <div className="footer">
        <p>&copy; alexdiem.io</p>
      </div>
    </div>
  );
};

export default Contents;
