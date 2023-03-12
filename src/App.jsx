import { AppRouter } from './routers/AppRouter';

import './App.css';
import { AuthProvider } from './auth/context';


function App() {

  return (
    <AuthProvider>

      <AppRouter />

    </AuthProvider>
  );
}

export default App;
