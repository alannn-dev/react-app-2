import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/styles/Atoms'
import LightLogo from '../../assets/light-logo.png'
import DarkLogo from '../../assets/dark-logo.png'
import { useTheme } from '../../utils/hooks'

const HomeLogo = styled.img`
  height: 70px;
  margin-bottom: 25px;
`

const NavContainer = styled.nav`
  padding-top: 30px;
  padding-bottom: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(249, 249, 252);
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`

function Header() {
  const { theme } = useTheme()

  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
      </Link>
      <NavBar className="navbar">
        <StyledLink $theme={theme} to="/">
          Accueil
        </StyledLink>
        <StyledLink $theme={theme} to="/freelances">
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </NavBar>
    </NavContainer>
  )
}

export default Header
