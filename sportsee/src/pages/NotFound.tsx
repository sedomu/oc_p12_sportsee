import "../styles/main.css"
import Header from "../components/Header.tsx";
import LeftBar from "../components/LeftBar.tsx";
import NotFoundContent from "./NotFoundContent.tsx";

function NotFound() {
    return (
        <>
            <Header />
            <main>
                <LeftBar />
                <NotFoundContent />
            </main>
        </>
    );
}

export default NotFound
