import { ActionsContainer, Container, Content, ImageContainer, Logo, NotesContainer, Profile, Separator } from "./style"
import logoImg from "../../assets/logo.svg"
import profileImg from "../../assets/profile.svg"
import moreImg from "../../assets/more.svg"
import notesImg from "../../assets/notes.svg"
import tagsImg from "../../assets/tags.svg"
import binImg from "../../assets/bin.svg"
import checklistImg from "../../assets/checklist.svg"

export const Sidebar = () => {
    return (
        <Container>
            <Content>
                <Logo>
                    <img src={logoImg} alt="Logo" />
                    <h3>DailyMirror</h3>

                    {/* <Separator /> */}
                </Logo>

                <Profile>
                    <img src={profileImg} alt="Profile Icon" />
                    <p>Klein Moretti</p>
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

                {/* <div>
                    
                </div> */}
            </Content>
        </Container>
    )
}