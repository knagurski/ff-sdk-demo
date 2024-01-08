import { FC, MouseEvent, useCallback, useEffect, useState } from 'react'
import { Card } from 'ui'
import { useFeatureFlags } from '@harnessio/ff-react-client-sdk'
import {
  isReporting,
  kickThingsOff,
  pleaseStop,
  setFlags
} from '../nonReactFile.ts'
import './ControlCard.css'

const ControlCard: FC = () => {
  const [isKickedOff, setIsKickedOff] = useState(isReporting())
  const allFlags = useFeatureFlags()

  // stop reporting when the component unmounts
  useEffect(() => {
    return pleaseStop
  }, [])

  // pass the flags to the JS file whenever they change
  useEffect(() => {
    setFlags(allFlags)
  }, [allFlags])

  // ask the JS file to start reporting
  const go = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    kickThingsOff()
    setIsKickedOff(true)
  }, [])

  // ask the JS file to stop reporting
  const stop = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    pleaseStop()
    setIsKickedOff(false)
  }, [])

  return (
    <Card title="Function flag polling">
      <p>
        This card controls a JS file that's outside of a React component and
        demonstrates how you can pass flags from the SDK to something else.
      </p>
      {isKickedOff ? (
        <button onClick={stop}>Stop logging</button>
      ) : (
        <button onClick={go}>Start logging</button>
      )}
    </Card>
  )
}

export default ControlCard
