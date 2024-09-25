  import ImageCard from './ImageCard';  
  import s from "./ImageG.module.css";




const ImageGallery = ({ images, onImageClick  }) => {  
  return (  
    <ul className={s.list }> 
    <li >  
      {images.map(image => (  
        <ImageCard image={image} onImageClick={onImageClick} className={s.image}    />  
      ))}  
    </li>  
    </ul>
  );  
};  

export default ImageGallery;