  import ImageCard from './ImageCard';  
  import s from "./ImageG.module.css";
const ImageGallery = ({ images, onImageClick  }) => {  
  return (  
    <ul className={s.listCard}>  
      {images.map(image => (  
        <ImageCard key={image.id} image={image} onImageClick={onImageClick}  />  
      ))}  
    </ul>  
  );  
};  

export default ImageGallery;