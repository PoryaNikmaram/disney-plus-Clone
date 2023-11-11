import styled from 'styled-components'

const StyledCompanies = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 100vw;
  padding: 1rem;
  gap: 15px;
  margin: 25px 0;

  @media only screen and (max-width: 650px) {
    & {
      flex-direction: column;
    }
  }
`

const Img = styled.img`
  width: 200px;
  z-index: 2;
`

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
`
const Company = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 15px 10px 0px #000;
  cursor: pointer;
  flex: 25%;
  overflow: hidden;

  &:hover ${Video} {
    visibility: visible;
    opacity: 1;
  }

  @media only screen and (max-width: 650px) {
    & {
      width: 100%;
    }
  }
`

function Companies() {
  return (
    <StyledCompanies>
      <Company>
        <Img src="public/images/viewers-disney.png" alt="" />
        <Video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </Video>
      </Company>
      <Company>
        <Img src="public/images/viewers-marvel.png" alt="" />
        <Video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </Video>
      </Company>
      <Company>
        <Img src="public/images/viewers-national.png" alt="" />
        <Video autoPlay={true} loop={true} playsInline={true} muted>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </Video>
      </Company>
      <Company>
        <Img src="public/images/viewers-pixar.png" alt="" />
        <Video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="public/videos/1564676714-pixar.mp4" type="video/mp4" />
        </Video>
      </Company>
      <Company>
        <Img src="public/images/viewers-starwars.png" alt="" />
        <Video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </Video>
      </Company>
    </StyledCompanies>
  )
}

export default Companies
