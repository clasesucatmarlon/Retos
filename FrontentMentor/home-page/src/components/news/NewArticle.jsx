import PropTypes from 'prop-types';

const NewArticle = ({ title, content }) => {
    return (
        <article className=" border-b-2 border-GrayishBlue py-6 last:border-none">
            <h2 className="hover:cursor-pointer hover:text-SoftOrange text-[1.25rem] lg:text-[.9rem] mb-[.5rem] font-bold">{title}</h2>
            <p className="text-[1rem] lg:text-[.8rem]">{content}</p>
        </article>
    )
}

NewArticle.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default NewArticle;