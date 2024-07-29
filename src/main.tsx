import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';
import { Provider } from 'react-redux';
import { store, persister } from './services/store';
import { PersistGate } from 'redux-persist/integration/react';

// Application to Render

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <Application />
    </PersistGate>
  </Provider>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
