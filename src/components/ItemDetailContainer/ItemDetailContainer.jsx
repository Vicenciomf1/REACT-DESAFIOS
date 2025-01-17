import React , { useEffect,useState } from 'react'
import{getSingleItem} from '../../DataBase/dataBase.js';
import ItemDetail from './ItemDetail.jsx';
import {useParams} from 'react-router-dom';

function ItemDetailContainer(props) {
    let [data, setData] = useState({});

    const {id}  =useParams();

  useEffect(
    () => {
    getSingleItem(id).then((data) => 
      setData(data)
    );
  },
  [id],
  );


  return (
    <div className="main container">
        <ItemDetail item = {data}/>
        {/* Card Detail */}
        {/* <h1>{data.title}</h1>
        <div>{data.img}</div>
        <h3>{data.detail}</h3> */}
    </div>
  )
}

export default ItemDetailContainer