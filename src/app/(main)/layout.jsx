import NavBar from "@/components/shared/NavBar";


const MainLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
};

export default MainLayout;