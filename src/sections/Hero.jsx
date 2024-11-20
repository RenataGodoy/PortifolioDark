import { TypeAnimation } from "react-type-animation";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { motion } from "framer-motion";
import AnimatedNumbers from "react-animated-numbers";

const variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Hero() {
  return (
    <div className="py-12 sm:py-16 md:py-24">
      <MaxWidthWrapper>
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-5 md:gap-10 text-center sm:text-start"
          >
            <h1 className="text-4xl md:text-8xl leading-normal font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-500">
              Olá, eu sou
              <br />
              <span className="text-white">
                <TypeAnimation
                  sequence={["Renata Godoy", 2000, "Desenvolvedora back-end", 2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-gray-400 sm:text-xl">
            Desenvolvedora backend apaixonada por criar soluções escaláveis e eficientes.
            </p>
            <div>
              <a
                href="https://wa.link/fk060y"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 via-pink-500 to-pink-600 hover:bg-slate-200 text-white"
              >
                Contato
              </a>
              <a
                href="https://drive.google.com/file/d/1RUEe5MzNJuD26G163gbwbsAPiUp_PNOA/view"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-pink-600 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Abrir CV
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="col-span-4 place-self-center mt-4 lg:mt-0 sm:ml-auto"  // adicionei "sm:ml-auto" para mover para o lado direito
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <img
                src="/hero.png"
                alt="hero image"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  // centralizando a imagem
                width={400}
                height={400}
              />
            </div>
          </motion.div>
        </div>

        {/* Nova seção com gráficos adicionais */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Estatísticas do GitHub</h2>
          <div className="flex justify-between gap-10">
            {/* Gráfico de Linguagens Mais Usadas */}
            <div className="w-1/2 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Linguagens Mais Usadas</h3>
              <div className="flex justify-center">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=RenataGodoy&layout=compact&langs_count=6&hide=HTML,CSS&theme=radical"
                  alt="Linguagens mais usadas"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Gráfico de Estatísticas do Perfil */}
            <div className="w-1/2 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Estatísticas do Perfil</h3>
              <div className="flex justify-center">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=RenataGodoy&show_icons=true&hide_title=true&count_private=true&theme=radical"
                  alt="Estatísticas do GitHub"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
