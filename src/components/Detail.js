import { useParams } from 'react-router';

import GifList from './GifList'

function Detail() {
    const params = useParams()

    return (
        <>
            <section id='search-page'>
                <div className='title-box'>
                    <h1>{ params.nameDetail } Giphy</h1>
                </div>
                <div>
                    <GifList
                        query={ params.nameDetail }
                    />
                </div>
            </section>
        </>
    )
}

export default Detail