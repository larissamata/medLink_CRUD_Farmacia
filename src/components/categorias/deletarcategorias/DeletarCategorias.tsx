import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Categorias } from "../../../models/Categorias";
import { listar, deletar } from "../../../services/Service";
import { Hearts } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategorias() {
    const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    async function listarCategorias(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategorias);
        } catch (error: any) {
            ToastAlerta("Erro ao buscar a categoria:", "error");
            console.error(error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            listarCategorias(id);
        }
    }, [id]);

    async function DeletarCategorias() {
        setIsLoading(true);

        try {
            await deletar(`/categorias/${id}`);
            ToastAlerta("Categoria apagada com sucesso!", "success");
            retornar();
        } catch (error: any) {
            ToastAlerta("Erro ao deletar a categoria.", "error");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Produto
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categorias.descricao}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center'
                        onClick={DeletarCategorias}>
                        {isLoading ? (
                            <Hearts
                                color="white"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarCategorias;
