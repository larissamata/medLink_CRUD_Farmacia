import { Link } from 'react-router-dom';
import { Produtos } from '../../../models/Produtos';

interface CardProdutosProps {
    produtos: Produtos;
}

function CardProdutos({ produtos }: CardProdutosProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
            <header className="py-2 px-6 bg-[#006D77] text-white font-bold text-2xl">
                Produtos
            </header>
            
            <p className="p-8 text-3xl bg-[#d6f2ee] text-[#2E2E2E] h-full">
                {produtos.descricao}
            </p>

            <div className="flex gap-4">
                <Link 
                    to={`/atualizarprodutos/${produtos.id}`} 
                    className="w-full text-[#2E2E2E] bg-[#006D77] hover:bg-[#004f4f] 
                        flex items-center justify-center py-2 rounded-xl"
                    aria-label={`Editar ${produtos.descricao}`}
                    title={`Clique para editar o produto ${produtos.descricao}`}
                >
                    Editar
                </Link>

                <Link 
                    to={`/deletarprodutos/${produtos.id}`} 
                    className="w-full text-[#2E2E2E] bg-[#FF6B6B] hover:bg-[#e55d5d] 
                        flex items-center justify-center rounded-xl"
                    aria-label={`Deletar ${produtos.descricao}`}
                    title={`Clique para deletar o produto ${produtos.descricao}`}
                >
                    Deletar
                </Link>
            </div>
        </div>
    );
}

export default CardProdutos;
