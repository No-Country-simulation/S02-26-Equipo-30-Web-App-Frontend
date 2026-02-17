import Navbar from './Navbar/Navbar.jsx';


const PublicView = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                {children}
            </main>

        </div>
    );
};

export default PublicView;
