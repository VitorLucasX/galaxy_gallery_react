import styled from 'styled-components'
import tags from './tags.json'

const TextoTag = styled.p`
  color: #D9D9D9;
  font-size: 24px;
  margin: 0;
`

const BotaoTag = styled.button`
  font-size: 20px;
  color: #FFFFFF;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #C98CF1;
  }
`

const ContainerTag = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tags = ({ setTag }) => {
  return (
   <ContainerTag>
      <TextoTag>Busque por tags:</TextoTag>
      <Div>
        {tags.map(tag => <BotaoTag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</BotaoTag>)}
      </Div>
    </ContainerTag>
  )
}

export default Tags
