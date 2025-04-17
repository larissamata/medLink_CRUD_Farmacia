    import { ChangeEvent, useEffect, useState } from "react";
    import { Hearts } from "react-loader-spinner";
    import { useNavigate, useParams } from "react-router-dom";
    import { Categorias } from "../../../models/Categorias";
    import { atualizar, listar, cadastrar } from "../../../services/Service";
    import { ToastAlerta } from "../../../utils/ToastAlerta";

    function FormCategorias() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function listarCategorias(id: string) {
        try {
        await listar(`/categorias/${id}`, setCategorias);
        } catch (error: any) {
        ToastAlerta("Erro ao buscar a categoria:", error);
        navigate("/categorias");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
        listar(`/categorias/${id}`, setCategorias);
        } else {
        listarCategorias(`/categorias`);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
        ...categorias,
        [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
        try {
            await atualizar(`/categorias`, categorias, setCategorias);
            alert("A categoria foi atualizado com sucesso!");
        } catch (error: any) {
            alert("Erro ao atualizar a categoria.");
        }
        } else {
        try {
            await cadastrar(`/categorias`, categorias, setCategorias);
            ToastAlerta("A categoria foi cadastrada com sucesso!", "sucesso");
        } catch (error: any) {
            ToastAlerta("Erro ao cadastrar a categoria.", "erro");
        }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
            {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
        </h1>

        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
            <div className="flex flex-col gap-2">
            <label htmlFor="descricao">Descrição da Categoria</label>
            <input
                type="text"
                placeholder="Descreva aqui sua categoria:"
                name="descricao"
                className="border-2 border-slate-700 rounded p-2"
                value={categorias.descricao}
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

    export default FormCategorias;
