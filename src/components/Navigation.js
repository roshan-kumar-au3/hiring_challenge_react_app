import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store';
import {Redirect, Link} from 'react-router-dom';

class Navigation extends React.Component{

  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_LEAD"
    })
  }

  generateLead = () => {
    this.props.dispatch({
      type: "FETCH_LEAD"
    })
  }

  countLead = () => {
    let newleads = [...this.props.leads];
    console.log(newleads);
    let count = 0;
    for (const lead of newleads) {
      if (lead.converted) {
        count++;
      }
    }
    return count;
  }

  showAll = () => {
    console.log("show all");
    return <Redirect to = "/showAll" / >
  }



  render() {
        return (
      <div className="container-fluid">
        <div className="row mt-2 mb-2">
          <div className="col-md-6">
            <h3>Leads Converted: {this.countLead()}/{this.props.leads.length}</h3>
          </div>
          <div className="col-md-6">
          <button type="button" className="btn btn-success mr-1" onClick={this.generateLead}>Get Lead</button>
          <Link type="button" className="btn btn-primary mr-1" to="/app/showAll">Show All</Link>
          <Link type="button" className="btn btn-warning mr-1" to="/app/showMale">Show Male</Link>
          <Link type="button" className="btn btn-danger" to="/app/showFemale">Show Female</Link>
          </div>
        </div>
      </div>
    );
  }
 
}

export default connect(stateMapper)(Navigation);