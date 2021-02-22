const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <div>
                {pageNumbers.map(number => (
                    <span key={ number }>
                        <a onClick={() => paginate(number)} href='#'>
                            { number }
                        </a>
                    </span>
                ))}
            </div>
        </nav>
    )
}

export default Pagination;