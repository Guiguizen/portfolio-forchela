import React, {useState} from 'react'
import Forchela from '../../assets/img/Branca1.png'
import { Button } from '../ButtonElement'
import { ContatoWrapper, EmailInput, FooterContainer, NameInput, TextInput, Title, BtnWrapper, LogoWrapper, LogoImg, FooterWrapper, BudgetWrapper } from './FooterElements'

const Footer = () => {

    const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <FooterContainer >
      <BudgetWrapper>
        <ContatoWrapper>
            <Title>FAÇA SEU ORÇAMENTO</Title>
            <NameInput placeholderTextColor="#fff" placeholder='Insira seu nome' />
            <EmailInput placeholderTextColor="#fff" placeholder='Insira seu email' />
            <TextInput placeholderTextColor="#fff" placeholder='Escreva sua mensagem' />
            <BtnWrapper>
            <Button onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            fontBig='true'
            big='true'>Enviar</Button>
            </BtnWrapper>
        </ContatoWrapper>
        <LogoWrapper>
          <LogoImg src={Forchela} />
        </LogoWrapper>
      </BudgetWrapper>
    </FooterContainer>
  )
}

export default Footer
