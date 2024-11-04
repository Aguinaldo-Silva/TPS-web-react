import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [mensagem, setMensagem] = useState<string>(' Home!');

    useEffect(() => {
        const buscarMensagem = async () => {
            setMensagem('Home');
        };

        buscarMensagem();
    }, []);

    return (
        <div>

            <nav>
                <Link to="/"><Button>Home</Button></Link>
                <Link to="/Settings"><Button>Settings</Button></Link>
                <Link to="/Dashboard"><Button>Dashboard</Button></Link>
                <Link to="/SignIn"><Button>SignIn</Button></Link>
                <Link to="/SignUp"><Button>SignUp</Button></Link>
                <Link to="/Form"><Button>Form</Button></Link>

            </nav>
            <h1>{mensagem}</h1>
            <p>Esta é a estrutura inicial da tela Home.</p>
        </div>
    );
};

export default Home;
