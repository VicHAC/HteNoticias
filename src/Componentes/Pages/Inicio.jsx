import React from 'react'
import { Link } from 'react-router-dom';
import NoticiaPrincipal from '../NoticiaPrincipal'
import NoticiaPrincipalPeque from '../NoticiaPrincipalPeque'
import NoticiaGeneral from '../NoticiaGeneral';
import { Helmet } from 'react-helmet';

function Inicio() {

    const noticiaPrincipal = [
        {
            id: 'C17',
            titulo: "Entregan constancia a Rita Cecilia Contreras como candidata a diputada local al Congreso de la CDMX",
            imagen: "C17.jpg",
            texto: "C17",
            fecha: "20 de Marzo de 2024"
        }
    ];

    const noticiasPrincipalesPeques = [
        {
            id: 'N5',
            titulo: 'Con la 4T queremos seguir desarrollando a Yucatán y al país: Claudia Sheinbaum garantiza bienestar para todos los yucatecos con la llegada de la transformación',
            imagen: "N5.jpg",
            texto: "N5",
            fecha: "14 de Marzo de 2024"
        },
        {
            id: 'C15',
            titulo: "En el Congreso CDMX, tomaron protesta 8 alcaldesas y alcaldes sustitutos",
            imagen: "C15-1.jpg",
            texto: "C15",
            fecha: "19 de Marzo de 2024"
        },
        {
            id: 'N6',
            titulo: 'Apoyar al Sureste es justicia social, justicia territorial y justicia histórica: Claudia Sheinbaum desde Paraíso, Tabasco',
            imagen: "N6.jpg",
            texto: "N6",
            fecha: "16 de Marzo de 2024"
        }
    ];

    const noticiasGenerales = [
        {
            id: 'C14',
            titulo: "GPPRI denuncia clima de violencia preelectoral y agresiones en Cuajimalpa, y responsabiliza a exalcalde Adrián Ruvalcaba",
            imagen: "C14.jpeg",
            texto: "C14",
            fecha: "14 de Marzo de 2024"
        },
        {
            id: 'C13',
            titulo: "Nancy Núñez se consolida como la preferida de Los Chintololos para llegar a la Alcaldía Azcapotzalco",
            imagen: "C13.jpeg",
            texto: "C13",
            fecha: "10 de Marzo de 2024"
        },
        {
            id: 'N3',
            titulo: "Vamos por más democracia, por más libertades y más justicia para el pueblo de México: Claudia Sheinbaum desde San Pedro Cholula, Puebla",
            imagen: "N3.jpeg",
            texto: "N3"
        },
        {
            id: 'C10',
            titulo: "Jóvenes que apoyan a Claudia Sheinbaum presentan la campaña “Por La Primera Presidenta de México”",
            imagen: "C10.jpeg",
            texto: "C10"
        },
        {
            id: 'C6',
            titulo: 'La comunidad de Azcapotzalco respalda a la Doctora Claudia Sheinbaum rumbo a la Presidencia de México',
            imagen: 'C6.jpeg',
            texto: 'C6'
        },
        {
            id: 'C9',
            titulo: "Integra Fernando Mercado equipo de trabajo para la elaboración de proyecto de plan de gobierno en La Magdalena Contreras",
            imagen: "C9.jpeg",
            texto: "C9"
        },
        {
            id: 'C8',
            titulo: "Proyecto de gobierno de Clara Brugada humanista e incluyente: Sebastián Ramírez",
            imagen: "C8.jpeg",
            texto: "C8"
        },
        {
            id: 'C7',
            titulo: "Taboada prioriza en sus ejes de gobierno a las mujeres",
            imagen: "C7.jpeg",
            texto: "C7"
        },
        {
            id: '5',
            titulo: "Solicita PAN conocer déficit de tarjetas inteligentes en el Metro",
            imagen: "deficitTarjetasMetro.jpeg",
            texto: "DeficitTarjetasMetro"
        },
        {
            id: '4',
            titulo: 'La CDMX debe aplicar la estrategia de seguridad "blindar" que implementó Santiago Taboada en Benito Juárez: Lía Limón',
            imagen: 'seguridadLiaLimon.jpeg',
            texto: 'SeguridadLiaLimon'
        },
        {
            id: '3',
            titulo: "Organizaciones anti taurinos reclaman avanzar con dictamen que prohíbe esta práctica en CDMX",
            imagen: "organizacionesAntitaurinos.jpeg",
            texto: "OrganizacionesAntitaurinos"
        },
        {
            id: '1',
            titulo: "Se Registra Octavio Rivero Como Candidato de MORENA a la Alcaldía de Milpa Alta",
            imagen: "registraOctavio.jpeg",
            texto: "RegistraOctavio"
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
    <div className=''>
        <Helmet>
            <title>HorizonteNoticias | Inicio</title>
            <meta name="description" content="Enterate de las últimas noticias y análisis político desde la Ciudad de México y a nivel nacional." />
            <link rel="canonical" href="https://www.horizontenoticias.com.mx/" />
            <meta property="og:url" content="https://www.horizontenoticias.com.mx/" />
            <meta name="keywords" content="horizonte, noticias, actualidad, información, cdmx ,CDMX, mexico, México, política, congreso, nacional, elecciones, gobierno, sociedad, economía, sociedad, cultura, educación, salud, medio ambiente, seguridad, desarrollo, opinión, análisis, Claudia Sheinbaum, Xochitl Galvez" />
        </Helmet>
        <div className='flex flex-col items-center pt-4 '>

{/* ################################# NOTICIA PRINCIPAL GRANDE ################################# */}           
            
            <div className='lg:w-3/5 md:w-5/6 md:h-96 w-full h-auto md:px-0 px-2 pb-2'>
                <Link to={`/Nota/${noticiaPrincipal[0].id}/${formatTitleForURL(noticiaPrincipal[0].titulo)}`}>
                    <NoticiaPrincipal imagen={noticiaPrincipal[0].imagen} titulo={noticiaPrincipal[0].titulo} />
                </Link>
            </div>

{/* ################################# NOTICIAS PRINCIPALES PEQUE ################################# */}            
            
            <div className='md:flex lg:w-3/5 md:w-5/6 md:h-auto w-full md:space-x-2 md:space-y-0 space-y-2 md:px-0 px-2 md:pb-8 pb-6'>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2 border border-solid border-gray-500 shadow rounded hover:brightness-50 transition duration-300'>
                <Link to={`/Nota/${noticiasPrincipalesPeques[0].id}/${formatTitleForURL(noticiasPrincipalesPeques[0].titulo)}`}>
                    <NoticiaPrincipalPeque imagen={noticiasPrincipalesPeques[0].imagen} titulo={noticiasPrincipalesPeques[0].titulo}/>
                </Link>                
                </div>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2 border border-solid border-gray-500 shadow rounded hover:brightness-50 transition duration-300'>
                <Link to={`/Nota/${noticiasPrincipalesPeques[1].id}/${formatTitleForURL(noticiasPrincipalesPeques[1].titulo)}`}>
                    <NoticiaPrincipalPeque imagen={noticiasPrincipalesPeques[1].imagen} titulo={noticiasPrincipalesPeques[1].titulo}/>
                </Link>                
                </div>
                <div className='md:w-1/3 w-full h-auto md:pb-0 pb-2 border border-solid border-gray-500 shadow rounded hover:brightness-50 transition duration-300'>
                <Link to={`/Nota/${noticiasPrincipalesPeques[2].id}/${formatTitleForURL(noticiasPrincipalesPeques[2].titulo)}`}>
                    <NoticiaPrincipalPeque imagen={noticiasPrincipalesPeques[2].imagen} titulo={noticiasPrincipalesPeques[2].titulo}/>
                </Link>
                </div>
            </div>

{/* ################################# NOTICIAS GENERALES ################################# */}
            <div className='pb-4 lg:w-3/4 md:w-5/6'>
                {noticiasGenerales.map((noticiaGeneral, index) => (
                    <div key={index} className='md:px-0 px-2'>
                        <Link to={`/Nota/${noticiaGeneral.id}/${formatTitleForURL(noticiaGeneral.titulo)}`}>
                            <NoticiaGeneral 
                                imagen={noticiaGeneral.imagen} 
                                titulo={noticiaGeneral.titulo} 
                                rutaHtml={noticiaGeneral.texto} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Inicio