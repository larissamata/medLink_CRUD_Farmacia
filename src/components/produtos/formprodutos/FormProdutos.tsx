import { ChangeEvent, useEffect, useState } from "react";
import { Hearts } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { Produtos } from "../../../models/Produtos";
import { atualizar, listar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormProdutos() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [produtos, setProdutos] = useState<Produtos>({} as Produtos);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [descricaoError, setDescricaoError] = useState<string>("");

    useEffect(() => {
        async function fetchProduto() {
            if (id !== undefined) {
                try {
                    await listar(`/produtos/${id}`, setProdutos);
                } catch (error: any) {
                    ToastAlerta("Erro ao buscar o produto.", "erro");
                }
            }
        }

        fetchProduto();
    }, [id]);

    // Função para atualizar o estado do produto
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProdutos({
            ...produtos,
            [e.target.name]: e.target.value,
        });
    }

    // Função para retornar à lista de produtos
    function retornar() {
        navigate("/produtos");
    }

    // Validação do formulário
    function validarFormulario() {
        if (!produtos.descricao.trim()) {
            setDescricaoError("Descrição é obrigatória");
            return false;
        }
        setDescricaoError("");
        return true;
    }

    // Função para cadastrar ou atualizar o produto
    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (!validarFormulario()) {
            setIsLoading(false);
            return;
        }

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produtos, setProdutos);
                ToastAlerta("O produto foi atualizado com sucesso!", "sucesso");
            } catch (error: any) {
                ToastAlerta("Erro ao atualizar o produto.", "erro");
            }
        } else {
            try {
                await cadastrar(`/produtos`, produtos, setProdutos);
                ToastAlerta("O produto foi cadastrado com sucesso!", "sucesso");
            } catch (error: any) {
                ToastAlerta("Erro ao cadastrar o produto.", "erro");
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container w-full md:w-1/2 mx-auto flex flex-col items-center justify-center bg-[#d6f2ee] py-10 px-4">
            <h1 className="text-4xl text-center my-8 text-[#006D77]">
                {id === undefined ? "Cadastrar Produto" : "Editar Produto"}
            </h1>

            <form className="w-full flex flex-col gap-4" onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-[#006D77]">
                        Descrição do Produto
                    </label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu produto:"
                        name="descricao"
                        className="border-2 border-[#006D77] rounded p-2"
                        value={produtos.descricao}
                        onChange={atualizarEstado}
                    />
                    {descricaoError && (
                        <span className="text-red-500 text-sm">{descricaoError}</span>
                    )}
                </div>

                <button
                    className="rounded text-[#2E2E2E] bg-[#006D77] hover:bg-[#004f4f] w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    {isLoading ? (
                        <Hearts color="white" width="24" visible={true} />
                    ) : (
                        <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormProdutos;
