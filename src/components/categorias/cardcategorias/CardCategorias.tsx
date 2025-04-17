import { Link } from 'react-router-dom'
import { Categorias } from '../../../models/Categorias'

interface CardCategoriasProps{
    categorias: Categorias
}

function CardCategorias({ categorias }: CardCategoriasProps) {
    return (
        <div className='border border-light-gray flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-4 px-6 bg-[#006D77] text-white font-bold text-2xl'>
                Produtos
            </header>
            <p className='p-8 text-3xl bg-[#d6f2ee] text-[#2E2E2E] h-full'>{categorias.descricao}</p>
            
            <div className="flex space-x-4 p-4">
                <Link 
                    to={`/atualizarcategorias/${categorias.id}`}
                    className='w-full text-white bg-[#006D77] hover:bg-[#004f4f] flex items-center justify-center py-2 rounded-xl'
                >
                    <button className='font-semibold'>Editar</button>
                </Link>

                <Link 
                    to={`/deletarcategorias/${categorias.id}`}
                    className='w-full text-white bg-[#FF6B6B] hover:bg-[#e55d5d] flex items-center justify-center py-2 rounded-xl'
                >
                    <button className='font-semibold'>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias
