import { useState } from "react"

function SearchBar(props) {
    const [query, setQuery] = useState('')
    return(
        <>
            <div className="search-bar">
                <input
                    id="search-box"
                    value={ query }
                    onChange={ e => { setQuery(e.target.value) } }
                    onKeyDown={ e => e.key === 'Enter' ? props.setQuery(query) : null }
                />
            </div>
        </>
    )
}

export default SearchBar