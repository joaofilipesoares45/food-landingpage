import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBurger, faCode, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import HomeSidebar from "./components/Sidebar"
import { openLink, openModal, whatsMsg } from "../../utils/functions"
import Cardapio from "./components/Cardapio"
import "./css/index.css"

export default function Home() {

    const goTo = (e) => {
        e.preventDefault()

        const { target } = e
        const element = document.querySelector(target.getAttribute("href"))
        document.querySelector(".page.home").scrollTo(0, element.offsetTop - 65)
    }

    return (
        <div className="page home bg-[#fff8f4] h-screen">
            <HomeSidebar />

            <header className="flex flex-row justify-between items-center p-[15px] shadow-xs sticky top-0 bg-[#fff8f4] z-1">
                <a href="/food" className="flex items-center gap-[5px] text-[1.6rem] sm:text-xl font-semibold"><FontAwesomeIcon icon={faBurger} />Food</a>

                <div className="hidden justify-between gap-10 sm:flex text-[.75rem] [&>button]:text-gray-500 [&>button:hover]:text-black! font-semibold" onClick={goTo}>
                    <button href="#inn">Início</button>
                    <button href="#cdp">Cardápio</button>
                    <button href="#ctt">Contato</button>
                </div>

                <button className="hidden! sm:flex! bg-amber-300 p-[5px_10px] text-[.8rem] text-orange-800 shadow-sm hover:shadow-md hover:bg-amber-400">
                    Fazer pedido <FontAwesomeIcon icon={faUtensils} />
                </button>

                <FontAwesomeIcon icon={faBars} className="flex sm:hidden! text-xl" onClick={() => openModal("home-sidebar")} />
            </header>

            <section className="h-[calc(100dvh-59.2px)] w-full flex items-center overflow-hidden!" id="inn">

                <div className="relative flex items-center justify-end w-dvw h-full">
                    <h1 className="sm:text-6xl text-[2.5rem] font-extrabold flex flex-col sm:items-end mx-[2vw] absolute left-0 bg-[#fff8f4d5] backdrop-blur-sm p-[40px_15px] rounded-xl">
                        Mais que uma refeição,
                        <span className="text-orange-500 sm:mt-2.5 border-b-4 sm:pb-2.5">
                            uma Experiência!
                        </span>
                    </h1>

                    <div className="bg-[url(/bannerV.jpg)] bg-cover h-full w-dvw max-w-[550px]"></div>
                </div>

            </section>

            <section className="p-4" id="cdp">
                <Cardapio />
            </section>

            <footer className="bottom-page" id="ctt">
                <h2><FontAwesomeIcon icon={faCode} /><span>Desenvolvedor</span>João Filipe Viana</h2>
                <div className="info">
                    <p>Links: </p>
                    <nav>
                        <FontAwesomeIcon icon={faGithub} onClick={openLink} link="https://github.com/joaofilipesoares45/" />
                        <FontAwesomeIcon icon={faLinkedin} onClick={openLink} link="https://www.linkedin.com/in/joão-filipe-viana-63abb1263/" />
                        <FontAwesomeIcon icon={faInstagram} onClick={openLink} link="https://www.instagram.com/lippe_viana_01/" />
                        <FontAwesomeIcon icon={faWhatsapp} onClick={() => whatsMsg("86988667039", "Olá, vim pelo Portfólio!")} />
                    </nav>
                </div>
            </footer>
        </div>
    )
}