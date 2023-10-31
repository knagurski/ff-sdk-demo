import { createContext, FC, PropsWithChildren, useContext } from 'react'

interface UIFFContextProps {
  flags: Record<string, any>
}

const UIFFContext = createContext<UIFFContextProps>({ flags: {} })

export const UIFFProvider: FC<PropsWithChildren<UIFFContextProps>> = ({
  flags,
  children
}) => {
  return (
    <UIFFContext.Provider value={{ flags }}>{children}</UIFFContext.Provider>
  )
}

export const useGetFeatureFlag = (
  flagName: string,
  defaultValue?: any
): any => {
  const { flags } = useContext(UIFFContext)
  console.log('FLAGS', flags, flagName)

  return flagName in flags ? flags[flagName] : defaultValue
}
