import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@src/pages/Layout/Layout';
import ErrorPage from '@src/pages/ErrorPage/ErrorPage';
import ViewNote from '@src/pages/ViewNote/ViewNote';
import HomePage from '@src/pages/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'viewnote/:id',
        element: <ViewNote />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const Application: React.FC = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default Application;
