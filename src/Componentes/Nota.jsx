import React, { useState, useEffect } from 'react';
import HeadlessHtmlComponent from './HeadlessHtmlComponent';
import { PiCoffee } from 'react-icons/pi';

function Nota() {
  const [titulo, setTitulo] = useState('');
  const [rutaImagen, setRutaImagen] = useState('');
  const [rutaHtml, setRutaHtml] = useState('');
  const [fecha, setFecha] = useState(null); // Nuevo estado para la fecha
  const [imagenAutor, setImagenAutor] = useState(null); // Nuevo estado para la fecha
  const [notaAutor, setNotaAutor] = useState(null); // Nuevo estado para la fecha
  const [nombreColumna, setNombreColumna] = useState(null); // Nuevo estado para la fecha
  const [foto, setFoto] = useState(null); // Nuevo estado para la fecha

  useEffect(() => {
    // Obtén la parte de la URL después del hash (#)
    const hashParams = window.location.hash.split('?')[1];
    const params = new URLSearchParams(hashParams);

    const titulo = params.get('T');
    const imagen = params.get('I');
    const html = params.get('H');
    const fechaParam = params.get('F');
    const imagenAutor = params.get('IA');
    const notaAutor = params.get('NA');
    const nombreColumna = params.get('NC');
    const foto = params.get('Fo');

    setTitulo(titulo);
    setRutaImagen(imagen);
    setRutaHtml(html);
    setFecha(fechaParam); 
    setImagenAutor(imagenAutor); 
    setNotaAutor(notaAutor);
    setNombreColumna(nombreColumna);
    setFoto(foto);
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <div className='lg:w-3/4 md:w-5/6 md:px-0 px-2'>
        <div className='py-4'>
          <h1 className='md:text-3xl text-2xl text-justify font-bold'>{titulo}</h1>
        </div>
        <div className='flex'>
          <div>
              {nombreColumna && <PiCoffee className='text-6xl text-red-800'/>}
          </div>
          <div className='pl-2'>
            <div className='text-left'>
              {nombreColumna && <h1 className='text-lg font-bold underline'>{nombreColumna}</h1>}
            </div>
            <div className='text-left'>
              {notaAutor && <h1 className='text-lg'>Por: {notaAutor}</h1>}
            </div>
          </div>
          <div className="md:ml-2 ml-auto">
              {foto && 
                <div className="w-10 rounded overflow-hidden">
                <img
                src={`Img/${foto}.jpeg`}
                className="w-full h-full object-cover"
                />
                </div>}
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='text-right'>
            {imagenAutor && <div>Foto: {imagenAutor}</div>}
          </div>
          <div className='text-right'>
            {fecha && <div>{fecha}</div>}
          </div>
        </div>
        <div className='text-right'>
            {rutaImagen && 
              <div className='w-full h-96 overflow-hidden'>
                <img 
                  className="w-full h-full object-cover"
                  src={`Img/${rutaImagen}.jpeg`}
                  alt="imagen"
                />
              </div>
            }
        </div>
        <div className='py-4 font-mono text-justify'>
          <HeadlessHtmlComponent filePath={`Bol/${rutaHtml}.html`} />
        </div>
      </div>
    </div>
  );
}

export default Nota;
