import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { TOPIC_NAMES } from '../../constants/topicNames'
import type { TopicId } from '../../types/topics'

const topicComponentMap: Record<
  TopicId,
  React.LazyExoticComponent<React.ComponentType>
> = {
  [TOPIC_NAMES.USE_EFFECT]: React.lazy(() => import('../../pages/Topics/UseEffect')),
  [TOPIC_NAMES.USE_STATE]: React.lazy(() => import('../../pages/Topics/UseEffect')),
  [TOPIC_NAMES.USE_REF]: React.lazy(() => import('../../pages/Topics/UseRef')),
  [TOPIC_NAMES.CUSTOM_HOOKS]: React.lazy(() => import('../../pages/Topics/CustomHooks/CustomHooks')),
  [TOPIC_NAMES.REACT_MEMO]: React.lazy(() => import('../../pages/Topics/ReactMemo')),
}

export default function TopicDetails() {
  const { topicId } = useParams()

  if (!topicId || !(topicId in topicComponentMap)) {
    return <h3>Topic not found</h3>
  }

  const TopicComponent = topicComponentMap[topicId as TopicId]

  return (
    <div>
      <h3>{topicId}</h3>

      <Suspense fallback={<div>Loading topic...</div>}>
        <TopicComponent />
      </Suspense>
    </div>
  )
}
