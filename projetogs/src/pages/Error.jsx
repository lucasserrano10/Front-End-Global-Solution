import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center border border-gray-200">
        <h1 className="text-6xl font-bold text-emerald-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Ops! Algo deu errado.
        </h2>
        <p className="mt-5 mb-5 text-gray-600">
          {error.statusText || error.message || 'Página não encontrada.'}
        </p>
        <Link to="/" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-red-900'>Voltar à Página Inicial</Link>
      </div>
    </div>
  );
};

export default Error;
