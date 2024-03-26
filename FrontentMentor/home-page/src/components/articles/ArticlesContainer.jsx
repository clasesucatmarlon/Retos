import Article from "./Article";

import imagArticle01 from "../../assets/images/image-retro-pcs.jpg";
import imagArticle02 from "../../assets/images/image-top-laptops.jpg";
import imagArticle03 from "../../assets/images/image-gaming-growth.jpg";


const inforArticles = [
    {
        image: imagArticle01,
        number: "01",
        title: "Reviving Retro PCs",
        content: "What happens when old PCs are given modern upgrades?"
    },
    {
        image: imagArticle02,
        number: "02",
        title: "Top 10 Laptops of 2022",
        content: "Our best picks for various needs and budgets."
    },
    {
        image: imagArticle03,
        number: "03",
        title: "The Growth of Gaming",
        content: "How the pandemic has sparked fresh opportunities."
    },
]

export const ArticlesContainer = () => {
    return (
        <section className="sm:flex">
            {
                inforArticles.map( (item, index) => {
                    return (
                        <Article 
                            key={index}
                            image={item.image}
                            number={item.number}
                            title={item.title}
                            content={item.content}
                        />
                    )
                })
            }
        </section>
    )
}
