import React from 'react'
import HomePage from '../HomePage'
import BlogPage from '../BlogPage'
import PostPage from '../PostPage'
import NotFountPage from '../NotFoundPage'
import { useRoutes } from 'react-router-dom'


const routes = [
  {path:"/", element: <HomePage />},
  {path:"blog", element: <BlogPage/>},
  {path:"/comment", element: <PostPage/>},
  {path:"/comment/:id", element: <PostPage/>}
]

export default function Router() {
  const match = useRoutes(routes)
  return match || <NotFountPage/>
}
