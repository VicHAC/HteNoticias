import React, { useEffect, useState } from 'react';

const HtmlViewer = ({ htmlFilePath }) => {
  const [htmlContent, setHtmlContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(htmlFilePath);
        const html = await response.text();
        setHtmlContent(html);
        setIsLoading(false); // Cambiar el estado a false cuando se completa la carga
      } catch (error) {
        console.error('Error fetching HTML:', error);
        setIsLoading(false); // En caso de error, también cambiar el estado a false
      }
    };

    fetchHtmlContent();
  }, [htmlFilePath]);

  return (
    <div>
      {isLoading ? ( // Si isLoading es true, muestra el texto de "Cargando..."
        <div>Cargando...</div>
      ) : (
        // Si isLoading es false y htmlContent no es nulo, renderiza el contenido HTML
        htmlContent && (
          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="font-serif"
          />
        )
      )}
    </div>
  );
};

export default HtmlViewer;
