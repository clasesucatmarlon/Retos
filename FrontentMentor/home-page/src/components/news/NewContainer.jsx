import NewArticle from "./NewArticle";


const infoArticles = [
    {
        title: "Hydrogen VS Electric Cars",
        content: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
        title: "The Downsides of AI Artistry",
        content: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        title: "Is VC Funding Drying Up?",
        content: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
];

const NewContainer = () => {
    return (
        <aside className="bg-VeryDarkBlue text-OffWhite p-[1.2rem] mt-7 sm:mt-0">
            <h1 className="text-SoftOrange text-[2rem] font-bold">New</h1>
            {
                infoArticles.map((article, index) => {
                    return (
                        <NewArticle key={index} title={article.title} content={article.content}/>
                    )
                })
            }
        </aside>
    )
}

export default NewContainer;