import "./styles/main.css"
import Header from "./components/Header.tsx";
import LeftBar from "./components/LeftBar.tsx";
import UserContent from "./pages/UserContent.tsx";

function App({userId}: {userId: number}) {
    return (
        <>
            <Header/>
            <main>
                <LeftBar />
                <UserContent userId={userId} />
            </main>
        </>
    );
}

export default App
