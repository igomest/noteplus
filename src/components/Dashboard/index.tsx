import { Header } from "../Header"
import { NoteCard } from "../NoteCard"
import { Sidebar } from "../Sidebar"
import { Container, SideBarContainer } from "./style"

export const Dashboard = () => {
    return (
        <Container>
            <SideBarContainer>
                <Sidebar />
            </SideBarContainer>
            
            <Header />
            <NoteCard />
        </Container>
    )
}