import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Accordion from '../../ui/Accordian'

const Scroll = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`

const SignupContainer = styled.div`
  background-color: #040714;
  z-index: -1;
  max-width: 100vw;
  overflow: hidden;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw-80px;
  z-index: 1;
  background-image: url('/images/signup-background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  width: 700px;
`

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 5px;
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
  margin: 10px 0;
  z-index: 500;

  &:hover {
    opacity: 0.9;
    transform: scale(0.97);
  }
`
const Info = styled.h3`
  width: 90%;
  text-align: center;
  font-weight: 100;
  color: #dddd;
`

const P = styled.p`
  font-size: 12px;
  text-align: center;
`

const SignupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 5rem;
  text-align: center;
`

const Img = styled.img`
  width: 100%;
`

const Testimonails = styled.div`
  display: ${(props) =>
    props.devices
      ? {
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
        }
      : 'flex'};

  flex-direction: column;
  justify-content: center;
  gap: 45px;
  padding: 2.5rem;
  width: 100%;

  @media only screen and (min-width: 758px) {
    ${(props) =>
      props.devices && {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
      }}

    flex-direction: row;
  }
`
const Testimonail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 17px;
  height: 100%;
`
const TestImg = styled.img`
  width: 100%;
`

function Signup() {
  return (
    <SignupContainer>
      <Wrapper>
        <Content>
          <H1>
            Stream brand new Originals, blockbusters, binge-worthy series and
            more
          </H1>
          <Info>All at no extra cost. Cancel at any time.*</Info>
          <StyledLink to="/signup">Sign up for free</StyledLink>
          <Info>
            Get 12 months for the price of 10 with an annual subscription,
            compared to paying monthly.
          </Info>
          <P>
            *Effective at the end of the billing period. Subscription required.
          </P>
          <Scroll>
            <span className="scroll-icon">
              <span className="scroll-icon__wheel-outer">
                <span className="scroll-icon__wheel-inner"></span>
              </span>
            </span>
          </Scroll>
        </Content>
      </Wrapper>
      <SignupContent>
        <H1>Only on Disney+</H1>
        <Info>
          Exclusive movies, series and originals you wont find on any other
          streaming service.
        </Info>
      </SignupContent>
      <Img src="/images/disney-plus-h2.jpg" />
      <SignupContent>
        <H1>Watch the way you want</H1>
        <Info>Enjoy the worlds greatest stories - anytime, anywhere.</Info>
      </SignupContent>
      <Testimonails>
        <Testimonail>
          <TestImg src="/images/movie.png" />
          <H1>Endless entertainment</H1>
          <Info>
            Explore thousands of hours of TV series, movies and originals.
          </Info>
        </Testimonail>
        <Testimonail>
          <TestImg src="/images/device.png" />
          <H1>Available on your favourite devices</H1>
          <Info>
            Stream on up to four screens at once on compatible devices.
          </Info>
        </Testimonail>
        <Testimonail>
          <TestImg src="/images/user.png" />
          <H1>Easy-to-use parental controls</H1>
          <Info>
            Keep your family safe with our intuitive parental controls.
          </Info>
        </Testimonail>
      </Testimonails>
      <Accordion
        items={[
          {
            title: 'What is Disney+ ?',
            content:
              'Disney+ is the streaming home for entertainment from Disney, Pixar, Marvel, Star Wars, National Geographic, Star and more.Disney has a number of benefits included in the standard subscription price: Exclusive Originals you can’t see anywhere else, blockbuster movies, bingeable shows, snackable shorts, and inspiring documentaries.Unlimited downloads on up to 10 devices and up to 7 different profiles.4K UHD streaming with Dolby Vision and Dolby Atmos support on compatible devices for no extra cost.A robust parental controls system including dedicated profiles for children.Up to 4 screens can stream simultaneously',
          },
          {
            title: 'What can I watch on Disney+ ?',
            content:
              'With thousands of films and series from the greatest storytellers around the globe and more added each month, you will always find something to watch on Disney+\nThe latest live-action and animated blockbusters from Disney, like Raya and The Last Dragon\nHeart-warming storytelling for all ages from the masterminds at Pixar such as this summer’s must-see Italian adventure Luca\nExperience the ever-growing story of the Marvel Cinematic Universe like never before with must-see exclusive Original series from Marvel Studios - WandaVision, The Falcon and The Winter Soldier and Loki\nRelive the epic Skywalker Saga or stream the world’s first ever live-action Star Wars series, The Mandalorian\nOpen your eyes to the beauty of our planet with fearless National Geographic explorers and a number of insightful documentaries\nWith Star you will find bingeable series that everyone is talking about like the exclusive final season of the global phenomenon The Walking Dead',
          },
          {
            title: 'How much does Disney+ cost ?',
            content:
              'Disney+ subscription costs €10.99 a month or €109.90 a year.',
          },
          {
            title: 'Whhat are the devices supported ?',
            content:
              'Disney+ supports mobile devices, web browsers, game consoles, set-top boxes, and smart TVs.',
          },
        ]}
      />
      <Testimonails devices="true">
        <Testimonail>
          <TestImg src="/images/tv.png" />
          <H1>TV</H1>
          <Info>Android TV devices Apple TV Chromecast LG TVs Samsung</Info>
        </Testimonail>
        <Testimonail>
          <TestImg src="/images/computer.png" />
          <H1>Computer</H1>
          <Info>Chrome OS MacOS Windows PC</Info>
        </Testimonail>
        <Testimonail>
          <TestImg src="/images/mobile.png" />
          <H1>Mobile & Tablet</H1>
          <Info>Android Phones & Tablets iPhone & iPad</Info>
        </Testimonail>
        <Testimonail>
          <TestImg src="/images/game.png" />
          <H1>Game Consoles</H1>
          <Info>PS4 PS5 Xbox One Xbox Series X Xbox Series S</Info>
        </Testimonail>
      </Testimonails>
    </SignupContainer>
  )
}

export default Signup
