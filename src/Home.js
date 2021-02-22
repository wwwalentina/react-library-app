import useFetch from './useFetch';
import { useState } from 'react';
import BookList from "./BookList";
import Pagination from "./Pagination";


const Home = () => {
    const [q, setQ] = useState('');
    const {data: bookInfo, isLoading} = useFetch('http://openlibrary.org/search.json?q=' + q);

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setbooksPerPage] = useState(10);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    let currentBooks;
    let lengthBooks;
    if (bookInfo) {
        currentBooks = bookInfo.docs.map(doc => doc).slice(indexOfFirstBook, indexOfLastBook);
        lengthBooks = bookInfo.docs.map(doc => doc);
    }    

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='home-content'>
            <div className="search">                
                <input placeholder='Search for a Book on Open Lybrary' type="text" value={ q } onChange={(e) => setQ(e.target.value.toLowerCase())}/>
            </div>
            <div className='home-content-body'>
                {isLoading && <div>Loading...</div>}
                {bookInfo && <BookList bookInfo={ currentBooks } />}
                {bookInfo && <Pagination booksPerPage={ booksPerPage } 
                totalBooks={ lengthBooks.length } 
                paginate={ paginate } />}
            </div>
        </div>
    )
}

export default Home;