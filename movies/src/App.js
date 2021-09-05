import React from 'react'
import Navbar from './Navbar'
import Category from './Category'
import Search from './Search'
import Table from './Table'
class App extends React.Component {
    state={
        nofmovies:0,
        searchedString:"",
        currGenre:"All Genre"
    }

    receivemoviesdata=(num)=>{
        this.setState({nofmovies:num})
    }
    receivestringdata=(str)=>{
        this.setState({searchedString:str})
    }
    receivegenredata=(cg)=>{
        this.setState({currGenre:cg})
    }

render(){
     return (
    <React.Fragment>
        <div className="row">

            <div className="col-2 p-4">
                <Category receivegenredata={this.receivegenredata}/>
            </div>
            
            <div className="col-10">

                <div className="row">
                    <div className="col-3 mt-4">
                        <Search 
                        receivestringdata={this.receivestringdata}
                        sendMoviesData={this.state.nofmovies}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <Table
                        receivemoviesdata={this.receivemoviesdata}
                        sendStringData={this.state.searchedString}
                        sendGenreData={this.state.currGenre}
                        />
                    </div> 
                </div>

            </div>
        </div>
    </React.Fragment>
  )
}
 
}

export default App;
