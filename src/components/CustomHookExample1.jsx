import useFetch from '../hooks/useFetch'

function CustomHookExample1() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  )

  if (error) {
    return <h3>Error: {error.message}</h3>
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  )
}

export default CustomHookExample1
