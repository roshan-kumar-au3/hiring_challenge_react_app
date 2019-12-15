import React from 'react';
import { connect } from 'react-redux';
import { stateMapper } from '../store/store';

class ShowFemale extends React.Component {
    render() {
        let maleArray = this.props.leads.filter((obj) => {
                return obj.gender === "female";
        });
        return(
            <div className="container-fluid">
                <h3 className="text-danger text-center">Show Female</h3>
                <hr />
                <div className = "row" >
                {
                    maleArray.map((obj) => {
                            return <div  className="col-md-3" key={obj.email}>
                                        <div className="card" style= {{
                                            width: "15rem"
                                        }}>
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

export default connect(stateMapper)(ShowFemale);