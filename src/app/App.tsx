import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <>
      <Toaster 
        theme="dark" 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: '#1a1005',
            color: '#ffb000',
            border: '1px solid #ffb000',
            fontFamily: "'Fira Code', monospace",
            borderRadius: '0'
          }
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}
