import PropTypes from 'prop-types';


const Article = ({image, number, title, content}) => {
    return (
        <article className="flex gap-5 mb-4">
            <div className="w-[6rem] flex-none">
                <img src={image} alt="Image retro computer" />
            </div>
            <div className="">
                <p className="text-GrayishBlue text-[2rem] mb-[.4rem] mt-0 font-bold">{number}</p>
                <h2 className="text-[.8rem] lg:text-[.9rem] text-VeryDarkBlue font-bold mb-[.3rem] hover:text-SoftOrange hover:cursor-pointer">{title}</h2>
                <p className="text-[.8rem] lg:text-[.9rem] text-DarkGrayishBlue ">{content}</p>
            </div>
        </article>
    )
}

Article.propTypes = {
    image: PropTypes.any,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Article;
