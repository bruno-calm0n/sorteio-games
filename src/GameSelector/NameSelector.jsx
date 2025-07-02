import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  ModalTitle,
  Content,
  ButtonsWrapper,
  Button,
  IconDices,
  IconHistory
} from './NameSelector.styles'
import games from '../games.json'

export default function NameSelector({ onAddHistory }) {
  const [sorteado, setSorteado] = useState('')
  const navigate = useNavigate()

  function sortear() {
    const indice = Math.floor(Math.random() * games.length)
    const selected = games[indice]
    setSorteado(selected)
    onAddHistory(selected)
  }

  return (
    <Container>
      <Box>
        <ModalTitle>Sorteio de Jogos</ModalTitle>
        {sorteado && <Content>{sorteado}</Content>}
        <ButtonsWrapper>
          <Button onClick={sortear}>
            <IconDices size={20} />
            Sortear
          </Button>
          <Button onClick={() => navigate('/history')}>
            <IconHistory size={20} />
            Histórico
          </Button>
        </ButtonsWrapper>
      </Box>
    </Container>
  )
}