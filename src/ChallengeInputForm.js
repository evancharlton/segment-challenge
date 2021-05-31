import React from 'react';
import ReactDOM from 'react-dom';

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
                <form id="challengeInputForm" onSubmit={this.saveChallenge}>
                    <div class="form-group">
                        <label for="challengeSegment">Link to Strava segment </label>
                        <input
                            type="text"
                            class="form-control"
                            id="challengeSegment"
                            onChange={() => { this.setChallengeSegment(this.state.challengeSegment); }}
                            defaultValue={this.state.challengeSegment}
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

    setChallengeSegment(event) {
        this.setState({ challengeSegment: event.target.challengeSegment });
    }

    saveChallenge = event => {
        event.preventDefault();
        alert('You have submitted the form.')
    }
}

export default ChallengeInputForm;