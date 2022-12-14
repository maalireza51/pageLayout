import { useEffect, useState } from "react";
import {get} from "../../Services/HttpClient"
import Layout from "../../components/Layout"
import Row from "../../components/Grids/Row"
import Card from "../../components/Card"

export default function BlogPage() {
  const [cards, setCards] = useState([])

  useEffect(()=>{
    get("posts").then(res => {
      setCards(res.data)
    })
  },[])

  return (
    <Layout>
        <Row>
          {cards.map((card,index) =>(
            <Card data={
              {
                variant: index===0?"item_first":"item_next",
                author: card.author,
                img: card.image,
                title: card.title,
                summary: card.summary,
                target: `../comment/${card.id}`
              }
            } key={card.id}></Card>
          ))}
        </Row>
    </Layout>
  )
}
