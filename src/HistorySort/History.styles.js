import styled from 'styled-components'
import { ArrowBigLeft } from 'lucide-react'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;
`

export const Box = styled.div`
  width: 600px;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const HistoryTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 1.5rem;
`

export const ListItem = styled.li`
  font-size: 1.2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  /* mesmo padding dos botões principais */
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #4a90e2;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }
`

export const IconBack = styled(ArrowBigLeft)`
  margin-right: 0.5rem;
  transition: transform 1s ease;
`
