import { useMenu } from "../hooks/useMenu";

import {
  ActionsContainer,
  Container,
  Content,
  ImageContainer,
  Logo,
  NotesContainer,
  OptionsContainer,
  Profile,
  ProfileOptions,
  Separator,
} from "./style";
import logoImg from "../../assets/logo.svg";
import profileImg from "../../assets/profile.svg";
import moreImg from "../../assets/more.svg";
import notesImg from "../../assets/notes.svg";
import tagsImg from "../../assets/tags.svg";
import binImg from "../../assets/bin.svg";
import checklistImg from "../../assets/checklist.svg";
import arrowImg from "../../assets/arrow.svg";
import settingImg from "../../assets/setting.svg";
import logoutImg from "../../assets/logout.svg";


export const Sidebar = () => {
  const [openProfileOptions, handleOpenProfileOptions] = useMenu()

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="Logo" />
          <h3>NotePlus</h3>
        </Logo>

        <Separator />

        <Profile>
          <img src={profileImg} alt="Profile Icon" />
          <p>Klein Moretti</p>

          <ProfileOptions onClick={handleOpenProfileOptions}>
            <img src={arrowImg} alt="Arrow" />
            {openProfileOptions && (
              <OptionsContainer>
                <div>
                  <img src={settingImg} alt="Logout" />
                  <p>Account Setting</p>
                </div>

                <div>
                  <img src={logoutImg} alt="Setting" />
                  <p>Logout</p>
                </div>
              </OptionsContainer>
            )}
          </ProfileOptions>
        </Profile>

        <ActionsContainer>
          <input type="text" placeholder="Search" />

          <button type="button">
            <img src={moreImg} alt="More Icon" />
            Add Nova
          </button>
        </ActionsContainer>

        <NotesContainer>
          <div>
            <button>
              <img src={notesImg} alt="Notes Icon" />
              <p>Suas Notas</p>
            </button>
          </div>

          <div>
            <button>
              <img src={tagsImg} alt="Tags Icon" />
              <p>Tags</p>
            </button>
          </div>

          <div>
            <button>
              <img src={binImg} alt="Bin Img" />
              <p>Bin</p>
            </button>
          </div>
        </NotesContainer>

        <ImageContainer>
          <img src={checklistImg} alt="" />

          <div>
            <p>Crie suas notas e aumente sua produtividade!</p>
          </div>
        </ImageContainer>
      </Content>
    </Container>
  );
};
