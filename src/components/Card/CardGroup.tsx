import React, { useState } from 'react'
import { CategoryCardProps } from 'types'
import { MotionCard } from '.'

import ExpandIcon from '@mui/icons-material/ExpandLess'

const openAnimation = (index: number) => ({
  marginLeft: `${(index + 1) * 2}%`,
  marginRight: `${(index + 1) * 2}%`,
  marginTop: `-96px`,
})

const closedAnimation = (index: number) => ({
  marginLeft: undefined,
  marginRight: undefined,
  marginTop: undefined,
})

type GroupHeaderProps = {
  toggleExpanded: () => void
  group: {
    name: string
    programs: number
  }
  active: boolean
}
const GroupHeader = ({ active, group, toggleExpanded }: GroupHeaderProps) => {
  return (
    <section className="shadow-xl p-6 rounded-md mb-4 z-50 bg-white flex overflow-hidden opacity-100 absolute top-0 left-0 right-0">
      <section className="flex-grow z-50">
        <h5 className="text-2xl z-50">{group.name}</h5>
        <p className="text-gray-500 z-50">{group.programs} träffar</p>
      </section>
      <section className="flex align-middle justify-center z-50">
        <button onClick={toggleExpanded}>
          <ExpandIcon
            sx={{
              transition: 'all ease 0.2s',
              transform: active ? 'rotate(-180deg)' : undefined,
            }}
          />
        </button>
      </section>
    </section>
  )
}

const CardGroup = ({ name, programs }: CategoryCardProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded((e) => !e)

  return (
    <section className="relative pt-28">
      <GroupHeader
        active={expanded}
        group={{ name, programs: programs.length }}
        toggleExpanded={toggleExpanded}
      />

      <section
        className="gap-2 flex flex-col-reverse z-0"
        key={`programs-${name}`}
      >
        {programs.map((program, index) => {
          const layer = programs.length - 1 - index

          return (
            <MotionCard
              layer={-index}
              program={program}
              key={program.code}
              transition={{ bounce: false }}
              animate={expanded ? openAnimation(index) : closedAnimation(index)}
            />
          )
        })}
      </section>
    </section>
  )
}

export { CardGroup }
