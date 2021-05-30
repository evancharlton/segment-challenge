import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  
class ChallengeInputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            challengeId: 0,
            challengeSegment: '',
            challengeStartDate: new Date(),
            challengeEndDate: new Date(),
            challengePassphrase: ''
        };
    }
  
    render() {
        return (
            <div>
                <h3>Open a new challenge:</h3>
                <form id="challengeInputForm">
                <div class="form-group">
                    <label for="challengeSegment">Link to Strava segment </label>
                    <input type="text" class="form-control" id="challengeSegment" placeholder="Link to Strava segment" />
                </div>
                <div class="form-group">
                    <label for="challengeStartDate">Challenge start date </label>
                    <input type="date" class="form-control" id="challengeStartDate" placeholder="Challenge start date" /> 
                </div>
                <div class="form-group">
                    <label for="challengeEndDate">Challenge end date </label>
                    <input type="date" class="form-control" id="challengeEndDate" placeholder="Challenge end date" /> 
                </div>
                <div class="form-group">
                    <label for="challengePassphrase">Passphrase to enter challenge (auto-generated if left empty) </label>
                    <input type="text" class="form-control" id="challengePassphrase" placeholder="Passphrase to enter challenge" />
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}
  
class StravaChallenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          history: [{
            squares: Array(9).fill(null),
          }],
          xIsNext: true,
        };
      }

    render() {
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
                <p>&copy alexdiem.io</p>
            </div>
        </div>
      );
    }
}
  
// ========================================
  
ReactDOM.render(
    <StravaChallenge />,
    document.getElementById('root')
);
  