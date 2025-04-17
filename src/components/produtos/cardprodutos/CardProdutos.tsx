
import { Link } from 'react-router-dom'
import { Produtos } from '../../../models/Produtos'

interface CardProdutosProps{
    produtos: Produtos
}



function CardProdutos({ produtos} : CardProdutosProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                Produtos
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{produtos.descricao}</p>
            
            <div className="flex">
                <Link to={`/atualizarprodutos/${produtos.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarprodutos/${produtos.id}`}
                className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardProdutos


