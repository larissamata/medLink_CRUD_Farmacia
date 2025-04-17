import { useEffect, useState } from "react";
import { Hearts } from "react-loader-spinner";
import { Produtos } from "../../../models/Produtos";
import CardProdutos from "../cardprodutos/CardProdutos";
import { listar } from "../../../services/Service";

function ListaProdutos() {

    

    const [produtos, setProdutos] = useState<Produtos[]>([])


    const listarProdutos = async () => {
        await listar("/produtos", setProdutos)
    }


    useEffect(() => {
        listarProdutos()    
    }, [produtos.length])
    
    return (
        <>
        {produtos.length === 0 && (
            <Hearts
            visible={true}
            height="200"
            width="200"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass="hearts-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {produtos.map((produto) => (
                            <CardProdutos key={produto.id} produtos={produto} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaProdutos;
