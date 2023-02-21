import Axios from 'axios'
import { useState, useEffect } from 'react'

import GifItems from './GifItems'

function GifList(props) {
    const [listData, setListData] = useState(null)
    const [query, setQuery] = useState(props.query)

    useEffect(() => {
        setQuery(props.query)
        getListGiphy(query)
    }, [props.query, query])

    const getListGiphy = async (querySearch) => {
        querySearch = querySearch?.replaceAll(' ', '+')
        let searchConfig = {
            url: `https://api.giphy.com/v1/gifs/search?api_key=5Cc3Bq47jE1OTlUXrH1qoHSdazcvXdy9&q=${ querySearch }&limit=12&offset=0&rating=g&lang=en`,
            method: 'get',
        }
        
        try {
            let getListData = await Axios(searchConfig)
            setListData(getListData.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <div className='list-data' id='list-giphy'>
                {
                    listData ? listData.data.map((e, i) => {
                        // console.log(e)
                        return(
                            <GifItems
                                key={ i }
                                title={ e.title }
                                urlImage={ e.images.fixed_height.url }
                                linkDetail={ query }
                            />
                        )
                    }) : ''
                }
            </div>
        </>
    )
}

export default GifList