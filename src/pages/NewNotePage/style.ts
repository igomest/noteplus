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

export const NewNoteContainer = styled.form`
  background: var(--white);
  border-radius: 10px;
  display: flex;
  width: 95%;
  height: 60vh;
  margin-top: 30px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 72%;
  height: 96%;
  padding: 20px;
  color: var(--black);
  justify-content: space-around;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 9vh;

  input {
    width: 100%;
    height: 2.9rem;
    background: var(--background);
    padding: 10px;
    border-radius: 10px;
    border: none;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 16vh;

  textarea {
    width: 100%;
    height: 12vh;
    background: var(--background);
    padding: 10px;
    border-radius: 10px;
    border: none;
  }
`

export const ReminderDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 8.5vh;

  input {
    width: 100%;
    height: 2.9rem;
    background: var(--background);
    padding: 10px;
    border-radius: 10px;
    border: none;
  }
`

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 8.5vh;

  input {
    width: 100%;
    height: 2.9rem;
    background: var(--background);
    padding: 10px;
    border-radius: 10px;
    border: none;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 22%;
  height: 5vh;
  align-items: center;
`

export const CancelButton = styled.button`
  background: var(--white);
  color: var(--black);
  border: none;
  border: 1px solid var(--black);
  border-radius: 10px;
  width: 5.5rem;
  height: 2.3rem;
  font-weight: bold;

  :hover {
    background: var(--black);
    color: var(--white);
  }
`

export const SaveButton = styled.button`
  background: var(--black);
  color: var(--white);
  border: none;
  border-radius: 10px;
  width: 5.5rem;
  height: 2.3rem;
  font-weight: bold;
  margin-left: 14px;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ExampleNoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34%;
  height: 96%;
`

export const NoteContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 90%;
  height: 95%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom: 4px solid var(--black);

  :hover {
    background: var(--background);
  }
`

export const TopBar = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  select {
    border: none;
  }
`

export const ImgContainer = styled.div`
  border: 1px solid var(--black);
  border-radius: 10px;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const Menu = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const NoteContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  margin-bottom: -14px;

  p {
    margin-top: 14px;
  }
`

export const BottomBar = styled.div`
  width: 8rem;
  height: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: -7px;

  p {
    font-weight: bold;
    font-size: 0.95rem;
  }
`
