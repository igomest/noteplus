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
  max-height: auto;
  width: 95%;
  background: var(--white);
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`

export const Note = styled.div`
  max-height: auto;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const NoteTitle = styled.div`
  display: flex;
  width: 97%;
  height: 3rem;
`

export const Title = styled.div`
  width: 12rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
`
export const Loading = styled.img`
  width: 1.5rem;
  height: 1.5rem;
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
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 24rem;
  /* border: 1px solid black; */

  img {
    width: 380px;
    height: 380px;
  }

  h3 {
    position: absolute;
    margin-top: 16rem;
    font-style: italic;
  }
`
