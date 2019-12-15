import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store';


class LeadComponent extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    convertedTrue = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.checked);
        // return (!event.target.checked)
        // // this.props.dispatch({
        // //     type: "LEAD_CONVERTED",
        // //     id: event.target.name
        // // })
        console.log("current Student: ", event.target.value);
        this.props.dispatch({
            type: "LEAD_CONVERTED",
            id: event.target.value
        })
    }

    // sendCurrentStudent = (event) => {
    //     console.log("current Student: ",event.target.value);
    //     this.props.dispatch({
    //         type: "LEAD_CONVERTED",
    //         id: event.target.value
    //     })
    // }
    



  render() {
        return (
        <div className="container-fluid">
            <h3 className="text-danger text-center">All Leads</h3>
                <hr />
        <div className="row">
        {
            this.props.leads.map((obj) => {
                return <div  className="col-md-3" key={obj.email}>
                <div className="card" style= {{
                    width: "15rem"
                }}>
                    <label><input type="checkbox"   name={obj.id.value} onChange={this.convertedTrue} value={obj.email} ></input></label>
                    <img src={obj.picture.large}  className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">name: {obj.name.title} {obj.name.first} {obj.name.last}  </p>
                        <p className="card-text">gender: {obj.gender}  </p>
                        <p className="card-text">{obj.email}</p>
                        <p className="card-text">phone: {obj.phone}</p>
                        <p>{`converted : ${obj.converted}`}</p>
                    </div>
                </div>
            </div>
            })
        }
        </div>
     </div>
    );
  }
 
}

export default connect(stateMapper)(LeadComponent);
//             < label
//                 className="form-check-label ml-4 mt-2"
//                 htmlFor=""
//               >
//                 <p>{this.props.question.options[0].name}</p>
    //             <input
    //                 className="form-check-input ml-1 mt-3"
    //                 type="checkbox"
    //                 value={this.props.question.options[0].name}
    //         
    //               />
//               </label>