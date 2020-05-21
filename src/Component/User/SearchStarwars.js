import React,{Fragment, useState, useContext, useCallback} from 'react';
import Search from './Search';
import PlanetInfo from './PlanetInfo';
import API from './../../Api';
import axios from 'axios';

const SearchStarwars = React.memo((props)=>{
    const [planetDetails, setPlanetDetails] = useState({});
    const [planetDataEmpty, setPlanetDataEmpty] = useState();
    const [searchName, setSearchName] = useState('');

    const handleOnclick  = useCallback((e) =>{
        e.preventDefault();
        let planetname = e.target.id;
        let planeturl = e.target.href;
        planeturl.replace("http", "https")
        axios.get(planeturl)
        .then(response=>{
            let planetDatas = response.data;
            setPlanetDetails(planetDatas);
            setPlanetDataEmpty([]);
            setSearchName(planetname);
        })
    },[])

    const handleSeachChange  = useCallback((e) =>{
        setPlanetDetails({});
        
    },[])

    return( 
         
        <Fragment>
           <Search
                handleOnclick={handleOnclick}
                planetDataEmpty={planetDataEmpty}
                searchName={searchName}
                handleSeachChange={handleSeachChange}
           />
           <PlanetInfo planetDetails={planetDetails}/>
        </Fragment>
    )

});
export default SearchStarwars;