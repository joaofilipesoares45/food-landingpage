const list = [
    {
        nome: "Massas Italianas",
        img: "massas.jpg"
    },
    {
        nome: "Sobremesas",
        img: "sobremesas.jpg"
    },
    {
        nome: "Fast Food",
        img: "fastfood.jpg"
    }
]

export default function Banners() {
    return (
        <div>
            <h3 className="font-semibold text-[1.9rem] text-[#ffffffdf] mb-6 text-center">Categorias</h3>
            <div className="flex justify-center flex-wrap gap-5">
                {list.map((item, index) => {
                    return (
                        <div className="relative sm:rounded-2xl rounded-full overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] hover:[&>h4]:h-full! transition-all cursor-pointer" key={"ban" + index}>
                            <img src={`/food-landingpage/${item.img}`} alt="" className="max-w-[170px] sm:max-w-[350px]" />
                            <h4 className="flex justify-center items-center absolute bottom-0 bg-[#ffffffd6] w-full text-center h-0 overflow-hidden transition-all font-semibold text-[#ff2600df] text-shadow-2xl text-lg sm:text-2xl rounded-full sm:rounded-none">{item.nome}</h4>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}"bg-[#ff2600df]"