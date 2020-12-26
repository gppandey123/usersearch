import React, { Component } from 'react';
import './PersonDetail.css';

 class PersonDetail extends Component {
    
    render() {
        let user
    //    console.log(this.props.users)
       user =  this.props.users.map((item , index) => {
            return (
                <tr key={index} >
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                </tr>
            )
        })
    
        return (
            <div className="tab p-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" >First_Name</th>
                            <th scope="col" >Last_Name</th>
                            <th scope="col" >email</th>
                        </tr>
                    </thead>
                <tbody>
                    {user}
                </tbody>
                </table>
           </div>
        )
    }
}

export default PersonDetail
