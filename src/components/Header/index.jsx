import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey/42">Questionnaire</Link>
      <Link to="/freelances">Freelances</Link>
      <Link to="/results">Header</Link>
    </nav>
  )
}

export default Header
