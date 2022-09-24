import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  margin-left: 15%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const SideBarContainer = styled.div`
  height: 100vh;
  width: 15vw;
  margin-left: 40px;
  position: fixed;
`

export const NoteContainer = styled.div`
  height: 100vh;
  width: 95%;
  background: var(--white);
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const TagsContainer = styled.div`
  height: 100vh;
  width: 14vw;
  position: fixed;
  margin-left: 87%;
  display: flex;
  justify-content: center;
  align-items: center;
`
