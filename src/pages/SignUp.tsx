import { Auth } from "../components/Auth";
import { Appbar } from "../components/Appbar";

export const Signup = () => {
    return <>
        <Appbar/>
        <Auth type="signup" />;
    </>
};
