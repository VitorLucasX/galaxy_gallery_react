import styled from 'styled-components'
import CampoTexto from '../CampoTexto/CampoTexto'

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
`

const Cabecalho = () => {
  return (
     <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="Logo da Space Gallery"/>
      <CampoTexto/>
    </HeaderEstilizado>
  )
}

export default Cabecalho
