import React ,{useState}from "react";
import axios from "axios";
import "../App.css";



const SearchBook = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState({ items: [] });
    const onInputChange = e => {
      setSearchTerm(e.target.value);
    };
  
    let API_URL = `https://www.googleapis.com/books/v1/volumes`;
  
    const fetchBooks = async () => {
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(result.data);
      console.log(result.data);
    };
  
    const onSubmitHandler = e => {
      e.preventDefault();
      fetchBooks();
    };
  
    const bookAuthors = authors => {
      if (authors.length <= 2) {
        authors = authors.join(" and ");
      } else if (authors.length > 2) {
        let lastAuthor = " and " + authors.slice(-1);
        authors.pop();
        authors = authors.join(", ");
        authors += lastAuthor;
      }
      return authors;
    };
  
    

    return (
      <section>
        <form onSubmit={onSubmitHandler} style={{textAlign:"center"}}>
          <label>
        <span style={{fontSize:"25px"}}>Search for books</span>
        <input
              type="search"
              placeholder="microservice, restful design, etc.,"
              value={searchTerm}
              onChange={onInputChange}
              style={{height:"25px",width:"200px",margin:"5px"}}
            />
            <button type="submit"
              style={{border:"none",height:"25px",backgroundColor:"skyblue",cursor:"pointer"}}
            >Search</button>
          </label>
        </form>
        <ul>
          {books.items.map((book, index) => {
            return (
              <li key={index} style={{listStyleType:"none"}}>
                <div style={{textAlign:"center"}}>
                  <img
                    alt={`${book.volumeInfo.title} book`}
                    src={`http://books.google.com/books/content?id=${
                      book.id
                    }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                  />
                  <div>
                    <h3>Book Name:-  {book.volumeInfo.title}</h3>
                    <p>Author Name:-  {bookAuthors(book.volumeInfo.authors)}</p>
                    <p>Published Date:-  {book.volumeInfo.publishedDate}</p>
                    <p>Description:-  {book.volumeInfo.description}</p>
                  </div>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      </section>
    );
  };



  export default SearchBook;