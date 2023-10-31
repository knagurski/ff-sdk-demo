import { FC, useEffect } from 'react'
import { useFeatureFlags } from '@harnessio/ff-react-client-sdk'

interface GetUIFFFlagsProps {
  onFlagsChange: (flags: Record<string, any>) => void
}

const GetUIFFFlags: FC<GetUIFFFlagsProps> = ({ onFlagsChange }) => {
  const flags = useFeatureFlags()

  useEffect(() => {
    onFlagsChange(flags)
  }, [flags])

  return null
}

export default GetUIFFFlags
