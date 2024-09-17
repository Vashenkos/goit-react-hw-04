
import Modal from 'react-modal';  // Імпортуємо компонент Modal з бібліотеки react-modal  


const ImageModal = ({ isOpen, onClose, image }) => {  
  return (  
    <Modal isOpen={isOpen} onRequestClose={onClose}> 
      <button onClick={onClose}>Закрити</button>  
      <img src={image.urls.regular} alt={image.alt_description} />  
      <p>Автор: {image.user.name}</p>   
      <p>Лайки: {image.likes}</p>  
      <p>Опис: {image.alt_description}</p>  
    </Modal>  
  );  
};  

export default ImageModal;  