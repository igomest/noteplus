import styled from 'styled-components'


export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 24vw;
  height: 28vh;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin: 1rem;
  padding: 20px;
  border-radius: 10px;
  border-bottom: 5px solid var(--black);

  :hover {
     background-color: var(--background);
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

   div {
      border: 2px solid black;
      width: 5rem;
      height: 4rem;
      position: relative;
   }
`

export const NoteContent = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 60%;
   padding: 10px;
   justify-content: space-around;
   margin-top: 10px;
   
   p {
      color: var(--silver);
      margin-bottom: 10px;
   }
`

export const BottomBar = styled.div`
   width: 8rem;
   height: 2rem;
   display: flex;
   justify-content: space-evenly;
   align-items: center;

   p {
     font-weight: bold;
     font-size: 0.95rem;
   }
`