import { useState } from 'react';

import GifList from './components/GifList'
import SearchBar from './components/SearchBar'

function App() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <>
            <section id='search-page'>
                <div className='title-box'>
                    <h1>Search Your Giphy</h1>
                </div>
                <div className='search-box'>
                    <SearchBar
                        setQuery={ setSearchQuery }
                    />
                </div>
                <div>
                    <GifList
                        query={ searchQuery ? searchQuery : 'capy bara' }
                    />
                </div>
            </section>
        </>
    )
}

export default App;
