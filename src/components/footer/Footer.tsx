function Footer() {
    const data = new Date().getFullYear();

    return (
        <div className="flex justify-center bg-[#D6F2EE] text-[#2E2E2E]">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold text-[#006D77]">
                    MedLink | Copyright: {data}
                </p>
                <p className="text-lg text-center">Feito com carinho, suor e lágrimas.</p>
                <div className="flex gap-2 items-center justify-center">
                    <a
                        href="https://www.flaticon.com/br/icones-gratis/farmacia"
                        title="Ícone disponível - Flaticon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#006D77] hover:text-[#FF6B6B]"
                    >
                        Ícone disponível - Flaticon
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
