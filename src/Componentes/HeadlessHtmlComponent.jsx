import React, { useEffect, useState } from 'react';

const HeadlessHtmlComponent = ({ filePath }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(filePath);
        const htmlText = await response.text();

        // Elimina el contenido del head
        const headlessHtml = htmlText.replace(/<head>[\s\S]*<\/head>/i, '');

        setHtmlContent(headlessHtml);
      } catch (error) {
        console.error('Error al cargar el archivo HTML', error);
      }
    };

    fetchHtmlContent();
  }, [filePath]);

  return (
    <div className="text-base font-serif text-gray-800 leading-6" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default HeadlessHtmlComponent;
