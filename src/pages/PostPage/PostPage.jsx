import { useEffect, useReducer, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { get } from "../../Services/HttpClient";
import {getComments} from "./getComments"

export default function PostPage() {

  const id = useParams();
  const [elements, setElements] = useState([])
  const [comments, setComments] = useState([])
  const location = useLocation();

  useEffect(() => {
    get("posts").then(res => {
      setElements(res.data)
    });
    getComments(id.id).then(res => {
      setComments(res.data)
    })
  }, [location])

  const list = elements.map((element, index) => (
    <li key={element.id}><Link to={`../comment/${element.id}`}>{element.title}</Link></li>
  ))
  const message = comments.map((comment, index) => (
    <li key={comment.id}>{comment.summary}</li>
  ))

  return (
    <Layout>
      <>
        <h1>COMMENTS PAGE</h1>
        {!(id.id) ? <ul>{list}</ul> : <> {list} <br/><hr/><ul>{message}</ul></>}
      </>
    </Layout>
  )
}
