import { FC } from 'react'
import { Card } from 'ui'
import { useFeatureFlag } from '@harnessio/ff-react-client-sdk'

const MyCard: FC = () => {
  const showAltText = useFeatureFlag('alternative_text')

  const title = showAltText ? 'Your card' : 'My card'
  const body = showAltText
    ? 'This is your card. There are many cards like it, but this is your own. Please enjoy your card responsibly.'
    : 'This is some content of the card.'

  return (
    <Card title={title}>
      <p>{body}</p>
    </Card>
  )
}

export default MyCard
