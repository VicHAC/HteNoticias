import React from 'react'
import NoticiaGeneral from '../NoticiaGeneral'
import { Link } from 'react-router-dom'

function Opinion() {
    const idNoticia = '1';
  
    const tituloNoticiaG1 = "";
    const rutaImagenG1 = "";
    const rutaHtmlG1 = "";


    const queryParamsG1 = new URLSearchParams();
    queryParamsG1.append('T', tituloNoticiaG1);
    queryParamsG1.append('I', rutaImagenG1);
    queryParamsG1.append('H', rutaHtmlG1);

  return (
    <div>
      <div className='flex flex-col items-center pt-4'>
        <div>
          <h1 className='text-5xl pb-4'>Opinion</h1>
        </div>
        <div className='pb-4 lg:w-3/4 md:w-5/6'>
            <div className='md:px-0 px-2'>
            {/*<Link to={`/Boletin/${idNoticia}?${queryParamsG1.toString()}`}>
                <NoticiaGeneral imagen={rutaImagenG1} titulo={tituloNoticiaG1} rutaHtml={rutaHtmlG1}/>
              </Link>*/}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Opinion