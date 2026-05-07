import NavBar from "@/components/shared/NavBar";


const AuthPageLayout = ({children}) => {
    return (
        <div>
            <NavBar></NavBar>
            <main>{children}</main>
        </div>
    );
};

export default AuthPageLayout;