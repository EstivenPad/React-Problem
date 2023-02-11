// import PropTypes from 'prop-types';

export const Quote = ({quote, author}) => {
    console.log(author)
    
    return (
        <div className="blockquote text-end" >
            <p className="mb-2">{ quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
        </div>
    )
}

// Quote.propTypes = {
//     quote: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired
// }

