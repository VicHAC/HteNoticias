import React from 'react';
import { useParams } from 'react-router-dom';
import HtmlViewer from './HtmlViewer';
import Autor from './Autor';
import { Helmet } from 'react-helmet';

const Nota = () => {
  const { id } = useParams(); // Obtener el ID de la noticia de los parámetros de la URL

  let titulo, imagen, texto, autorImagen, autorTexto, fecha, autorRaul, columna, foto;

  // Switch-case para determinar la información según el ID
  switch (id) {
    case 'C14':
      titulo = "GPPRI denuncia clima de violencia preelectoral y agresiones en Cuajimalpa, y responsabiliza a exalcalde Adrián Ruvalcaba";
      fecha = "14 de Marzo de 2024";
      autorImagen = "Cortesia";
      imagen = "C14.jpeg";
      autorTexto = "";
      texto = "C14.html";
      break;

      case 'C13':
      titulo = "Nancy Núñez se consolida como la preferida de Los Chintololos para llegar a la Alcaldía Azcapotzalco";
      fecha = "10 de Marzo de 2024";
      autorImagen = "Cortesia";
      imagen = "C13.jpeg";
      autorTexto = "";
      texto = "C13.html";
      break;

      case 'C12':
      titulo = "Demandan a Santiago Taboada acciones para frenar y prevenir todo tipo de violencia hacia las mujeres";
      fecha = "8 de Marzo de 2024";
      autorImagen = "Cortesia";
      imagen = "C12.jpeg";
      autorTexto = "";
      texto = "C12.html";
      break;

      case 'C11':
      titulo = "PAN exige dar de baja a diputados faltistas de la Comisión de Gestión Integral del Agua";
      fecha = "29 de Febrero 2024";
      autorImagen = "Cortesia";
      imagen = "C11.jpeg";
      autorTexto = "";
      texto = "C11.html";
      break;

      case 'C10':
      titulo = 'Jóvenes que apoyan a Claudia Sheinbaum presentan la campaña "Por La Primera Presidenta de México"';
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "C10.jpeg";
      autorTexto = "";
      texto = "C10.html";
      break;

      case 'C9':
      titulo = "Integra Fernando Mercado equipo de trabajo para la elaboración de proyecto de plan de gobierno en La Magdalena Contreras";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "C9.jpeg";
      autorTexto = "";
      texto = "C9.html";
      break;

      case 'C8':
      titulo = "Proyecto de gobierno de Clara Brugada humanista e incluyente: Sebastián Ramírez";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "C8.jpeg";
      autorTexto = "";
      texto = "C8.html";
      break;

      case 'C7':
      titulo = "Taboada prioriza en sus ejes de gobierno a las mujeres";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "C7.jpeg";
      autorTexto = "";
      texto = "C7.html";
      break;

      case 'C6':
      titulo = "La comunidad de Azcapotzalco respalda a la Doctora Claudia Sheinbaum rumbo a la Presidencia de México";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "C6.jpeg";
      autorTexto = "";
      texto = "C6.html";
      break;

      case 'C5':
      titulo = "Registra PRD CDMX a Rita Contreras Ocampo como su candidata al Distrito 12 local de la Alcaldía Cuauhtémoc";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "C5.jpeg";
      autorTexto = "";
      texto = "C5.html";
      break;

      case 'C4':
      titulo = "Ana Villagrán renuncia al PAN e irá ante el INE a presentar denuncia por violencia política de género";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "C4.jpeg";
      autorTexto = "";
      texto = "C4.html";
      break;

      case 'C3':
      titulo = "Tras denuncia ciudadana, Sandra Cuevas ordena retiro de puesto cuyo dueño, con cuchillo en mano, intentó atacar a una mujer";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "C3.jpeg";
      autorTexto = "";
      texto = "C3.html";
      break;

      case 'C2':
      titulo = "Federico Chávez señala a Sebastián Ramírez de ordenar el acoso político a vecinos de alcaldías de oposición";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "C2.jpeg";
      autorTexto = "";
      texto = "C2.html";
      break;

      case 'C1':
      titulo = "Diputada gestiona venta accesible de tinacos para la ciudadanía";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "C1.jpeg";
      autorTexto = "";
      texto = "C1.html";
      break;

    // NOTICIAS NACIONALES
    case 'N1':
      titulo = "Urge que alcaldías destinen un porcentaje de su presupuesto para esterilizar perros y gatos callejeros: Javier Ramos";
      fecha = "Fecha de la Noticia 1";
      autorImagen = "Cortesia";
      imagen = "N1.jpeg";
      autorTexto = "";
      texto = "N1.html";
      break;

    case 'N2':
      titulo = "Incluido el Presidente de la República, ningún político ganará más de 50 mil pesos mensuales, primera propuesta de Sandra Cueva al Senado";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "N2.jpeg";
      autorTexto = "";
      texto = "N2.html";
      break;

    case 'N3':
      titulo = "Vamos por más democracia, por más libertades y más justicia para el pueblo de México: Claudia Sheinbaum desde San Pedro Cholula, Puebla";
      fecha = "10 de Marzo de 2024";
      autorImagen = "Cortesia";
      imagen = "N3.jpeg";
      autorTexto = "";
      texto = "N3.html";
      break;

    case 'N4':
      titulo = "Este 2 de junio será una fiesta democrática gracias al pueblo de México: Claudia Sheinbaum llama a defender la democracia y a la 4T en las urnas";
      fecha = "12 de Marzo de 2024";
      autorImagen = "Cortesia";
      imagen = "N4.jpeg";
      autorTexto = "";
      texto = "N4.html";
      break;

      case 'N5':
      titulo = "Con la 4T queremos seguir desarrollando a Yucatán y al país: Claudia Sheinbaum garantiza bienestar para todos los yucatecos con la llegada de la transformación";
      fecha = "14 de Marzo de 2024";
      autorImagen = "Cortesia";
      imagen = "N5.jpg";
      autorTexto = "";
      texto = "N5.html";
      break;

      case 'N6':
      titulo = "Apoyar al Sureste es justicia social, justicia territorial y justicia histórica: Claudia Sheinbaum desde Paraíso, Tabasco";
      fecha = "16 de Marzo de 2024";
      autorImagen = "Cortesia";
      imagen = "N6.jpg";
      autorTexto = "";
      texto = "N6.html";
      break;

      // NOTICIAS DE OPINION
      case 'O1':
      titulo = "Programas sociales ¿bandera de la oposición?";
      fecha = "";
      autorImagen = "";
      imagen = "";
      texto = "O1.html";
      autorRaul = "Raúl Adorno Jiménez";
      columna = "Café con Adorno";
      foto = "RaulAdorno.jpeg"
      break;
      
      //Primeras Noticias en Existir
      case '1':
      titulo = "Se Registra Octavio Rivero Como Candidato de MORENA a la Alcaldía de Milpa Alta";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "registraOctavio.jpeg";
      autorTexto = "";
      texto = "RegistraOctavio.html";
      break;

      case '2':
      titulo = "Lineamientos garantizan en el PJCDMX respeto a derechos humanos de indígenas";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "lineamientosRespeto.jpeg";
      autorTexto = "";
      texto = "LineamientosRespeto.html";
      break;

      case '3':
      titulo = "Organizaciones anti taurinos reclaman avanzar con dictamen que prohíbe esta práctica en CDMX";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "organizacionesAntitaurinos.jpeg";
      autorTexto = "";
      texto = "OrganizacionesAntitaurinos.html";
      break;

      case '4':
      titulo = 'La CDMX debe aplicar la estrategia de seguridad "blindar" que implementó Santiago Taboada en Benito Juárez: Lía Limón';
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "seguridadLiaLimon.jpeg";
      autorTexto = "";
      texto = "SeguridadLiaLimon.html";
      break;

      case '5':
      titulo = "Solicita PAN conocer déficit de tarjetas inteligentes en el Metro";
      fecha = "";
      autorImagen = "Cortesia";
      imagen = "deficitTarjetasMetro.jpeg";
      autorTexto = "";
      texto = "DeficitTarjetasMetro.html";
      break;


    default:
      titulo = "Noticia no encontrada";
      imagen = "";
      texto = "";
  }
  
  // Función para formatear el título de la noticia para la URL
  const formatTitleForURL = (title) => {
    // Reemplazar espacios por guiones
    let formattedTitle = title.replace(/ /g, '-');
    // Eliminar acentos
    formattedTitle = formattedTitle.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return formattedTitle;
  };

  // Extraer las palabras clave del título
  const extractKeywordsFromTitle = (title) => {
    // Eliminar palabras comunes y caracteres especiales
    const commonWords = ['tras', 'cuyo','irá','ante','al', 'del', 'dar', 'como','se', 'desde','a','sus','las','los','e', 'u', 'el', 'la', 'de', 'en', 'para', 'con', 'y', 'o', 'que', 'es', 'un', 'una', 'por', 'más'];
    // Función para limpiar los caracteres especiales alrededor de una palabra
    const cleanWord = (word) => {
      return word.replace(/[^a-zA-Z0-9áéíóúüÁÉÍÓÚÜñÑ]/g, ''); // Eliminar caracteres especiales
    };
    // Separar el título en palabras y filtrar palabras comunes
    const words = title.split(' ').map(cleanWord).filter(word => !commonWords.includes(word.toLowerCase()));
    // Limitar a las primeras 15 palabras clave
    return words.slice(0, 15).join(', ');
  };

  return (
    <div className='flex flex-col items-center'>
      <Helmet>
        <title>{titulo}</title>
        <meta name="description" content={titulo} />  
        <meta property="og:image" content={imagen} />
        <meta property="og:title" content={titulo} />
        <link rel="canonical" href={`https://www.horizontenoticias.com.mx/#/Nota/${id}/${formatTitleForURL(titulo)}`} />
        <meta property="og:url" content={`https://www.horizontenoticias.com.mx/#/Nota/${id}/${formatTitleForURL(titulo)}`} />
        <meta name="keywords" content={extractKeywordsFromTitle(titulo)} />
      </Helmet>
      <div className='lg:w-3/4 md:w-5/6 md:px-0 px-3'>
        <div className='py-4'>
          <h1 className='md:text-3xl text-2xl text-justify font-bold'>{titulo}</h1>
        </div>
        <div className='text-right'>
            {autorRaul && <div><Autor nombreDeLaColumna={columna}
            autorDeLaNota={autorRaul}
            fotoDelAutor={foto}/></div>}
        </div>
        <div className='flex justify-between'>
          <div className='text-right'>
            {autorImagen && <div>Foto: {autorImagen}</div>}
          </div>
          <div className='text-right'>
            {fecha && <div>{fecha}</div>}
          </div>
        </div>
        <div className='text-right'>
            {imagen && 
              <div className='w-full h-96 overflow-hidden'>
                <img 
                  className="w-full h-full object-cover"
                  src={`Img/${imagen}`}
                  alt={titulo}
                />
              </div>
            }
        </div>
        <div className='py-4 font-mono text-justify'>
          {texto && <div><HtmlViewer htmlFilePath={`Bol/${texto}`}/></div>}
        </div>
      </div>
    </div>
  );
};

export default Nota;
