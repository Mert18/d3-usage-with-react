import styled from "styled-components";

const Head = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  `

const Title = styled.div`
    font-size: 1.4rem;
  `


const Header = () => {


  return (
    <Head>
      <Title>Robolaunch Components</Title>
    </Head>
  )
}

export default Header;
