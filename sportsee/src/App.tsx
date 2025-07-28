import "./styles/main.css"
import Header from "./components/Header.tsx";
import LeftBar from "./components/LeftBar.tsx";
import UserContent from "./pages/UserContent.tsx";
import NotFoundContent from "./pages/NotFoundContent.tsx";

function App({userId, unknownRoute = false}: {userId: number, unknownRoute?: boolean}) {
    return (
        <>
            <Header/>
            <main>
                <LeftBar />
                {unknownRoute ? <NotFoundContent /> : <UserContent userId={userId} />}
            </main>
        </>
    );
}

export default App
