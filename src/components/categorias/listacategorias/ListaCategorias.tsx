import { useEffect, useState } from "react";
import { Hearts } from "react-loader-spinner";
import { Categorias } from "../../../models/Categorias";
import CardCategorias from "../cardcategorias/CardCategorias";
import { listar } from "../../../services/Service";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categorias[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const listarCategorias = async () => {
        setIsLoading(true);
        try {
            await listar("/categorias", setCategorias);
        } catch (error: any) {
            console.error("Erro ao listar categorias:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        listarCategorias();
    }, []);  // Apenas executa uma vez quando o componente for montado

    return (
        <>
            {isLoading ? (
                <Hearts
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="hearts-loading"
                    wrapperStyle={{}}
                    wrapperClass="hearts-wrapper mx-auto"
                />
            ) : (
                <div className="flex justify-center w-full my-4">
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categorias.map((categoria) => (
                                <CardCategorias key={categoria.id} categorias={categoria} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ListaCategorias;
