import React from 'react'
import AppRouter from './router/AppRouter'
import './index.scss';
import { ItemsResultsProvider } from './context/itemsResultsContext/ItemsResultsContext';
import { ItemDetailsProvider } from './context/itemDetailsContext/ItemDetailsContext';

export const App = () => {
  return (
    <ItemsResultsProvider>
      <ItemDetailsProvider>
        <AppRouter/>
      </ItemDetailsProvider>
    </ItemsResultsProvider>
  )
}

export default App;
