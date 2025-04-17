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
            listarCategorias(id);
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
                ToastAlerta("A categoria foi atualizada com sucesso!", "success");
            } catch (error: any) {
                ToastAlerta("Erro ao atualizar a categoria.", "error");
                console.error(error);
            }
        } else {
            try {
                await cadastrar(`/categorias`, categorias, setCategorias);
                ToastAlerta("A categoria foi cadastrada com sucesso!", "success");
            } catch (error: any) {
                ToastAlerta("Erro ao cadastrar a categoria.", "error");
                console.error(error);
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container w-full md:w-1/2 mx-auto flex flex-col items-center justify-center bg-[#d6f2ee] py-10 px-4">
            <h1 className="text-4xl text-center my-8 text-[#006D77]">
                {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
            </h1>

            <form className="w-full flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-[#006D77]">
                        Descrição da Categoria
                    </label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria:"
                        name="descricao"
                        className="border-2 border-[#006D77] rounded p-2 text-[#2E2E2E]"
                        value={categorias.descricao}
                        onChange={atualizarEstado}
                    />
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

export default FormCategorias;
