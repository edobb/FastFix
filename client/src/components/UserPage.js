import React from 'react';
import CreateJobForm from './CreateJobForm';
import PendingBids from './PendingBids';

class UserPage extends React.Component{

    state = {
        
    };

    _handleInputChange = event => {

    };

    _handleJobCreation = event => {

    };

    render() {

        return(

            <div>

            <CreateJobForm 
            handleInputChange={this._handleInputChange}
            handleJobCreation={this._handleJobCreation}
            />
            <ul className="job-list">
                <PendingBids />
            </ul>
            </div>

        )
    }

};

export default UserPage;