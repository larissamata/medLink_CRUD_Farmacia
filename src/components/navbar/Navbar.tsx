import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate();
    
    let component: ReactNode

    component = (
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-1xl font-bold">Projeto MedLink</Link>

                <div className='flex gap-8'>
                    <Link to='/cadastrarproduto' className='text-[#006D77] hover:text-[#FF6B6B] hover:underline'>Cadastrar Produto</Link>

                    <Link to='/produtos' className='text-[#006D77] hover:text-[#FF6B6B] hover:underline'>Produtos</Link>

                    <Link to='/cadastrarcategoria' className='text-[#006D77] hover:text-[#FF6B6B] hover:underline'>Cadastrar Categoria</Link>

                    <Link to='/categorias' className='text-[#006D77] hover:text-[#FF6B6B] hover:underline'>Categorias</Link>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {component}
        </>
    )
}

export default Navbar;
