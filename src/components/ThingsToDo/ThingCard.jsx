import React from 'react'
import { Card } from 'react-bootstrap'

export default function ThingCard(props) {
  return (
    <Card className="mb-2">
      <Card.Img style={{objectFit: 'cover', width: '100%', height: 250}} variant="top" src={props.image} />
      <Card.Body className="thing-card-body">
      <Card.Title><h3>{props.title}</h3></Card.Title>
        <Card.Text>
          {props.items.map((item, index) => {
            if(props.itemUrls[index]) {
              return  <div style={{width:200, margin: '0 auto'}}><a style={{color: 'rgb(108, 123, 104)'}} target='_blank' href={props.itemUrls[index]}>{item}</a></div>
            } else {
              return  <div style={{width:200, margin: '0 auto'}}>{item}</div>
            }
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
