import React from 'react'

const Suggestions = React.memo(({planetsData, handleOnclick}) => {
    if(planetsData.length>0){
        const options = planetsData.map(({name,url, population},index) => (
        <li key={index}>
            <a onClick={(e)=>handleOnclick(e)} href={url} id={name}>{name}</a>
        </li>
    ))
        return <ul className="dropdownOption">{options}</ul>
    }else{
        return ''
    }
});

export default Suggestions