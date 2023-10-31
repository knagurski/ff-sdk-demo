import { FC, PropsWithChildren } from 'react'
import { useFeatureFlag } from '@harnessio/ff-react-client-sdk'
import './Layout.css'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const isDarkMode = useFeatureFlag('dark_mode')

  return (
    <main className={isDarkMode ? 'darkMode' : 'lightMode'}>{children}</main>
  )
}

export default Layout
