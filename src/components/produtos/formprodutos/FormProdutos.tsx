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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProdutos({
        ...produtos,
        [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/produtos");
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

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
        <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
            {id === undefined ? "Cadastrar Produto" : "Editar Produto"}
        </h1>

        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoProduto}>
            <div className="flex flex-col gap-2">
            <label htmlFor="descricao">Descrição do Produto</label>
            <input
                type="text"
                placeholder="Descreva aqui seu produto:"
                name="descricao"
                className="border-2 border-slate-700 rounded p-2"
                value={produtos.descricao}
                onChange={atualizarEstado}
            />
            </div>
            <button
            className="rounded text-slate-100 bg-indigo-400 
                            hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
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
