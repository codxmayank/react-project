import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import About from '../pages/About/About'
import TopicsLayout from '../layouts/TopicsLayout'
import TopicDetails from '../components/Topics/TopicDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'home', Component: Home },
      { path: 'contact', Component: Contact },
      { path: 'about', Component: About },
      {
        path: 'topics',
        Component: TopicsLayout,
        children: [
          {
            path: ':topicId',
            Component: TopicDetails
          }
        ]
      }
    ]
  }
])
