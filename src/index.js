import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/fullStack',
//         element: <FullStack />,
//       },
//       {
//         path: '/datascience',
//         element: <DataScience />,
//       },
//       {
//         path: '/cybersecurity',
//         element: <CyberSecurity />,
//       },
//       {
//         path: '/careers',
//         element: <Career />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
