import React from 'react'
import Badge from './Badge'
import Card from './Card'
import Title from './Title'

function EarnBadges({ fakeUsers }) {
  return (
    <>
      <Title>Insignias ganadas</Title>
      <Card direction="row">
        {fakeUsers.ITAawards.map(user => {
          return (
            <Badge
              classBody="card-body py-0 px-0 gap-0 items-center text-center"
              classFigure="px-2 pt-4"
              classTitle="card-title text-black"
              img={user.img}
              text={user.text}
              key={user.name}
            >
              {user.name}
            </Badge>
          )
        })}
      </Card>
    </>
  )
}

export default EarnBadges
