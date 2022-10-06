import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  width: 35%;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
`
export const CancelButton = styled.button`
  background: var(--black);
  color: var(--white);
  border: none;
  border-radius: 10px;
  width: 4.5rem;
  height: 2.3rem;
  font-weight: bold;
  margin-left: 14px;

  &:hover {
    filter: brightness(0.9);
  }
`

export const SaveButton = styled.button`
  background: var(--white);
  color: var(--black);
  border: none;
  border: 1px solid var(--black);
  border-radius: 10px;
  width: 4.5rem;
  height: 2.3rem;
  font-weight: bold;

  :hover {
    background: var(--black);
    color: var(--white);
  }
`
