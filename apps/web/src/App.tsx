import {
  FFContextProvider,
  FFContextProviderProps
} from '@harnessio/ff-react-client-sdk'
import './App.css'
import Header from './components/Header.tsx'
import { useState } from 'react'
import GetUIFFFlags from './components/GetUIFFFlags.tsx'
import { UIFFProvider } from 'ui/UIFF.tsx'
import Layout from './components/Layout.tsx'
import MyCard from './components/MyCard.tsx'

const target: FFContextProviderProps['target'] = {
  name: 'My Target',
  identifier: 'my_target'
}

const targetUIFF: FFContextProviderProps['target'] = {
  name: 'My Target UI FF',
  identifier: 'my_target_ui_ff'
}

function App() {
  const [uiLibraryFlags, setUiLibraryFlags] = useState<Record<string, any>>({})

  return (
    <>
      <FFContextProvider
        apiKey="b0f5befd-5627-4459-97b4-56f0b77648ec"
        target={target}
        options={{ cache: true }}
      >
        <UIFFProvider flags={uiLibraryFlags}>
          <Layout>
            <Header />
            <article>
              <MyCard />
            </article>
          </Layout>
        </UIFFProvider>
      </FFContextProvider>

      <FFContextProvider
        apiKey="ec9d26cf-74c1-4cf1-af66-f95c96dff5de"
        target={targetUIFF}
        options={{ cache: true }}
      >
        <GetUIFFFlags onFlagsChange={(flags) => setUiLibraryFlags(flags)} />
      </FFContextProvider>
    </>
  )
}

export default App
