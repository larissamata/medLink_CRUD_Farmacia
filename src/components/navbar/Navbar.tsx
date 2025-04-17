import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="w-full bg-[#d6f2ee] text-[#006D77] flex justify-center py-4">
            <div className="w-full flex justify-between items-center text-lg container">
                <Link to="/home" className="text-1xl text-[#006D77]">
                    <span>Veja mais projetos aqui</span>
                </Link>

                <div className="flex gap-8">
                    <Link to="/cadastrarprodutos" className="font-bold text-[#006D77] hover:text-[#FF6B6B] hover:underline">
                        Cadastrar Produto
                    </Link>

                    <Link to="/produtos" className="font-bold text-[#006D77] hover:text-[#FF6B6B] hover:underline">
                        Produtos
                    </Link>

                    <Link to="/cadastrarcategorias" className="font-bold text-[#006D77] hover:text-[#FF6B6B] hover:underline">
                        Cadastrar Categoria
                    </Link>

                    <Link to="/categorias" className="font-bold text-[#006D77] hover:text-[#FF6B6B] hover:underline">
                        Categorias
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
