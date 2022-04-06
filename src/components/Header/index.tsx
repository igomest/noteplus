import { Container, HeaderContainer } from "./style";
import pencilImg from "../../assets/pencil.svg";

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <button>
          <img src={pencilImg} alt="Pencil Icon" />
          <p>Escreva sua nota</p>
        </button>
      </HeaderContainer>
    </Container>
  );
};
