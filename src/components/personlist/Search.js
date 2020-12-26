import React, { Component } from 'react'

 class Search extends Component {
     state={
        searchValue :''
     }
     change =(event) => {
         this.setState({searchValue:event.target.value});
     }

      callSearchFunction = (e) => {
        e.preventDefault();
        this.props.search(this.state.searchValue);
        // this.setState({searchValue : ""});
      }
     
    render() {
        // console.log(this.props.users);

        return (
            <div className="d-flex justify-content-center my-3">
                <form className="form-inline">
                   <div className="form-group mb-2">
                        <input type="text"  className="form-control-plaintext"
                        placeholder="Search"
                        value={this.state.input}
                        onChange={this.change} />
                  </div>
                    <button type="submit" className="btn btn-primary mb-2"
                    onClick={this.callSearchFunction}>
                        Search
                    </button>
                </form>  
            </div>
        )
    }
}

export default Search
