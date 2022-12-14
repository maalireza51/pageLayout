import Navbar from '../Navbar'
import Main from '../Main'
import Footer from '../Footer'

export default function Layout({children}) {
  return (
    <>
      <Navbar/>
      <Main>{children}</Main>
      <Footer/>
    </>
  )
}
