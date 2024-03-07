import React, { useEffect, useState } from 'react';

const HeadlessHtmlComponent = ({ filePath }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(filePath);
        const htmlText = await response.text();

        // Elimina el contenido del head
        const headlessHtml = htmlText.replace(/<head>[\s\S]*<\/head>/i, '');

        setHtmlContent(headlessHtml);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al cargar el archivo HTML', error);
        // Intentar cargar nuevamente después de un breve intervalo
        setTimeout(() => {
          fetchHtmlContent();
        }, 1000); // Puedes ajustar el tiempo de espera según tus necesidades
      }
    };

    fetchHtmlContent();
  }, [filePath]);

  if (isLoading) {
    // Puedes mostrar un indicador de carga mientras se intenta volver a cargar
    return <div>Cargando...</div>;
  }

  return (
    <div className="text-base leading-6 font-sans" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default HeadlessHtmlComponent;
