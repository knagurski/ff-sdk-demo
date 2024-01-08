import { FC, MouseEvent, useCallback } from 'react'
import { Card } from 'ui'
import { whatFlagsAreOn } from '../nonReactFile.ts'
import './ControlCard.css'

const ReportCard: FC = () => {
  const report = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    whatFlagsAreOn()
  }, [])

  return (
    <Card title="Flag reporting">
      <p>
        This card asks the a JS file that's outside of React and asks it to log
        its contents.
      </p>
      <div className="btns">
        <button onClick={report}>Log flags NOW</button>
      </div>
    </Card>
  )
}

export default ReportCard
