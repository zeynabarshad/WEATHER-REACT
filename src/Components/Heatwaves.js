import React, { useState, useEffect } from 'react';
import '../Css/uvweather.css'

const Heatwaves = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(4); // Number of news items per page
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNewsData(currentPage);
  }, [currentPage]);

  const fetchNewsData = async (page) => {
    const apiKey = '17b78539c3444e4e84d203f33f7576e8'; // Replace with your News API key
    const apiUrl = `https://newsapi.org/v2/everything?q=heatwave+OR+cold+weather&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setNewsData(data.articles || []);
      setTotalPages(Math.ceil(data.totalResults / pageSize));
    } catch (error) {
      setError(error.message);
      setNewsData([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <h1 style={{ paddingLeft: '30px', paddingBottom: '16px' }}>Weather News</h1>
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      <div>
        <ul className='weather-news'>
          {newsData.length > 0 ? (
            newsData.map((article, index) => (
              <li key={index} className='news'>
                <h5>{article.title}</h5>
                <p style={{ fontSize: '13px' }}>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </li>
            ))
          ) : (
            <p>No news available.</p>
          )}
        </ul>
      </div>
      
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination" style={{ display: 'flex', justifyContent: 'center' }}>
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map(number => (
        <button 
          key={number} 
          onClick={() => onPageChange(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Heatwaves;
