import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
import SearchBar from './components/SearchBar/SearchBar';  
import ImageGallery from './components/ImageGalellery/ImageGalellery';  
import Loader from './components/Loader/Loader';  
import ErrorMessage from './components/ErrorMessage/ErrorMessage';  
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';  
import ImageModal from './components/ImageModal/ImageModal';  
import { Toaster, toast } from 'react-hot-toast'; // Правильний імпорт  


const API_URL = 'https://api.unsplash.com/photos/';  
const ACCESS_KEY = '3wbuu2ZWzl1pTV4tbxDtcjf-xJZKkSCoetWrEiQhft4'; // Заміни на свій Access Key  

const App = () => {  
  const [query, setQuery] = useState('');  
  const [images, setImages] = useState([]);  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);  
  const [page, setPage] = useState(1);  
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [selectedImage, setSelectedImage] = useState(null);  

  // Завантаження зображень  
  const loadImages = async (searchQuery, pageNumber) => {  
    setLoading(true);  
    setError(null);  

    try {  
      const response = await axios.get(`${API_URL}?query=${searchQuery}&page=${pageNumber}&client_id=${ACCESS_KEY}`);  
      setImages(prevImages => [...prevImages, ...response.data]);  
      if (response.data.length === 0) {  
        toast.error('No images found for your search.'); // Додайте сповіщення  
      }  
    } catch (error) {  
      setError('Error fetching images. Please try again later.');  
      toast.error('Error fetching images. Please try again later.'); // Сповіщення про помилку  
    } finally {  
      setLoading(false);  
    }  
  };  

  // Обробка запиту на пошук  
  const handleSearch = query => {  
    setQuery(query);  
    setImages([]);  
    setPage(1);  
    loadImages(query, 1);  
  };  

  // Завантаження наступної порції зображень  
  const loadMoreImages = () => {  
    setPage(prevPage => prevPage + 1);  
    loadImages(query, page + 1);  
  };  

  // Відкриття модального вікна  
  const openModal = image => {  
    setSelectedImage(image);  
    setIsModalOpen(true);  
  };  

  // Закриття модального вікна  
  const closeModal = () => {  
    setIsModalOpen(false);  
    setSelectedImage(null);  
  };  

  // Ефект для завантаження зображень після зміни запиту  
  useEffect(() => {  
    if (query) {  
      loadImages(query, page);  
    }  
  }, [query, page]);  

  return (  
    <div>  
      <Toaster />  {/* Використання Toaster на верху компонента */}  
      <SearchBar onSubmit={handleSearch} />  
      {error ? (  
        <ErrorMessage message={error} />  
      ) : (  
        <>  
          <ImageGallery images={images} onImageClick={openModal} />  
          {loading && <Loader />}  
          {images.length > 0 && !loading && (  
            <LoadMoreBtn loadMore={loadMoreImages} />  
          )}  
        </>  
      )}  
      {selectedImage && (  
        <ImageModal   
          isOpen={isModalOpen}   
          onClose={closeModal}   
          image={selectedImage}   
        />  
      )}  
    </div>  
  );  
};  

export default App;