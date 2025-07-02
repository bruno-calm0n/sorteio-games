import styled, { keyframes } from 'styled-components'
import { Dices, History } from 'lucide-react'

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`

export const Box = styled.div`
  width: 600px;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`

export const ModalTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 15px;
`

export const Content = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
  min-height: 2rem;
  animation: ${fadeInDown} 0.4s ease-out;
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



export const IconDices = styled(Dices)`
  margin-right: 0.5rem;
  transition: transform 1s ease;

  
  ${Button}:active & {
    transform: rotate(360deg);
  }
`

export const IconHistory = styled(History)`
  margin-right: 0.5rem;
  transition: transform 1s ease;

  
  ${Button}:active & {
    transform: rotate(360deg);
  }
`
