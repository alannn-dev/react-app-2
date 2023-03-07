import React, { useState } from 'react'
import styled from 'styled-components'
// import { Component } from 'react'
import colors from '../../utils/styles/colors'

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 2px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`
// Functionnal component :

const EmailInput = ({ theme }) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <InputWrapper theme={theme}>
      <StyledLabel theme={theme}>Adresse Email</StyledLabel>
      <StyledInput
        theme={theme}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue}
    </InputWrapper>
  )
}

export default EmailInput

// CLASS COMPONENT :

/* class EmailInput extends Component {
  constructor(props) {
    // Autre manière de binder de manière explicite votre fonction au this :
    // this.updateInputValue =this.updateInputValue.bind(this)
    super(props)
    // Initialisation du state (= Dans composant fonction => Variable de state (value) par default):
    this.state = {
      inputValue: '',
    }
  }

  // MAJ du state avec fct passée avec le render :
  updateInputValue(value) {
    // setState pour MAJ du state (Déclanche un nouveau render du composant)
    // (= Dans composant fonction => Function pour MAJ (setValue))
    this.setState({ inputValue: value })
  }

  render() {
    const { theme } = this.props

    return (
      <InputWrapper theme={theme}>
        <StyledLabel theme={theme}>Adresse Email</StyledLabel>
        <StyledInput
          theme={theme}
          // MAJ state class component
          onChange={(e) => this.updateInputValue(e.target.value)}
        />
        {this.state.inputValue}
      </InputWrapper>
    )
  }
}

export default EmailInput
 */
