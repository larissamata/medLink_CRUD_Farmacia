import { useEffect, useState } from "react";
import { Hearts } from "react-loader-spinner";
import { Categorias } from "../../../models/Categorias";
import CardCategorias from "../cardcategorias/CardCategorias";
import { buscar } from "../../../services/Service";

function ListaCategorias() {

    

    const [categorias, setCategorias] = useState<Categorias[]>([])


    const buscarCategorias = async () => {
        await buscar("/categorias", setCategorias)
    }


    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])
    
    return (
        <>
        {categorias.length === 0 && (
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
                    {categorias.map((categorias) => (
                            <CardCategorias key={categorias.id} categorias={categorias} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;
