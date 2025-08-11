import Section_FormularioMenores from "../../../components/components - AgendarCita/components/Section - FormularioMenores";
import ChatBotContainer from "../../../components/components - globals/components/ChatBotContainer";
import Footer from "../../../components/components - globals/components/Footer";
import Header from "../../../components/components - globals/components/Header";

export default function page() {
  return (
    <body>
      <Header />
      <main>
        <Section_FormularioMenores/>
      </main>
      <Footer />
      <ChatBotContainer />
    </body>
  );
}
