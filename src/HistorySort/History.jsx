import { useNavigate } from 'react-router-dom'
import {
    Container,
    Box,
    HistoryTitle,
    List,
    ListItem,
    ButtonsWrapper,
    Button,
    IconBack
} from './History.styles'

export default function History({ historyList }) {
    const navigate = useNavigate()

    return (
        <Container>
            <Box>
                <HistoryTitle>Histórico de Sorteios</HistoryTitle>
                <List>
                    {historyList.map((item, idx) => (
                        <ListItem key={idx}>{item}</ListItem>
                    ))}
                </List>
                <ButtonsWrapper>
                    <Button onClick={() => navigate('/')}>
                        <IconBack size={20} />
                        Voltar
                    </Button>
                </ButtonsWrapper>
            </Box>
        </Container>
    )
}