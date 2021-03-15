import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
//import SearchBook from "./SearchBook";


export default function FetchData(){
        const [getBooks,setGetBooks]=useState({ items: [] });
         
         
         useEffect(()=>{
                 async function fetchBookData(){
                   const getBookData=await axios.get('https://www.googleapis.com/books/v1/volumes?q=%3CsearchTerm%3E');  
                 
                //  console.log(getBookData.data);

                  setGetBooks(getBookData.data);
                }
                fetchBookData();
         })

    /*     const bookAuthors = authors => {
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
        */
            
      return(
          <React.Fragment>
                 
   {getBooks.items.map((book, index) => {
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
                    <p>Author Name:-  {book.volumeInfo.authors}</p>
                    <p>Published Date:-  {book.volumeInfo.publishedDate}</p>
                    <p>ID:-  {book.id}</p>

                    <div className="know-more-detail">
                    <button  onClick={()=>{
                                     if(book.id===getBooks.items.filter(items=>items.id))
                                     {
                                           return  <div className="show-more-detail">
                                                      <h1>{book.volumeInfo.title}</h1>
                                              </div> 
                                              
                                      }
                                   
                    }}
                    style={{border:"none",height:"25px",backgroundColor:"skyblue",cursor:"pointer"}}
                    >Know more...
                    </button>
                     </div>

                  </div>
                </div>
                <hr />
              </li>
            );
          })}


     

          </React.Fragment>
      )
}
