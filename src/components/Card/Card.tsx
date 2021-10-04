import React, { forwardRef, useState } from 'react'
import { Program } from 'types'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { motion } from 'framer-motion'

const Card = forwardRef<any, { program: Program; layer: number }>(
  ({ program, layer }, ref) => {
    const [favorite, setFavorite] = useState(false)

    const toggleFavorite = () => setFavorite((t) => !t)

    return (
      <section
        ref={ref}
        className="flex flex-row shadow-xl p-6 rounded-md bg-white overflow-hidden"
      >
        <section className="flex flex-col flex-grow overflow-hidden">
          <h5>{program.name}</h5>
          <p>
            {program.credits} högskolepoäng. Skola: {program.school.name}
          </p>
        </section>
        <section className="flex align-middle justify-center">
          <button onClick={toggleFavorite}>
            {favorite ? (
              <FavoriteIcon htmlColor="orange" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </button>
        </section>
      </section>
    )
  }
)

const MotionCard = motion(Card)

export { Card, MotionCard }
