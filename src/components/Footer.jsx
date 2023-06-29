const gitHubUrl = "https://github.com/kevindietme";
const currentYear = new Date().getFullYear();

export default function Footer() {
    return(
        <footer>
    <p>&copy; {currentYear}</p>
    <p><a href="gitHubUrl" target="_blank" rel="noreferrer" >See Code in Github</a></p>

        </footer>
    )
}