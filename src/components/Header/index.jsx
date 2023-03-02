import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey/42">Questionnaire</Link>
      <Link to="/freelance">Freelance</Link>
      <Link to="/results">Header</Link>
    </nav>
  )
}

export default Header
