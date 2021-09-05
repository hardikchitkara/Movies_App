import React from "react" 
function Search(props){
        return(
            <div>
                <p>Showing {props.sendMoviesData} Databases</p>
                <button  type="button" className="btn btn-primary mb-4">New</button>
                <div className="input-group mb-3">
                <input  type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" onChange={
                    (el)=>{
                        props.receivestringdata(el.currentTarget.value)
                    }
                }
                />
                </div>
            </div>
        );
    
}
export default Search;