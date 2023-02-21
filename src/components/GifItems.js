import { Link } from 'react-router-dom'

function GifItems(props) {
    return(
        <>
            <div className='box-data'>
                <Link to={ `/detail/${ props.linkDetail }` }>
                    <div className='wrapper-data'>
                        <div className='box-images'>
                            <img src={ props.urlImage } alt={ props.title } />
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default GifItems