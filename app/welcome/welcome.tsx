import { Header } from "~/components/header";
import { Paragraph } from "~/components/paragraph";
import type { Route } from "../+types/root";
import styles from "~/styles/index.css?url"; //haciendo esto combertimos styles en un hubicacion


export const links: Route.LinksFunction = () =>{
    return[{ rel: "stylesheet", href: styles}];    //este export hace de link de style pare el y sus hijos
}

export function Welcome() {
  return (
    <div>
      <Header>Home</Header>
      <Paragraph>Welcome home</Paragraph>
    </div>
    
  );
}
