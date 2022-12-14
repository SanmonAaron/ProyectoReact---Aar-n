import React, {useEffect, useState} from 'react';
import Gif from './Gif'
import getGifs from '../services/getGifs';
export default function ListOfGifs ({params}){
    const {keyword} = params
    const [value, updateValue] = useState([])
    useEffect(function(){
       getGifs({keyword}).then(value => updateValue(value))
    }, [])
    return <div>
        {
            value.map(singleValue =>
                <Gif
                key={singleValue.id}
                title={singleValue.title} 
                url={singleValue.url} 
                id={singleValue.id} />
              )
        }
    </div>
}