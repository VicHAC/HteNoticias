import React from 'react';
import NoticiaGeneral from '../NoticiaGeneral';
import { Link } from 'react-router-dom';

function Cdmx() {

    const noticias = [
        {
            id: 'C14',
            titulo: "GPPRI denuncia clima de violencia preelectoral y agresiones en Cuajimalpa, y responsabiliza a exalcalde Adrián Ruvalcaba",
            rutaImagen: "C14.jpeg",
            rutaHtml: "C14",
            fecha: "14 de Marzo de 2024"
        },
        {
            id: 'C13',
            titulo: "Nancy Núñez se consolida como la preferida de Los Chintololos para llegar a la Alcaldía Azcapotzalco",
            rutaImagen: "C13Nancy.jpeg",
            rutaHtml: "C13",
            fecha: "10 de Marzo de 2024"
        },
        {
            id: 'C12',
            titulo: "Demandan a Santiago Taboada acciones para frenar y prevenir todo tipo de violencia hacia las mujeres",
            rutaImagen: "C12.jpeg",
            rutaHtml: "C12",
            fecha: "8 de Marzo de 2024"
        },
        {
            id: 'C11',
            titulo: "PAN exige dar de baja a diputados faltistas de la Comisión de Gestión Integral del Agua",
            rutaImagen: "C11.jpeg",
            rutaHtml: "C11",
            fecha: "29 de Febrero 2024"
        },
        {
            id: 'C10',
            titulo: 'Jóvenes que apoyan a Claudia Sheinbaum presentan la campaña "Por La Primera Presidenta de México"',
            rutaImagen: "C10.jpeg",
            rutaHtml: "C10"
        },
        {
            id: 'C9',
            titulo: "Integra Fernando Mercado equipo de trabajo para la elaboración de proyecto de plan de gobierno en La Magdalena Contreras",
            rutaImagen: "C9.jpeg",
            rutaHtml: "C9"
        },
        {
            id: 'C8',
            titulo: "Proyecto de gobierno de Clara Brugada humanista e incluyente: Sebastián Ramírez",
            rutaImagen: "C8.jpeg",
            rutaHtml: "C8"
        },
        {
            id: 'C7',
            titulo: "Taboada prioriza en sus ejes de gobierno a las mujeres",
            rutaImagen: "C7.jpeg",
            rutaHtml: "C7"
        },
        {
            id: 'C6',
            titulo: "La comunidad de Azcapotzalco respalda a la Doctora Claudia Sheinbaum rumbo a la Presidencia de México",
            rutaImagen: "C6.jpeg",
            rutaHtml: "C6"
        },
        {
            id: 'C5',
            titulo: "Registra PRD CDMX a Rita Contreras Ocampo como su candidata al Distrito 12 local de la Alcaldía Cuauhtémoc",
            rutaImagen: "C5.jpeg",
            rutaHtml: "C5"
        },
        {
            id: 'C4',
            titulo: "Ana Villagrán renuncia al PAN e irá ante el INE a presentar denuncia por violencia política de género",
            rutaImagen: "C4",
            rutaHtml: "C4"
        },
        {
            id: 'C3',
            titulo: "Tras denuncia ciudadana, Sandra Cuevas ordena retiro de puesto cuyo dueño, con cuchillo en mano, intentó atacar a una mujer",
            rutaImagen: "C3.jpeg",
            rutaHtml: "C3"
        },
        {
            id: 'C2',
            titulo: "Federico Chávez señala a Sebastián Ramírez de ordenar el acoso político a vecinos de alcaldías de oposición",
            rutaImagen: "C2.jpeg",
            rutaHtml: "C2"
        },
        {
            id: 'C1',
            titulo: "Diputada gestiona venta accesible de tinacos para la ciudadanía",
            rutaImagen: "C1.jpeg",
            rutaHtml: "C1"
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
            <div className='flex flex-col items-center pt-4'>
                <div>
                    <h1 className='text-5xl pb-4'>CDMX</h1>
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

export default Cdmx;
