import { useEffect, useState } from "react";
import { Hearts } from "react-loader-spinner";
import { Produtos } from "../../../models/Produtos";
import CardProdutos from "../cardprodutos/CardProdutos";
import { listar } from "../../../services/Service";

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produtos[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const listarProdutos = async () => {
        setIsLoading(true);
        await listar("/produtos", setProdutos);
        setIsLoading(false);
    };

    useEffect(() => {
        listarProdutos();
    }, []);

    return (
        <div className="bg-[#d6f2ee] min-h-screen py-10 px-4">
            {isLoading ? (
                <div className="flex justify-center items-center h-96">
                    <Hearts
                        visible={true}
                        height="120"
                        width="120"
                        color="#006D77"
                        ariaLabel="hearts-loading"
                    />
                </div>
            ) : (
                <div className="container mx-auto flex flex-col gap-6">
                    <h2 className="text-3xl font-bold text-[#006D77] text-center mb-4">
                        Produtos Disponíveis
                    </h2>
                    {produtos.length === 0 ? (
                        <p className="text-center text-xl text-[#607D8B]">
                            Nenhum produto encontrado.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {produtos.map((produto) => (
                                <CardProdutos key={produto.id} produtos={produto} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ListaProdutos;
