import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 0 8%;
  margin-bottom: 50px;
  left: 0;
  top: 15%;
  z-index: 2;
`

export const CardsContainer = styled.div`
display: flex;
  max-width: 100vw;
  flex-direction: row;
  align-items: center;
  overflow: auto;
`
export const Card = styled.div`
  min-width: 352px;
  min-height: 136px;
  background: #fff;
  & + div {
    margin-left: 20px;
  }
`
export const CardBody = styled.div`
  margin-top: 25px;
  margin-left: 32px;
  margin-right: 8px;
  margin-bottom: 18px;
`
