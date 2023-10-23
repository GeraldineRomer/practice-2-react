import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Fab } from '@mui/material';
import { Add, Star } from '@mui/icons-material';
import { useFavorites } from '../FavoriteList/FavoriteList';

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,   
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    backgroundColor: 'rgb(190, 183, 230)',
    borderColor: 'rgb(131, 112, 233)',
};

const SliderComponent = ({ noticias }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const [openModal, setOpenModal] = useState(false);
    const [selectedNotice, setSelectedNotice] = useState(null);

    const handleOpen = (noticia) => {
        setSelectedNotice(noticia);
        setOpenModal(true);
    };

    const handleClose = () => {
        setSelectedNotice(null);
        setOpenModal(false);
    };

    const { addFavorite } = useFavorites();

    const handleAddToFavorite = (noticeID) => {
        if (noticeID) {
            addFavorite(noticeID); // Agregar el ID a la lista de favoritos a través del contexto
        }
    };

    return (
        <div className="slider-container">
        <Slider {...sliderSettings}>
            {noticias.map((noticia, index) => (
            <div key={index}>
                <img src={noticia.image} alt={`Imagen ${index + 1}`} className="images" />
                <label className="title">{noticia.title}</label>
                <label className="subtitle">{noticia.subtitle}</label>
                <div className="conf-button">
                    <button className="button-more" onClick={() => handleOpen(noticia)}>
                        Ver más
                    </button>
                </div>
            </div>
            ))}
        </Slider>
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            {selectedNotice && (
                <div>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' ,  fontWeight: 'bold' , marginBottom:'40px'}} >
                    {selectedNotice.title}
                </Typography>
                <img
                    src={selectedNotice.image}
                    alt={selectedNotice.title}
                    style={{ width: '400px', height: 'auto', borderRadius: '5px' , boxShadow:'0 0 10px rgba(0, 0, 0, 0.2)'}}
                />
                <Typography id="modal-modal-subtitle" variant="h6" component="h2" style={{ textAlign: 'center' , margin:'10px'}}>
                    {selectedNotice.subtitle}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ textAlign: 'center' , margin:'10px'}}>
                    {selectedNotice.description}
                </Typography>
                    <div className="button-fav-group">
                        <Fab className="btn-icon" color="" aria-label="Favorite icon" onClick={() => handleAddToFavorite(selectedNotice._id)}>
                            <Star/>
                        </Fab>
                        <Fab className="btn-icon" color="" aria-label="Add icon">
                            <Add/>
                        </Fab>
                    </div>
                </div>
            )}
            </Box>
        </Modal>
        </div>
    );
};

export default SliderComponent;
