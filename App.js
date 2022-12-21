import 'intl';
import 'intl/locale-data/jsonp/es';
import { AuthProvider, ThemeProvider } from './src/context';
import { RootNavigation } from './src/navigation/RootNavigation';
import './src/utils/yup-methods';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </ThemeProvider>
  );
}


