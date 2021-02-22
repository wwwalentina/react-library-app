import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import openLibraryImage from './open-library.jpg'

const BookDetails = () => {
    const { id } = useParams();
    const {data: book, isLoading} = useFetch('https://openlibrary.org/works/' + id + '.json');
    
    let authorId = '/authors/';    

    if(book && book.authors) {
        authorId = book.authors[0].author.key;
    }    
    
    const {data: author, isLoading2} = useFetch('https://openlibrary.org' + authorId + '.json');

    return (
        <div className='book-details-content'>
            {book && book.title && <h2>{ book.title }</h2>}
            <div className='books-details-left'>                
                {book && book.covers && <img src= {'https://covers.openlibrary.org/b/id/' + book.covers[0] + '.jpg'} alt='Cover image' />}                     
                {book && !book.covers && <img src={openLibraryImage} alt='Cover image' />} 
            </div>
            <div className='books-details-right'>
                <div className='text-content'>
                    {book && book.created && <p><span>Created: </span>{ book.created.value }</p>}
                    {book && book.last_modified && <p><span>Last Modifed: </span>{ book.last_modified.value }</p>}
                    {book && book.revision && <p><span>Revision: </span>{ book.revision }</p>}
                    {book && book.subject_people && <p><span>Subject People: </span>{ book.subject_people.map((person) => person.concat('; ')) }</p>}
                    {book && book.subject_places && <p><span>Subject Places: </span>{ book.subject_places.map((places) => places.concat('; ')) }</p>}
                    {book && book.subject_times && <p><span>Subject Times: </span>{ book.subject_times.map((times) => times.concat('; ')) }</p>}
                    {book && book.subjects && <p><span>Subjects: </span>{ book.subjects.map((subjs) => subjs.concat('; ') ) }</p>}            
                    {author && <h3>About the Author:</h3>}
                    {author && author.name && <p><span>Author: </span>{ author.name }</p>}
                    {author && author.personal_name && <p><span>Personal Name: </span>{ author.personal_name }</p>}
                    {author && author.alternate_names && <p><span>Alternate names: </span>{ author.alternate_names.map((altName) => altName.concat('; ')) }</p>}
                    {author && author.bio && <p><span>Bio: </span>{ author.bio.value }</p>}
                    {author && author.birth_date && <p><span>Birth Date: </span>{ author.birth_date }</p>}
                    {author && author.created && <p><span>Created: </span>{ author.created.value }</p>}
                    {author && author.last_modified && <p><span>Last Modifed: </span>{ author.last_modified.value }</p>}
                    {author && author.latest_revision && <p><span>Latest Revision: </span>{ author.latest_revision }</p>}
                    {author && author.links && <p><span>Author links: </span>{ author.links.map((authLink) => authLink.title.concat(' - ', authLink.url).concat('; ')  ) }</p>}
                </div>         
            </div>
        </div>
    );
}

export default BookDetails;