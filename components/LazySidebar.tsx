import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('./Sidebar'), {
  loading: () => <p>Loading...</p>,
})

export default Sidebar