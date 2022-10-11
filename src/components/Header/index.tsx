import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles.js';


export function Header(){
  return (
    <Container>
      <Content className="container">
        <img src={logoImg} alt="DT Money Logo" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}
