import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { closeModal } from "../../../utils/functions";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function HomeSidebar() {
    const goTo = (e) => {
        e.preventDefault()

        const { target } = e
        const element = document.querySelector(target.getAttribute("href"))
        document.querySelector(".page.home").scrollTo(0, element.offsetTop - 65)
        closeModal("home-sidebar")
    }

    return (
        <div className="modal home-sidebar bg-[rgba(0,0,0,0.87)] [[open]]:[&>div.content]:animate-(--show-top) flex justify-end items-center" onClick={(e) => {
            if (e.target.classList[1] === "home-sidebar") {
                closeModal("home-sidebar")
            }
        }}>
            <div className="content w-full flex flex-col justify-center items-center">
                <div className="flex flex-col items-center gap-4 text-md [&>button]:text-white font-semibold" onClick={goTo}>
                    <button href="#inn">Início</button>
                    <button href="#bnr">Categorias</button>
                    <button href="#cdp">Cardápio</button>
                </div>

                <button className="flex bg-amber-300 p-[10px_15px] text-orange-800 shadow-sm hover:shadow-md hover:bg-amber-400 mt-4 w-fit rounded-full! text-[.8rem]">Fazer pedido <FontAwesomeIcon icon={faUtensils} /></button>
            </div>
        </div>
    )
}