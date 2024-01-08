import {
  FC,
  MouseEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { Card } from 'ui'
import { FFContext } from '@harnessio/ff-react-client-sdk'
import './ControlCard.css'
import { Reporter } from '../Reporter.ts'

const ControlCardWithClient: FC = () => {
  const [isKickedOff, setIsKickedOff] = useState(false)
  const { client } = useContext(FFContext)
  const reporter = useRef<Reporter>()

  // initialize the reporter and stop reporting when the component unmounts
  useEffect(() => {
    const reporterInstance = new Reporter(client)
    reporter.current = reporterInstance

    return () => reporterInstance.pleaseStop()
  }, [])

  // ask the reporter to start reporting
  const go = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    reporter.current?.kickThingsOff()
    setIsKickedOff(true)
  }, [])

  // ask the reporter to stop reporting
  const stop = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    reporter.current?.pleaseStop()
    setIsKickedOff(false)
  }, [])

  return (
    <Card title="Reporter class polling">
      <p>
        This card controls the Reporter class that's outside of a React
        component and demonstrates how you can inject the underlying FF
        Javascript SDK instance from the React SDK into a non-React JS class.
      </p>
      {isKickedOff ? (
        <button onClick={stop}>Stop logging</button>
      ) : (
        <button onClick={go}>Start logging</button>
      )}
    </Card>
  )
}

export default ControlCardWithClient
