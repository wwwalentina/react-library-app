import { Link } from "react-router-dom";
import openLibraryImage from './open-library.jpg'

const BookList = ({bookInfo}) => {
    return (
        <table className='book-list'> 
            <tbody className='book-short-info'>           
                {bookInfo.map((doc) => (                                                                
                    <tr className='book' key={doc.key}>
                        <td>
                            {doc.cover_i && <img src= {'https://covers.openlibrary.org/b/id/' + doc.cover_i + '.jpg'} alt='Cover image' />}
                            {!doc.cover_i && <img src={openLibraryImage} alt='Cover image' />}
                        </td>
                        <td>
                            <h2>{doc.title}</h2>                                                
                            <p>{doc.author_name}</p>  
                            <Link className='link' to={doc.key}>Read more
                                <div class="link__horizontal"></div>
	                            <div class="link__vertical"></div>
                            </Link> 
                        </td>                                                                             
                    </tr>                                                 
                ))}
            </tbody>                   
        </table>
    )
}

export default BookList;