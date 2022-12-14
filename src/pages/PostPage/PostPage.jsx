import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { get } from "../../Services/HttpClient";
import {getComments} from "./getComments"

export default function PostPage() {

  const id = useParams();
  const [elements, setElements] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    get("posts").then(res => {
      setElements(res.data)
    });
    getComments(id.id).then(res => {
      setComments(res.data)
    })
  }, [])

  const list = elements.map((element, index) => (
    <li key={element.id}><Link to={`../comment/${element.id}`}>{element.title}</Link></li>
  ))
  const message = comments.map((comment, index) => (
    <li key={comment.id}>{comment.summary}</li>
  ))

  return (
    <Layout>
      <>
        POST PAGE
        {!(id.id) ? <ul>{list}</ul> : <> COMMENTS: <ul>{message}</ul></>}
      </>
    </Layout>
  )
}
