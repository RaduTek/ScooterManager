import Button from "../components/Controls/Button";
import TextBox from "../components/Controls/TextBox";
import OverlayPage from "../layout/OverlayPage/OverlayPage";

function Search() {
    return (
        <OverlayPage>
            <h1>Search</h1>
            <TextBox className="block" placeholder="Location" />
            <Button color="blue">Search</Button>
        </OverlayPage>
    );
}

export default Search;
