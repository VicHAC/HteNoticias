import React from 'react';
import NoticiaGeneral from '../NoticiaGeneral';
import { Link } from 'react-router-dom';

function Nacional() {

    const noticias = [
        {
            id: 'N6',
            titulo: 'Apoyar al Sureste es justicia social, justicia territorial y justicia histórica: Claudia Sheinbaum desde Paraíso, Tabasco',
            rutaImagen: "N6.jpg",
            rutaHtml: "N6",
            fecha: "16 de Marzo de 2024"
        },
        {
            id: 'N5',
            titulo: 'Con la 4T queremos seguir desarrollando a Yucatán y al país: Claudia Sheinbaum garantiza bienestar para todos los yucatecos con la llegada de la transformación',
            rutaImagen: "N5.jpg",
            rutaHtml: "N5",
            fecha: "14 de Marzo de 2024"
        },
        {
            id: 'N4',
            titulo: "Este 2 de junio será una fiesta democrática gracias al pueblo de México: Claudia Sheinbaum llama a defender la democracia y a la 4T en las urnas",
            rutaImagen: "N4.jpeg",
            rutaHtml: "N4",
            fecha: "12 de Marzo de 2024"
        },
        {
            id: 'N3',
            titulo: "Vamos por más democracia, por más libertades y más justicia para el pueblo de México: Claudia Sheinbaum desde San Pedro Cholula, Puebla",
            rutaImagen: "N3.jpeg",
            rutaHtml: "N3",
            fecha: "10 de Marzo de 2024"
        },
        {
            id: 'N2',
            titulo: "Incluido el Presidente de la República, ningún político ganará más de 50 mil pesos mensuales, primera propuesta de Sandra Cueva al Senado",
            rutaImagen: "N2.jpeg",
            rutaHtml: "N2"
        },
        {
            id: 'N1',
            titulo: "Urge que alcaldías destinen un porcentaje de su presupuesto para esterilizar perros y gatos callejeros: Javier Ramos",
            rutaImagen: "N1.jpeg",
            rutaHtml: "N1"
        },
    ];

    // Función para formatear el título de la noticia para la URL
    const formatTitleForURL = (title) => {
        // Reemplazar espacios por guiones
        let formattedTitle = title.replace(/ /g, '-');
        // Eliminar acentos
        formattedTitle = formattedTitle.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return formattedTitle;
    };

    return (
        <div>
            <div className='flex flex-col items-center pt-4'>
                <div>
                    <h1 className='text-5xl pb-4'>Nacional</h1>
                </div>
                <div className='pb-4 lg:w-3/4 md:w-5/6'>
                    {noticias.map((noticia, index) => (
                        <div key={index} className='md:px-0 px-2'>
                            <Link to={`/Nota/${noticia.id}/${formatTitleForURL(noticia.titulo)}`}>
                                <NoticiaGeneral imagen={noticia.rutaImagen} titulo={noticia.titulo} rutaHtml={noticia.rutaHtml} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default Nacional;
