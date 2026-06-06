import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import {router} from "./routing/router.ts";
import {Toaster} from "react-hot-toast";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/configs/react-query/configs.ts';
import { QueryClientProvider } from '@tanstack/react-query';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  </StrictMode>,
)
