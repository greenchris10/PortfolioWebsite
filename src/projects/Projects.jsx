import ProjectCard from "./ProjectCard";
import "../styles/Project.css"

const Projects = () => {

    return(
     <>
     <div className="projects">

      <h1 className="project-title">Projects</h1>
      

      <div className="project-cards">
      <ProjectCard 
        title = "NLP Book RAG System"
        desc = "Developed a scalable NLP-driven search system using Langchain and Ollama that enables semantic search across vectorized embeddings of Frank Herbert’s Dune series. "
        demo = "https://youtu.be/xIZnANYOkWI"
        source="https://github.com/greenchris10/Book-Retrieval-System"/>

        <ProjectCard 
        title = "Master's Thesis"
        desc = "Proposed targeted universal perturbation method offering a practical and scalable alternative to computationally expensive 3D adversarial attacks."
        demo = "./pdf/Chris_MSACS_Thesis_WIT_2024.pdf"
        source="https://github.com/memoatwit/advarch/tree/universal_perturbation"/>

        <ProjectCard 
        title = "Adversarial Architecture Research"
        desc = "I developed a web application using Streamlit allowing architectural research team to test various adversarial attacks on their own images. I also implemented Open AI’s transformer based Clip model into adversarial pipeline to allow adversarial attacks on specific architecture labels"
        demo = "https://classify-img.streamlit.app/"
        source = "https://github.com/memoatwit/classify-img/tree/master" />

        <ProjectCard 
        title = "One Noise To Rule Them All"
        desc = "Designed untargeted universal perturbation by crafting a single noise perturbation applicable to various views of the same object."
        demo = "https://youtu.be/cubXQnCKM_c"
        source= "https://github.com/memoatwit/UniversalPerturbation" />

        <ProjectCard 
        title = "Naruto Handsign Detector"
        desc = "I used YOLOV8 to make a Naruto Handsign Detector. I deployed the web application using Flask." 
        demo = "https://youtu.be/YHR-6_uXUnc"
        source = "https://github.com/greenchris10/naruto"/>

        <ProjectCard 
        title = "This Website"
        desc = "I wrote this entire personal portfolio from scratch in an attempt to learn some front-end development." 
        demo = ""
        source = "" />
        
        
      </div>
      </div>


        

      </>
      )

  }
  
  export default Projects;