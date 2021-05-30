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

        this.handleChange = this.handleChange.bind(this);
        this.saveChallenge = this.saveChallenge.bind(this);
    }

    render() {
        return (
            <div>
                <h3>Open a new challenge:</h3>
                <form id="challengeInputForm" onSubmit={this.saveChallenge}>
                    <div class="form-group">
                        <label for="challengeSegment">Link to Strava segment </label>
                        <input 
                            type="text" 
                            class="form-control"
                            id="challengeSegment"
                            value={this.state.challengeSegment}
                            onChange={this.handleChange}
                            placeholder="Link to Strava segment" />
                    </div>
                    <div class="form-group">
                        <label for="challengeStartDate">Challenge start date </label>
                        <input 
                            type="date" 
                            class="form-control" 
                            id="challengeStartDate"
                            value={this.state.challengeStartDate}
                            onChange={this.handleChange}
                            placeholder="Challenge start date" /> 
                    </div>
                    <div class="form-group">
                        <label for="challengeEndDate">Challenge end date </label>
                        <input 
                            type="date" 
                            class="form-control" 
                            id="challengeEndDate" 
                            value={this.state.challengeEndDate}
                            onChange={this.handleChange}
                            placeholder="Challenge end date" /> 
                    </div>
                    <div class="form-group">
                        <label for="challengePassphrase">Passphrase to enter challenge (auto-generated if left empty) </label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="challengePassphrase" 
                            value={this.state.challengePassphrase}
                            onChange={this.handleChange}
                            placeholder="Passphrase to enter challenge" />
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    saveChallenge()
    {
        return;
    }
}
  
class StravaChallenge extends React.Component {
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
  