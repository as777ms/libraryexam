import { useState, useEffect } from 'react';  
import { Link } from 'react-router-dom';

const Books = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('survive');
  const [books, setBooks] = useState([]);
  const [id, setId] = useState("");
  const [term, setTerm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [itemsPerPage] = useState(10); // Number of items per page

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&startIndex=${(currentPage - 1) * itemsPerPage}&key=AIzaSyCJbUF_JRiOk9R6abyiAZ3QddT6TQ_LAO0`
    )
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.items || []); // Ensure it's an array
      })
      .catch((error) => alert("internet nadori fetch galtid"));
  }, [query, currentPage]);

  const getSearch = (e) => {
    e.preventDefault();

    if (search !== '') {
      setQuery(search);
      setSearch('');
      setCurrentPage(1); // Reset to the first page on new search
    } else {
      alert('Enter Book Name!!');
    }
  };

  const checkIt = (id) => {
    setId(id);
    setTerm(true);
  };

  // Function to handle pagination
  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrevious = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="drama-container" style={{width: "121%"}}>
      <h1>Books</h1>
      <div className="App">
        <h1 className="title">Look Book</h1>

        <form onSubmit={getSearch} className="search-form" style={{width: "121%"}}>
          <input
            type="text"
            placeholder="Search Book..."
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>

        <div className="books" style={{width: "121%"}}>
          {books.length > 0 ? (
            books.map((book, key) => (
              <div key={key} className="book-item">
                <img
                  src={
                    book?.volumeInfo?.imageLinks
                      ? Object.values(book.volumeInfo.imageLinks)[0]
                      : ""
                  }
                  alt="cover img"
                  className="BookImg"
                />
                <div className="book-item-btns">
                  <a 
                  href={book.volumeInfo.previewLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="cool-link" 
                 style={{ 
                textDecoration: "none", 
                color: "white", 
                border: "1px solid #4CAF50", 
                backgroundColor: "#4CAF50", 
                padding: "10px 20px", 
                borderRadius: "5px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
                transition: "all 0.3s ease-in-out", 
              display: "inline-block",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center"
  }} 
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#45a049";
    e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#4CAF50";
    e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  }}
>
  Preview
</a>
                  {book?.accessInfo.pdf["acsTokenLink"] !== undefined ? (
                    <button
                      className="read-btn"
                      onClick={() => checkIt(book?.id)}
                    >
                      Read Online
                    </button>
                  ) : (
                    <h3 className="null-point">Not Available</h3>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No books found.</p>
          )}
        </div>
        <div className="pagination">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={books.length < itemsPerPage}
            className="pagination-btn"
          >
            Next
          </button>
        </div>

        {term && (
          <div className="reading-block">
            <button className="close-btn" onClick={() => setTerm(false)}>
              X
            </button>
            <iframe src={`https://books.google.com.pk/books?id=${id}&lpg=PP1&pg=PP1&output=embed`} title="Pdf Viewer" className="iframe"></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
