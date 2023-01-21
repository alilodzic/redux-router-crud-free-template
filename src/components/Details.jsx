import useHooks from '../hooks/use-post-detail'
import Loading from './Loading'

const Details = () => {
  const { record, error, loading } = useHooks()


  return (
    <>
      <Loading error={error} loading={loading}>
        <div>Title : {record?.title}</div>
        <div>Description : {record?.description}</div>
      </Loading>
    </>
  )
}

export default Details