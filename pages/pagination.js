import axios from "axios";
import { useEffect, useState } from "react";
import BasicPagination from "../containers/muiPagination";

function Pagination() {
  const [cardData, setCardData] = useState([]);
  const paginationNumbers = [2, 3, 4, 5, 6, 7, 8];

  useEffect(()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${1}`)
      .then((res) => {
        setCardData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])
  const handlePagination = (num) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${num}`)
      .then((res) => {
        setCardData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <h3 className="text-center my-5">Pagination Cards</h3>
      {console.log(cardData)}
      <div className="row mx-0 justify-content-around">
        {cardData?.map((card) => (
          <div className="card bg-light mb-5 mt-2 col-3 px-0 ml-2" key={card.id}>
            <div className="card-header">Header-id {card.id}</div>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.body}</p>
            </div>
          </div>
        ))}
      </div>
      

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {paginationNumbers.map((number) => (
            <li className="page-item" key={number}>
              <a className="page-link" onClick={() => handlePagination(number)}>
                {number}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
