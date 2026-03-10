// App.jsx
import { MoonPayProvider } from '@moonpay/moonpay-react';
import Home from './Home';

const API_KEY = "";
function App() {
  return (
    <MoonPayProvider apiKey={API_KEY} debug>
      <Home />
    </MoonPayProvider>
  );
}
export default App;