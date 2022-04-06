import styled from "styled-components";

export const Container = styled.div`
  width: 13.5vw;
  height: 100%;
  background: var(--white);
  margin: 26px;
  margin-left: -5%;
  border-radius: 10px;
  box-shadow: 0 0px 40px rgb(0 0 0 / 5%);
`;

export const Content = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const Logo = styled.div`
  width: 90%;
  height: 8vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h3 {
    font-size: 1.44rem;
    margin-right: 4px;
    font-weight: 400;
  }

  img {
    width: 3.8rem;
    height: 3.8rem;
  }
`;
export const Separator = styled.hr`
  width: 90%;
  margin-top: -8%;
  border-color: var(--background);
`;

export const Profile = styled.div`
  display: flex;
  width: 85%;
  height: 6vh;
  justify-content: space-between;
  align-items: center;

  img {
    width: 3rem;
    height: 3rem;
  }

  p,
  img {
    margin-left: 5px;
  }
`;

export const ProfileOptions = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

export const OptionsContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  width: 12.5rem;
  height: 4.8rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: absolute;
  margin-top: 50%;
  margin-right: 55%;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  color: var(--black);

  div {
    display: flex;
    width: 100%;
    height: 2rem;
    cursor: pointer;
    font-size: 0.9rem;
    align-items: center;
    margin-top: 6px;
    padding: 5px;

    :hover {
      background: var(--background);
    }

    img {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  width: 80%;
  height: 12vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    width: 100%;
    height: 3rem;
    padding: 10px;
    background: var(--background);
    border: none;
    border-radius: 10px;
  }

  button {
    width: 100%;
    border: none;
    height: 3rem;
    border-radius: 10px;
    color: var(--white);
    background: var(--black);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.95rem;

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export const NotesContainer = styled.div`
  display: flex;
  width: 80%;
  height: 16vh;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 100%;
    height: 2.5rem;
    display: flex;

    button {
      width: 100%;
      height: 100%;
      border: none;
      background: var(--white);
      display: flex;
      align-items: center;

      img {
        width: 1.3rem;
        height: 1.3rem;
      }

      p {
        margin-left: 4px;
        font-size: 0.96rem;
        color: var(--silver);
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 80%;
  height: 28vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: -35px;

  div {
    width: 100%;

    p {
      font-size: 0.94rem;
      color: var(--silver);
      font-style: italic;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
