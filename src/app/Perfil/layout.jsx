import ChatBotContainer from "../../../components/components - globals/components/ChatBotContainer";
import Footer from "../../../components/components - globals/components/Footer";
import Header from "../../../components/components - globals/components/Header";
import SectionNavegacion from "../../../components/components - perfil/Components/Perfil/Section- Navegacion";

export default function layout({children}) {
  return (
    <body>
        <Header/>
        <main className="flex flex-col items-center w-full">
            <SectionNavegacion/>
            {children}
        </main>
        <Footer/>
        <ChatBotContainer/>
    </body>
  )
}
