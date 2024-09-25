 
import axios from 'axios';  
import SearchBar from './components/SearchBar/SearchBar';  
import ImageGallery from './components/ImageGalellery/ImageGalellery';  
import Loader from './components/Loader/Loader';  
import ErrorMessage from './components/ErrorMessage/ErrorMessage';  
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';  
import ImageModal from './components/ImageModal/ImageModal'; 
import { Toaster, toast } from 'react-hot-toast'; 
import { useEffect, useState } from "react";
import { fetchPhotos } from "./components/servise/api";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const getPhotos = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchPhotos(page, query);
        if (data.results.length === 0) {
          toast.error("No images found.\nPlease try a different search term.");
        }
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPhotos();
  }, [page, query]);

  const handleSearch = (value) => {
    if (value === query) return;
    setQuery(value);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </>
  );
}

export default App;