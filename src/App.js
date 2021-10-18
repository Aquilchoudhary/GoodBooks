import React from "react";
import "./styles.css";
import { useState } from "react";

const bookList = {
  Polity: [
    {
      name: "Laxmikanth",
      rating: "4.8/5",
      description:
        "This book contains all the topics and writen in very simple language."
    },
    {
      name: "NCERT",
      rating: "2.2/5",
      description:
        "Ncert are important as they build the Foundation and Concepts"
    },
    {
      name: "ARC",
      rating: "3.2/5",
      description:
        "Administrative Reforms Commission Report are important to know some topic."
    }
  ],

  Economy: [
    {
      name: "NCERT",
      rating: "3.5/5",
      description:
        "Ncert are important as they build the Foundation and Concepts"
    },
    {
      name: "Newspaper/Current Issues",
      rating: "4.5/5",
      description:
        "It will update you with current issues of RBI, Monetory Policy etc"
    },
    {
      name: "Economic Survey",
      rating: "4.5/5",
      description:
        "It will give you a summarize policy of Govt followed in last year."
    }
  ],
  History: [
    {
      name: "NCERT",
      rating: "3.5/5",
      description:
        "Ncert are important as they build the Foundation and Concepts"
    },
    {
      name: "Spectrum",
      rating: "4.5/5",
      description:
        "This book contains all the topics of Modern India and writen in very simple language."
    },
    {
      name: "Tamil Board Ncert class 11",
      rating: "4.5/5",
      description:
        "This book contains all the topics of Ancient India and writen in very simple language."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("History");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookList).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookList[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              <div style={{ fontSize: "smaller" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
