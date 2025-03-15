import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Insert_data from './Insert_data.jsx'
import Read_all_Data from './Read_all_Data.jsx'
import Phone from './phone.jsx'
import UpdatePhoneData from './UpdatePhoneData.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/insert_AData',
    element: <Insert_data></Insert_data>
  },
  {
    path: '/read_all_data',
    element: <Read_all_Data></Read_all_Data>
  },
  {
    path: '/updatePhoneData/:id',
    element: <UpdatePhoneData></UpdatePhoneData>,
    loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`)

  },
  {
    path: '/phones/:id',
    element: <Phone></Phone>,
    loader: async ({ params }) => {
      try {
        // Fetch phone data from the API
        const response = await fetch(`http://localhost:5000/phones/${params.id}`);

        if (!response.ok) {
          throw new Error('Phone not found');
        }

        const phone = await response.json();  // Assuming the response is JSON
        return phone;  // Return the phone data so that useLoaderData can access it
      } catch (error) {
        console.error('Error loading phone data:', error);
        return null;  // Return null or an error object if something goes wrong
      }
    }
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
