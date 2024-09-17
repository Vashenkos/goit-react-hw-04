  import ImageCard from './ImageCard';  

const ImageGallery = ({ images }) => {  
  return (  
    <ul>  
      {images.map(image => (  
        <ImageCard key={image.id} image={image} />  
      ))}  
    </ul>  
  );  
};  

export default ImageGallery;