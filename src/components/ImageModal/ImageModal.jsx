
import Modal from 'react-modal';  
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => {  
  return (  
    <Modal isOpen={isOpen} onRequestClose={onClose}> 
      <button onClick={onClose}>Close</button>  
      <div className={s.wraper}>
      <img className={s.image}
      src={image.urls.regular} 
      alt={image.alt_description} />
      <ul className={s.list}>
        
      <li className={s.item}>Автор: {image.user.name}</li>   
      <li className={s.item}>Лайки: {image.likes}</li>  
      <li className={s.item}>Опис: {image.alt_description}</li> 
      </ul>   
      </div>
    </Modal>  
  );  
};  

export default ImageModal;  