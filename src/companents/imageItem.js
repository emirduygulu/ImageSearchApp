import { useState } from 'react';

function ImageItem({image}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (  
        <div>
            <img 
                className="imagelist-img" 
                src={image.urls.small} 
                alt={image.alt_description} 
                onClick={handleImageClick}
            />
            
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <img 
                            src={image.urls.regular} 
                            alt={image.alt_description} 
                            className="modal-image"
                        />
                        <button className="modal-close" onClick={handleCloseModal}>
                            ✕
                        </button>
                        {image.description && (
                            <p className="image-description">{image.description}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageItem;