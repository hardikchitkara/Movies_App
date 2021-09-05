import React from "react"
import {withRouter} from "react-router-dom"
import {Link} from "react-router-dom"
class User extends React.Component{

    state = { usersData: [] };
  
    componentDidMount() {
      fetch("/user.json")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({
            usersData: json
          });
        });
    }
    render(){
        let requser = this.state.usersData.find( (el)=>el.id==this.props.match.params.id );
      
        if(!requser) return(<h1>loading...</h1>)
        else return( 
            <div>
                <Link to="/">GO BACK </Link>
                <h1>{requser.name}</h1>
            </div>
        );
    }
}
export default withRouter(User);