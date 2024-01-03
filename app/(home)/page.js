import Blog from "@/components/Home/Blog";
import Contact from "@/components/Home/Contact";
import SendEmail from "@/components/Home/SendEmail";
import State from "@/components/Home/State";
import { Team } from "@/components/Home/Team";
import Footer from "@/components/Shared/Footer";

export default function Home() {
  return (
    <>
      <State></State>
      <Team></Team>
      <Blog></Blog>
      <SendEmail></SendEmail>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
