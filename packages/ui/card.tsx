import type { FC, PropsWithChildren } from 'react'
import './card.css'
import { useGetFeatureFlag } from './UIFF'

export interface CardProps extends PropsWithChildren {
  className?: string
  title: string
}

export const Card: FC<CardProps> = ({ className, title, children }) => {
  const goPink = useGetFeatureFlag('pink_card', false)
  const goHorizontal = useGetFeatureFlag('horizontal_card', false)

  const theme = goPink ? 'goPink' : ''
  const layout = goHorizontal ? 'goHorizontal' : 'goVertical'

  return (
    <section className={`card ${className} ${theme} ${layout}`}>
      <div className="header">
        <h2>{title}</h2>
      </div>
      <div className="body">{children}</div>
    </section>
  )
}
