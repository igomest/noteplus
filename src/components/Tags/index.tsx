import { Container, Icon, ItemContainer, Title } from './style'
import tagImg from '../../assets/tagImg.svg'

export const Tags = () => {
  return (
    <Container>
      <Title>
        <h3>Lista de Tags</h3>
        <button>X</button>
      </Title>

      <ul>
        <li>
          <ItemContainer>
            <Icon>
              <img src={tagImg} alt="Tag" />
            </Icon>
            <p>Book</p>
          </ItemContainer>
        </li>

        <hr />

        <li>
          <ItemContainer>
            <Icon>
              <img src={tagImg} alt="Tag" />
            </Icon>
            <p>Studying</p>
          </ItemContainer>
        </li>

        <hr />

        <li>
          <ItemContainer>
            <Icon>
              <img src={tagImg} alt="Tag" />
            </Icon>
            <p>Task</p>
          </ItemContainer>
        </li>
      </ul>

      <hr />
    </Container>
  )
}
