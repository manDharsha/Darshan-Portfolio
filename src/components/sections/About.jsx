import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2 justify-evenly">

                  <div className="text-center h-8 w-8  object-fill bg-[url(../src/assets/CSS3.svg)]"></div>
                  <div className="text-center h-8 w-8 object-fill bg-[url(../src/assets/React.svg)]"></div>
                  <div className="text-center h-8 w-8  object-fill bg-[url(../src/assets/JavaScript.svg)]"></div>
                  <div className="text-center h-8 w-8  object-fill bg-[url(../src/assets/hTML5.svg)]"></div>
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2 justify-evenly">
                  
                  <div className="text-center h-8 w-8  object-fill bg-[url(../src/assets/Node.js.svg)]"></div>
                  <div className="text-center h-8 w-8  object-fill bg-[url(../src/assets/PostgresSQL.svg)]"></div>
                  <div className="text-center h-8 w-8  object-fill bg-[url(../src/assets/Postman.svg)]"></div>
                  <div className="text-center text-white h-8 w-8  object-fill bg-[url(../src/assets/AzureSQLDatabase.svg)]"></div>

                </div>
              </div>
            </div>
          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.E in Electronics and Communication </strong> - Bangalore Institute of Technology - (2023)
                </li>
                <li>
                  Relevant Coursework: Web Development, SEO and Social Media Marketing.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Junior Web Developer at OrganizeIn. (2024){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration , Search Engine Optimisation(SEO).
                  </p>
                </div>

                
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center"> Skills & Technologies</h3>
                <div className="flex flex-wrap gap-5 justify-between">
                  
                  <div className="text-center h-8 w-8  object-fill bg-[url(../src/assets/microsoft-excel-icon.svg)]"></div>
                  <div className="text-center h-8 w-8  object-fill bg-[url(../src/assets/Power-bi-icon.svg)]"></div> 
                  <div className="text-center h-8 w-8  object-fill bg-[url(../src/assets/AzureSQLDatabase.svg)]"></div>
                  <div className="text-center h-8 w-8  object-fill bg-[url(../src/assets/icons8-Wordpress.svg)]"></div>
                  <div className="text-center h-8 w-8  object-fill bg-[url(../src/assets/C.svg)]"></div>
                  <div className="text-center text-white h-8 w-8  object-contain bg-[url(../src/assets/github-white-icon.svg)]"></div>
                  <div className="text-center text-white h-8 w-8  object-fill bg-[url(../src/assets/visual-studio-code-icon.svg)]"></div>

                </div>
            </div>
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
