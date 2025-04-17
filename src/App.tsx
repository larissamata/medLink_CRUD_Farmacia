import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import './App.css';
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos';
import FormProdutos from './components/produtos/formprodutos/FormProdutos';
import FormCategorias from './components/categorias/formcategorias/FormCategorias';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrarprodutos" element={<FormProdutos />} />
            <Route path="/atualizarprodutos" element={<FormProdutos />} />
            <Route path="/deletarprodutos/:id" element={<FormProdutos />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastrarcategorias" element={<FormCategorias />} />
            <Route path="/atualizarcategorias" element={<FormCategorias />} />
            <Route path="/deletarcategorias/:id" element={<FormCategorias />} />
            <Route path="/categorias" element={<ListaCategorias />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
