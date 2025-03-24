import './styles/App.css'
//import { useLoader, Canvas  } from '@react-three/fiber'
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

//import { Model } from './Model'
//import { OrbitControls } from '@react-three/drei'

import Nav from './Nav'

import { BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import Home from './home/Home'
import Projects from './projects/Projects'
import About from './about/About'
import Blog from './blog/Blog'
import BlogPost from './blog/BlogPost'

const App = () => {

  return (
    <>
    <div>
    <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path= "/" element = {<Home/>}></Route>
          <Route path= "/projects" element = {<Projects/>}></Route>
          <Route path= "/about" element = {<About/>}></Route>
          <Route path= "/blog" element = {<Blog/>}></Route>
          <Route path= "/blog/:id" element = {<BlogPost/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
    

  )
}

export default App;
