import { PROJECTS } from "../constants"
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <div className="border-b border-nutral-900 pb-4">
        <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">Projects</motion.h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}              
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/4">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            width={150}
                            height={150}
                            className="rounded mb-6"
                        />
                    </motion.div>
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}              
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-nutral-400">{project.description}</p>
                        {project.technologies.map((technology, index) => (
                            <span key={index} className="mr-2 rounded bg-nutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                {technology}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects