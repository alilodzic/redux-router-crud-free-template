import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { postFetch } from '../store/dataslice'

const useHooks = () => {
    const { id } = useParams()
    const { record, error, loading } = useSelector(state => state.data )
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(postFetch(id))
    }, [dispatch, id])
  return ({record, error, loading,id})
}

export default useHooks