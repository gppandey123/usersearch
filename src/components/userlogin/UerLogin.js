import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './UserLogin.css';
class UerLogin extends Component {
    state={
        email:'',
        pass:''
        
    }
    changeEmail= (event) =>{ 
        this.setState({
            email:event.target.value,   
        })
    }
    changePass= (event) =>{ 
        this.setState({
            pass:event.target.value, 
        })
    }

    render() {
        let dis=true;
        if(this.state.email.length>6 && this.state.pass.length>6){
              dis=false
        }
        
        return (
            <div className="login p-4">
                <h3 className="d-flex justify-content-center py-3">Login for acces User detail</h3>
                <form>
                    <div className="form-group">
                        <label formfor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control"
                            id="exampleInputEmail1"  placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.changeEmail} />
                    </div>
                    <div className="form-group">
                        <label formfor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" 
                            id="exampleInputPassword1" placeholder="Password"
                            value={this.state.pass}
                            onChange={this.changePass} />
                    </div>
                    <Link to="/user">
                       <button type="button" className="btn btn-primary"
                       disabled={dis ? true :false}>
                        Login</button>
                    </Link>
               </form>
            </div>
        )
    }
}

export default UerLogin;
