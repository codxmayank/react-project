import { Outlet } from 'react-router-dom'
import TopicIndex from '../components/Topics/TopicIndex'

export default function TopicsLayout() {
  return (
    <div>
      <div className='text-lg mt-2'>Topics</div>

      <TopicIndex />

      <hr className='my-3' />

      <Outlet />
    </div>
  )
}
