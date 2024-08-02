import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';
import { Provider } from 'react-redux';
import { store, persister } from './services/store';
import { PersistGate } from 'redux-persist/integration/react';

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <Application />
    </PersistGate>
  </Provider>
);

createRoot(document.getElementById('app')).render(app);
