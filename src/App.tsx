import { Route, Routes } from 'react-router-dom';
import './App.css';
import Habilidades from './components/Habilidades';
import TrybeContent from './components/TrybeContent';
import Descricao from './components/Descricao';
import Layout from './components/Layout';
import GlobalStyles from './styles/global-styles';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Descricao /> } />
        <Route path="/trybecontent" element={ <TrybeContent /> } />
        <Route path="/habilidades" element={ <Habilidades /> } />
      </Route>
    </Routes>
  );
}

export default App;
