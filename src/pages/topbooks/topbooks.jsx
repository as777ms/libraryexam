import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import VKIcon from '@mui/icons-material/Facebook'; // Replace with actual VK icon
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

const Topbooks = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('top books'); // Initialize query to empty string
  const [books, setBooks] = useState([]);
  const [id, setId] = useState("");
  const [term, setTerm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filterType, setFilterType] = useState('all');
  const [filterSubscription, setFilterSubscription] = useState('all');
  const [filterLanguage, setFilterLanguage] = useState('all');


  const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#FFF8E7',
    padding: theme.spacing(6, 0), // Increased padding
  }));
  
  const FooterSection = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4), // Increased margin
  }));
  
const FooterLink = styled(Link)(({ theme }) => ({
  color: '#FF6600',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
  useEffect(() => {
    let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&startIndex=${(currentPage - 1) * itemsPerPage}`;

    if (filterType !== 'all') {
      apiUrl += `&filter=${filterType}`;
    }
    // Add other filters similarly based on API documentation

    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.items || []);
      })
      .catch((error) => alert("internet nadori fetch galtid"));
  }, [query, currentPage, filterType, filterSubscription, filterLanguage]);

  const getSearch = (e) => {
    e.preventDefault();
    if (search !== '') {
      setQuery(search);
      setSearch('');
      setCurrentPage(1);
    } else {
      alert('Enter Book Name!!');
    }
  };

  const checkIt = (id) => {
    setId(id);
    setTerm(true);
  };

  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrevious = () => setCurrentPage((prev) => prev - 1);

  return (
    <>
    <div className="drama-container">
    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          
Подборки самых популярных книг
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#555' }}>103 
подборки</p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
        На этой странице представлены 103 подборок самых рейтинговых книг электронной библиотеки MyBook. Подборки составляются каждый месяц, что позволит каждому читателю найти книгу по своему вкусу. Читайте самые популярные книги прямо на сайте или установите наше удобное приложение, чтобы не расставаться с любимыми произведениями даже при отсутствии подключения к интернету!
         </p>
      <form onSubmit={getSearch} className="search-form">
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


      <div className="books">
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
                  className="preview-btn"
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
          <iframe
            src={`https://books.google.com.pk/books?id=${id}&lpg=PP1&pg=PP1&output=embed`}
            title="Pdf Viewer"
            className="iframe"
          ></iframe>
        </div>
      )}
    </div>
    <FooterContainer>
  <Container style={{width: "100%"}}>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <FooterSection>
          <Typography variant="h6" gutterBottom style={{ fontSize: '1.25rem' }}>О проекте</Typography>
          <FooterLink href="#">Что такое MyBook</FooterLink>
          <br />
          <FooterLink href="#">Загрузить редакт в MyBook и Литрес</FooterLink>
          <br />
          <FooterLink href="#">Помощь</FooterLink>
        </FooterSection>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FooterSection>
          <Typography variant="h6" gutterBottom style={{ fontSize: '1.25rem' }}>О подписке</Typography>
          <FooterLink href="#">Купить подписку</FooterLink>
          <br />
          <FooterLink href="#">Как оплатить</FooterLink>
          <br />
          <FooterLink href="#">Настройки</FooterLink>
        </FooterSection>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FooterSection>
          <Typography variant="h6" gutterBottom style={{ fontSize: '1.25rem' }}>Другие проекты</Typography>
          <FooterLink href="#">Опубликовать книгу на MyBook и Литрес</FooterLink>
          <br />
          <FooterLink href="#">MyBook: История</FooterLink>
          <br />
          <FooterLink href="#">Книжный вызов</FooterLink>
        </FooterSection>
      </Grid>
    </Grid>
    <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <IconButton color="primary" aria-label="VK">
          <VKIcon />
        </IconButton>
        <IconButton color="primary" aria-label="YouTube">
          <YouTubeIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Telegram">
          <TelegramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" style={{ fontSize: '1rem' }}>
        8 800 333 27 37 · support@mybook.ru
      </Typography>
      <Box>
        {/* Add app store and payment icons here */}
      </Box>
    </Box>
  </Container>
</FooterContainer>
    </>
  );
};

export default Topbooks;