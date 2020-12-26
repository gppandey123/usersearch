import React, { Component } from 'react';

import Search from './Search';
import PersonDetail from './PersonDetail';
 class PersonList extends Component {
    state = {
        users:[],
        isload:false
    }

    fetchData = () => {
        fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => {
            this.setState({users: res.data ,isload:true})
        })
    }

    
    componentDidMount () {
          this.fetchData()
    }
    render() {
        let users = this.state.users;
       let search =searchValue =>{
           users = searchValue === "" ? users :
                   users.filter(item => {
                  return( (item.first_name.toLowerCase()||item.last_name.toLowerCase())
                    .indexOf(searchValue.toLowerCase()) >-1)
                })

                this.setState({users : users});
        }
           
           if(this.state.isload){
            return (
                <div>
                   <Search users={users} search={search}/>
                  <PersonDetail users={users}/>
                </div>
            ) 
           }
           else{
               return <p>Loading ...</p>
           }
        
    }
}

export default PersonList;
