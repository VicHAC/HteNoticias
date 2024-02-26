import React from 'react';

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The page you are looking for might be in another castle.</p>
        <p className="text-gray-600">Return to <a href="/">home</a>.</p>
      </div>
    </div>
  );
}

export default NotFound;
