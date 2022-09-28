import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider, } from '@tanstack/react-query'
const queryClient = new QueryClient()

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
