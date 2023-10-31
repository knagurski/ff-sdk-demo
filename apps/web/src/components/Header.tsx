import { FC } from 'react'
import { useFeatureFlag } from '@harnessio/ff-react-client-sdk'
import './Header.css'

const Header: FC = () => {
  const showAltText = useFeatureFlag('alternative_text')

  return (
    <header>
      {showAltText ? (
        <h1>Feature Flags Demo</h1>
      ) : (
        <h1>Demo of Feature Flags</h1>
      )}
    </header>
  )
}

export default Header
