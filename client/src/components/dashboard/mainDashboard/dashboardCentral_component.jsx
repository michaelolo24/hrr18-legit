import React, { Component, PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import Header from '../../headers/authorized_header.jsx';
import DashboardSummary from './M_dashboardSummary.jsx';
import DashboardLeftCol from './M_dashboardLeftCol.jsx';
import DashboardRightCol from './M_dashboardRightCol.jsx';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
            return (
                <div>
                    <Header />
                    <main>
                        <div className="dashboardWrapper">
                            <DashboardSummary />
                            <div className="dashboardCols">
                                <div>
                                    <h3>Classes <a href="/classform"><i className="fa fa-plus" aria-hidden="true"></i></a></h3>
                                    <DashboardLeftCol />
                                </div>
                                <div>
                                    <DashboardRightCol />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                
            );
        
        
    }
};

Dashboard.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        isAuthenticated: true
    }
}

export default connect(state => ({
    isAuthenticated: state.isAuthenticated
}))(Dashboard);