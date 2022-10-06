import { useMenu } from '../../hooks/useMenu'

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
  Separator
} from './style'

import logoImg from '../../assets/logo.svg'
import profileImg from '../../assets/profile.svg'
import moreImg from '../../assets/more.svg'
import notesImg from '../../assets/notes.svg'
import checklistImg from '../../assets/checklist.svg'
import arrowImg from '../../assets/arrow.svg'
import settingImg from '../../assets/setting.svg'
import logoutImg from '../../assets/logout.svg'
import { logout } from '../../services/user'
import { useNavigate } from 'react-router-dom'

export const Sidebar = () => {
  const [openProfileOptions, handleOpenProfileOptions] = useMenu()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout({ navigate })
  }

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
          <p>Ivan Gomes</p>

          <ProfileOptions onClick={handleOpenProfileOptions}>
            <img src={arrowImg} alt="Arrow" />
            {openProfileOptions && (
              <OptionsContainer>
                <div>
                  <img src={settingImg} alt="Logout" />
                  <p>Account Setting</p>
                </div>

                <div onClick={() => handleLogout()}>
                  <img src={logoutImg} alt="Setting" />
                  <p>Logout</p>
                </div>
              </OptionsContainer>
            )}
          </ProfileOptions>
        </Profile>

        <ActionsContainer>
          <input type="text" placeholder="Search" />

          <button type="button" onClick={() => navigate('/criar-nota')}>
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
        </NotesContainer>

        <ImageContainer>
          <img src={checklistImg} alt="" />

          <div>
            <p>Crie suas notas e aumente sua produtividade!</p>
          </div>
        </ImageContainer>
      </Content>
    </Container>
  )
}
