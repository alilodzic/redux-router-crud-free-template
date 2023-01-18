import { useEffect,useCallback } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { dataFetch , deleteData } from "../../store/dataslice.js";
import Loading from "../Loading.jsx";
import ListItems from "./ListItems.jsx";


const Index = () => {
  const { data, loading, error } = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dataFetch())

  }, [dispatch])
  const deleteItem = useCallback( (id) => {
    dispatch(deleteData(id))
    console.log('delet')
}
   , [dispatch])


  return (
    <Loading loading={loading} error={error}>
      <ListItems data={data} loading={loading} error={error} deleteItem={deleteItem} />
    </Loading>
  )
}

export default Index