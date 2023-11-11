import styled from 'styled-components'

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`

function Loader() {
  return <StyledLoader className="lds-dual-ring"></StyledLoader>
}

export default Loader
