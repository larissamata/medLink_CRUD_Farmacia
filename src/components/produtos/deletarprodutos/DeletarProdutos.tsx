import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Produtos } from "../../../models/Produtos";
import { listar, deletar } from "../../../services/Service";
import { Hearts } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarProdutos() {
    const [produto, setProdutos] = useState<Produtos>({} as Produtos);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Função para listar o produto
    const listarProdutos = async () => {
        try {
            if (id) {
                await listar(`/produtos/${id}`, setProdutos);
            }
        } catch (error: any) {
            ToastAlerta("Erro ao buscar o produto:", "error");
            console.error(error);
        }
    };

    // Carregar o produto quando o componente for montado
    useEffect(() => {
        if (id) {
            listarProdutos();
        }
    }, [id]);

    // Função para deletar o produto
    const deletarProduto = async () => {
        setIsLoading(true);

        try {
            if (id) {
                await deletar(`/produtos/${id}`);
                ToastAlerta("Produto apagado com sucesso!", "success");
                retornar();
            }
        } catch (error: any) {
            ToastAlerta("Erro ao deletar o produto.", "error");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    // Função para retornar à lista de produtos
    const retornar = () => {
        navigate("/produtos");
    };

    return (
        <div className="container w-full md:w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4 text-[#2E2E2E]">Deletar Produto</h1>
            <p className="text-center font-semibold mb-4 text-[#607D8B]">
                Você tem certeza de que deseja apagar o produto a seguir?
            </p>
            <div className="border border-[#DDE9F4] flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-4 px-6 bg-[#006D77] text-white font-bold text-2xl">
                    Produto
                </header>
                <p className="p-8 text-3xl bg-[#d6f2ee] text-[#2E2E2E] h-full">{produto.descricao}</p>
                <div className="flex space-x-4 p-4">
                    <button
                        className="text-[#2E2E2E] bg-[#FF6B6B] hover:bg-[#e55d5d] w-full py-2 rounded-xl"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className="w-full text-white bg-[#006D77] hover:bg-[#004f4f] flex items-center justify-center py-2 rounded-xl"
                        onClick={deletarProduto}
                    >
                        {isLoading ? (
                            <Hearts color="white" width="24" visible={true} />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarProdutos;
