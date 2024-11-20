import { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { Code2, Eye } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "API adoção de animais",
        desc: "API adoção de animais com java, sping, swagger, pgadmin",
        img: "./Assets/ApiAdoptionSwagger.png",
        category: "Java [Springboot]",
        gitUrl: "https://github.com/RenataGodoy/Adocao",
        liveUrl: "https://adocao-production-09ee.up.railway.app/swagger-ui/index.html",
    },
    {
        id: 2,
        title: "Petshop - App Mobile",
        desc: 'App mobile desenvolvido com reactNative e firebase para petshop',
        img: "./Assets/Petshop-reactNative.png",
        category: "ReactNative",
        gitUrl: "https://github.com/RenataGodoy/Petshop---ReactNative",
        liveUrl: "https://snack.expo.dev/czewM17jB2VBqeE-Nu57h",
    },
    {
        id: 3,
        title:"Projeto de ramais ",
        desc:"Projeto para cadastar e associar ramais em laravel com pgadmin.",
        img:"./Assets/Projeto Branches - Laravel.png",
        category:"Php [Laravel]",
        gitUrl:"https://github.com/RenataGodoy/prjBranches-pgadmin",
        liveUrl:"https://prjbranches-pgadmin-production.up.railway.app/",
    },

]

const categories = [
    "",
    "Java [Springboot]",
    "ReactNative",
    "Php [Laravel]",
]
const iconMap = {
    java: '<i class="devicon-java-plain-wordmark colored" linguagem-icon></i>',
    spring: '<i class="devicon-spring-original-wordmark colored" linguagem-icon></i>',
    swagger: '<i class="devicon-swagger-plain-wordmark colored" linguagem-icon></i>',
    railway:   '<i class="devicon-railway-original-wordmark colored" linguagem-icon></i>',
    firebase: '<i class="devicon-firebase-plain-wordmark" linguagem-icon></i>',
    reactnative: '<i class="devicon-react-original-wordmark colored" linguagem-icon></i>',
    php: '<i class="devicon-php-plain colored" linguagem-icon></i>',
    laravel: '<i class="devicon-laravel-original-wordmark colored" linguagem-icon></i>',
    bootstrap: '<i class="devicon-bootstrap-plain-wordmark colored" linguagem-icon></i>',   

};


export default function Projects() {
    
    //const linguagensIcons = projeto.linguagens.map(lang => iconMap[lang.toLowerCase()] || lang).join(' ');
    const [activeTab, setActiveTab] = useState("")
    const [filteredProjects, setFilteredProjects] = useState([])

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };


    useEffect(() => {
        setFilteredProjects(projects.filter(project => project.category === activeTab || activeTab === ""))
    }
        , [activeTab])

    const handleProject = (category) => {
        setActiveTab(category)
        setFilteredProjects([])
    }

    return (
        <section id="projetos" >
            <MaxWidthWrapper>
                <div  className="flex flex-col items-center py-10">
                    <h1 className="text-2xl sm:text-4xl font-bold">
                        Meus Projetos
                    </h1>

                    <div  className="flex flex-row gap-3 mt-10 sm:mt-20">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => handleProject(category)}
                                className={
                                    clsx('rounded-full border-2 px-5 py-3 text-lg sm:text-xl font-medium',
                                        category == activeTab ? 'border-purple-500' :
                                            'border-gray-500 text-gray-500 hover:border-white')}
                            >
                                {category === "" ? "Todos" : category}
                            </button>
                        ))}
                    </div>

                    <div
                        ref={ref}
                        className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                variants={cardVariants}
                                initial="initial"
                                animate={isInView ? "animate" : "initial"}
                                transition={{ duration: 0.3, delay: index * 0.4 }}
                                key={project.id}>
                                <div className="relative group hover:cursor-pointer">
                                    <img
                                        className="aspect-video rounded-t-xl group-hover:opacity-10  transition"
                                        src={project.img} alt="" />
                                    <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex justify-center items-center gap-2">
                                        <button
                                            onClick={() => window.open(project.gitUrl)}
                                            className="rounded-full bg-transparent border-4 border-gray-400 hover:border-white text-white px-2 py-2">
                                            <Code2 size={45} />
                                        </button>
                                        <button
                                            onClick={() => window.open(project.liveUrl)}
                                            className="rounded-full bg-transparent border-4 border-gray-400 hover:border-white text-white px-2 py-2">
                                            <Eye size={45} />
                                        </button>
                                    </div>
                                </div>
                                <div className="mx-4 flex flex-col gap-3 mt-3">
                                    <h1 className="font-bold text-xl sm:text-2xl">{project.title}</h1>
                                    <p className="text-gray-500">{project.linguagensIcons}</p>
                                    <p className="text-gray-500">{project.desc}</p>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}
