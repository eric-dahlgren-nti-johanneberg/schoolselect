import { CardGroup } from 'components/Card'

import React, { useMemo } from 'react'
import { CategoryList } from 'types'
import { programs } from '../data'

const calculateCategories = (): CategoryList => {
  const categories: CategoryList = {}

  programs.forEach((program) =>
    program.category.forEach((category) => {
      if (categories[category.slug] === undefined) {
        categories[category.slug] = { name: category.name, programs: [] }
      }

      categories[category.slug].programs.push(program)
    })
  )

  return categories
}

export const Home = (): JSX.Element => {
  const categories = useMemo(calculateCategories, [programs])

  return (
    <section className="p-4 min-h-screen flex-grow flex flex-row">
      <section className="flex-1">
        <button>Hämta skolor</button>
      </section>
      <section className="flex-1 shadow-lg p-4">
        {Object.entries(categories).map(([slug, cat]) => (
          <CardGroup name={cat.name} programs={cat.programs} key={slug} />
        ))}
      </section>
    </section>
  )
}

export default Home
