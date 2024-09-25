const ImageCard = ({ image ,onImageClick}) => {  
  return (  
    <div onClick={() => onImageClick(image)}>  
      <img src={image.urls.small} 
      alt={image.alt_description} />  
    </div>  
  );  
};  

export default ImageCard;