import AnimatedTabs from "../components/Tabs";

export default function AboutMe() {
  return (
    <section id="sobre" className="py-0 sm:py-10 pb-10 ">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 ">
          <div>
            <img
              className="aspect-square"
              height={600}
              width={300}
              src="../Renata.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl sm:text-4xl font-bold">About me</h2>
            <p className=" text-md sm:text-xl text-base">
            Sou uma desenvolvedora backend apaixonada por aprender e criar coisas incríveis.
            Tenho experiência com Java, Spring Boot, Laravel, React Native, PostgreSQL e outras
            ferramentas que adoro explorar.  
            Sempre busco melhorar, me desafiar e descobrir novas formas de fazer as coisas. Amo 
            trabalhar em equipe, compartilhar ideias e dar o meu melhor para entregar soluções
            que realmente fazem a diferença. 
            Sou dedicada, focada e acredito que cada projeto é uma oportunidade de crescer e 
            mostrar o quanto sou capaz.
            </p>
            <AnimatedTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
