import { useTheme } from '@material-ui/core'
import React, { RefObject, Suspense } from 'react'
import { Title } from '.'
import { useScrollTracker } from '../hooks'

interface SectionProps {
  title: string
  children: React.ReactNode
}
const Section = ({ title, children }: SectionProps) => {
  const theme = useTheme()
  const {ref} = useScrollTracker()
  return (
    <div id={title} ref={ref as RefObject<HTMLDivElement>}>
      <Title>
        <span style={{ color: theme.palette.primary.main }}>{`>_// `}</span>
        {title}
      </Title>
      {children}
    </div>
  )
}

export default Section
