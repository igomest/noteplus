import {
    BottomBar,
    Container,
    ImgContainer,
    Menu,
    NoteContent,
    TopBar
} from "./style"
import noteImg from "../../assets/note.svg"
import menuImg from "../../assets/menu.svg"
import calenderImg from "../../assets/calender.svg"

export const NoteCard = () => {
    return (
        <Container>
            <TopBar>
                <ImgContainer>
                    <img src={noteImg} alt="" />
                </ImgContainer>

                <Menu>
                    <img src={menuImg} alt="Menu" />
                </Menu>
            </TopBar>

            <NoteContent>
                <h3>Plano da Semana</h3>
                <p>Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday.Virtual Digital Marketing Course every week on Monday...</p>
            </NoteContent>

            <BottomBar>
                <img src={calenderImg} alt="Calender Icon" />
                <p>12 Jan 2022</p>
            </BottomBar>
        </Container>
    )
}