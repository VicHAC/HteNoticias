import React from 'react';
import NoticiaSinFoto from '../NoticiaSinFoto';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Opinion() {
    const noticias = [
        {
            id: 'O1',
            titulo: 'Programas sociales ¿bandera de la oposición?',
            texto: "O1",
            nombreDeLaColumna: "Café con Adorno",
            autorDeLaNota: "Raúl Adorno Jiménez",
            fotoDelAutor: "RaulAdorno.jpeg"
        }
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
            <Helmet>
                <title>HorizonteNoticias | Opinion</title>
                <meta name="description" content="Enterate de las opiniones y análisis sobre temas de interés político y social. Descubre diferentes perspectivas sobre la actualidad y debates en profundidad sobre temas relevantes en México." />
                <link rel="canonical" href="https://www.horizontenoticias.com.mx/#/Opinion" />
                <meta property="og:url" content="https://www.horizontenoticias.com.mx/#/Opinion" />
                <meta name="keywords" content="noticias, actualidad, información, CDMX, México, política, congreso, nacional, elecciones, gobierno, sociedad, economía, sociedad, cultura, educación, salud, medio ambiente, seguridad, desarrollo, opinión, análisis, Claudia Sheinbaum, Xochitl Galvez" />
             </Helmet>
            <div className='flex flex-col items-center pt-4'>
                <div>
                    <h1 className='text-5xl pb-4'>Opinion</h1>
                </div>
                <div className='pb-4 lg:w-3/4 md:w-5/6'>
                    {noticias.map((noticia, index) => (
                        <div key={index} className='md:px-0 px-2'>
                            <Link to={`/Nota/${noticia.id}/${formatTitleForURL(noticia.titulo)}`}>
                                <NoticiaSinFoto 
                                    titulo={noticia.titulo} 
                                    rutaHtml={noticia.texto} 
                                    nombreColumna={noticia.nombreDeLaColumna} 
                                    notaAutor={noticia.autorDeLaNota} 
                                    foto={noticia.fotoDelAutor}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Opinion;
