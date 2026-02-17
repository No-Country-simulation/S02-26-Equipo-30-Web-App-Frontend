import Navbar from './Navbar/Navbar.jsx';
import Footer from '@components/footer/Footer.jsx';


const PublicView = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PublicView;
