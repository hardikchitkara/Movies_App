import React from "react";
class Table extends React.Component {
  state = {
    allMovies: [
      {
        title: "A ",
        genre: "B ",
        stock: "C ",
        rate: "E ",
      },
      {
        title: "1 ",
        genre: " 2",
        stock: " 3",
        rate: " 4",
      },
      {
        title: " 5",
        genre: " 6",
        stock: " 7",
        rate: " 8",
      },
      {
        title: " 9",
        genre: " 10",
        stock: " 11",
        rate: " 12",
      },
      {
        title: " P",
        genre: "Q ",
        stock: "R ",
        rate: " S",
      },
    ],
    currpage: 1,
  };
  componentDidMount() {
    //api call(msg bhejna=> get)
    fetch("/movies")
      .then(function (res) {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        
        this.setState({ allMovies: json });
        this.props.receivemoviesdata(json.length);
      });
  }
  render() {
    let moviesToDisplay=[];
      if(this.props.sendGenreData != "All Genre") {
          moviesToDisplay = this.state.allMovies.filter((el) => {
              return el.genre.name == this.props.sendGenreData;
            });
        } 
        else {
            moviesToDisplay = this.state.allMovies;
        }
      if (this.props.sendStringData) {
        let strToCompare = this.props.sendStringData.toLowerCase();
        moviesToDisplay = moviesToDisplay.filter((el) => {
          return el.title.toLowerCase().includes(strToCompare);
        });
      }
    let numopages = Math.ceil(this.state.allMovies.length / 5);
    let paginationarr = [];
    for (let i = 1; i <= numopages; i++)  paginationarr.push(i);
    let starting = (this.state.currpage - 1) * 5;
    let ending = this.state.currpage * 5 - 1;
    moviesToDisplay = moviesToDisplay.slice(starting,Math.min(ending, moviesToDisplay.length - 1) + 1);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
            moviesToDisplay.map((el) => {
              return (
                <tr key={el._id}>
                  <th scope="row">{el.title}</th>
                  <td>{el.genre.name}</td>
                  <td>{el.numberInStock}</td>
                  <td>{el.dailyRentalRate}</td>
                  <td
                    onClick={() => {
                      let allMovies = this.state.allMovies;
                      let index = allMovies.findIndex((e) => e._id == el._id);
                      allMovies[index].liked
                        ? (allMovies[index].liked = false)
                        : (allMovies[index].liked = true);

                      this.setState({ allMovies: allMovies });
                    }}
                  >
                    {el.liked ? "Liked!" : "Like"}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        let alm = this.state.allMovies;
                        let filteredarray = alm.filter((elm) => {
                          return elm._id != el._id;
                        });
                        this.props.receivemoviesdata(this.state.allMovies.length-1);
                        this.setState({ allMovies: filteredarray });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li
              className="page-item"
              onClick={() => {
                if (this.state.currpage == 1) return;
                else this.setState({ currpage: this.state.currpage - 1 });
              }}
            >
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            {paginationarr.map((el) => {
              return (
                <li
                  className="page-item"
                  onClick={() => {
                    this.setState({ currpage: el });
                  }}
                >
                  <a className="page-link" href="#">
                    {el}
                  </a>
                </li>
              );
            })}
            <li
              className="page-item"
              onClick={() => {
                if (this.state.currpage == numopages) return;
                else this.setState({ currpage: this.state.currpage + 1 });
              }}
            >
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Table;
