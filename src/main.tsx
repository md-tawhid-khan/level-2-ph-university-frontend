import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/routers.js';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'sonner';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router}/>
     <Toaster />
    </PersistGate>
    </Provider>
  </StrictMode>,
)
