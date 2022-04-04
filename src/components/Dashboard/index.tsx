import { Header } from "../Header"
import { NoteCard } from "../NoteCard"
import { Sidebar } from "../Sidebar"
import { Container, SideBarContainer, NoteContainer } from "./style"

export const Dashboard = () => {
    return (
        <>
            <SideBarContainer>
                <Sidebar />
            </SideBarContainer>

            <Container>
                <Header />

                <NoteContainer>
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                </NoteContainer>
            </Container>
        </>
    )
}