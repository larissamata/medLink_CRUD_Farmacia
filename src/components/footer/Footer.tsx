
function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            MedLink | Copyright: {data}
                        </p>
                    <p className='text-lg'>Feito com carinho, suor e lágrimas.</p>
                    <div className='flex gap-2'>

                    <a href="https://www.flaticon.com/br/icones-gratis/farmacia" title="farmacia ícones">Farmacia ícones criados por andinur - Flaticon</a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer