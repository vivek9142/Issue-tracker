// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
// Import reducer
import issueReducer from './Redux/Reducer/issueReducer';
import userReducer from './Redux/Reducer/userReducer';


function render(
  ui,
  {
    preloadedState,
    store = configureStore({reducer:{issue:issueReducer,user:userReducer}, preloadedState}),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method of @testing-library/react
export { render}
