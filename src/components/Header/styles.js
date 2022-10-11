import styled from 'styled-components'

export const Container = styled.header`
  z-index: 1;
  background: #5429CC;
  min-height: 212px;
  position: relative;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 8%;
  padding-top: 36px;

  img {
    margin-right: auto;
  }

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 195px;
    height: 48px;
    background: #6933FF;
    margin-left: auto;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
    font-size: 1em;
    font-weight: 600;
  }
`
