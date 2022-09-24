import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: 5px;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.125);

  li {
    list-style: none;
  }

  hr {
    border-color: 1px solid var(--silver);
    margin-top: 5px;
    width: 80%;
    margin-left: 1rem;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--silver);
  height: 4rem;
  padding: 12px;

  button {
    border: none;
    width: 2rem;
    height: 2rem;
    background: var(--black);
    position: absolute;
    margin-right: 105%;
    margin-bottom: 8%;
    border-radius: 2px;
    color: var(--white);

    :hover {
      background: var(--blue);
    }
  }

  h3 {
    font-family: 'Jost, sans-serif';
    font-size: 1.4rem;
  }
`

export const ItemContainer = styled.div`
  padding: 10px;
  display: flex;
  height: 3rem;
  align-items: center;
  margin-top: 10px;
  margin-left: 5px;

  p {
    margin-left: 7px;
    color: var(--black);
    font-size: 1.25rem;
    font-family: 'Jost, sans-serif';
  }
`

export const Icon = styled.div`
  border: 2px solid var(--black);
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
