import imageMobile from "../../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../../assets/images/image-web-3-desktop.jpg";

const MainArticle = () => {
    return (
        <section>
            <picture>
                <source media="(max-width: 640px)" srcSet={imageMobile} />
                <source media="(min-width: 641px)" srcSet={imageDesktop} />
                <img src={imageMobile} alt="Imagen artículo principal" />
                <div className="sm:flex">
                    <div className="flex-1 py-[1.5rem]">
                        <h2 className="text-[2.5rem] font-bold sm:text-[3.5rem] leading-none">The Bright Future of Web 3.0?</h2>
                    </div>
                    <div className="flex-1 sm:pt-[1.5rem]">
                        <p className="text-[.75rem] mb-10 sm:text-[1rem]">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button className="bg-SoftRed w-[11rem] h-[3rem] uppercase text-OffWhite hover:bg-VeryDarkBlue">Read more</button>
                    </div>
                </div>
            </picture>
        </section>
    )
}

export default MainArticle;