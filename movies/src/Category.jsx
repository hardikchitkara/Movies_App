import React from "react";
class Category extends React.Component {
  state = { allGenre: ["Action", "Comedy", "Romance", "Thriller"] };
  componentDidMount(){
    //api call(msg bhejna=> get)
    //if wwe dont provide proxy, it requests on its own localhost:3000 url
    // if there is a file in pulic, it is freely available in the internet with same localhost:3000 url 
    // if file src me hai then, import would be used
    fetch("/genre").then(function(res){
      return res.json();
    }).then((json)=>{
      this.setState({allGenre:json})
    })
  }
  render() {
    return (
      
      <ul className="list-group">
         <li
          class="list-group-item"
          key="allgenre"
          onClick={() => {
            this.props.receivegenredata("All Genre");
          }}
        >
          All Genres
        </li>
        {this.state.allGenre.map((el) => {
          return (
            <li className="list-group-item" key={el._id} onClick={()=>{
              this.props.receivegenredata(el.name);
            }}>
              {el.name}
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Category;
