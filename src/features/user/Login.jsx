import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88vh;
  width: 100vw;
  z-index: 1;
  background-image: url('public/images/login-background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  width: 700px;
`

const LogoOne = styled.img`
  width: 90%;
`
const LogoTwo = styled.img`
  width: 90%;
`
const StyledLink = styled(Link)`
  display: inline-block;
  background-color: #0096ff;
  color: #fff;
  width: 90%;
  padding: 1rem;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.97);
  }
`
const Info = styled.p`
  font-size: 14px;
  width: 90%;
  text-align: center;
`

function Login() {
  return (
    <Wrapper>
      <Content>
        <LogoOne src="public/images/cta-logo-one.svg" />
        <StyledLink to="/signup">Get All There</StyledLink>
        <Info>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney + subscription. As of 0./26/21, the price of disney+ and
          the Disney Bundle will increase by $1
        </Info>
        <LogoTwo src="public/images/cta-logo-two.png" />
      </Content>
    </Wrapper>
  )
}

export default Login
