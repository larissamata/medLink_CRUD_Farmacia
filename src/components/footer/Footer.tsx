import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {

    let data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-[#d6f2ee] text-[#2E2E2E]">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold text-[#006D77]">
                        MedLink | Copyright: {data}
                    </p>
                    <p className="text-lg text-[#607D8B]">Acesse nossas redes sociais</p>
                    <div className="flex gap-4">
                        <LinkedinLogo size={48} weight="bold"  />
                        <InstagramLogo size={48} weight="bold"  />
                        <FacebookLogo size={48} weight="bold"  />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
