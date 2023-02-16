import React from 'react'

import gym from '../../assets/images/gym-dynamic-clay.png'
import Badge from './Badge'
import Card from './Card'
import Title from './Title'

function PendingBadges() {
  return (
    <>
      <Title>Insignias Pendientes</Title>
      <Card>
        <Badge
          classBody="card-body py-0 px-0 gap-0 items-center text-center"
          classFigure="px-2 pt-5"
          classTitle="card-title text-gray-400"
          img={gym}
          text="+3 revisiones código"
        >
          Cordinator
        </Badge>
      </Card>
    </>
  )
}

export default PendingBadges
