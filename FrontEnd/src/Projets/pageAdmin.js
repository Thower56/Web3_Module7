import React from 'react';
import { ListePiecesAdmin } from '../composants/ListePiecesAdmin';
import { pieces } from '../composants/contenu-pieces-test';

export const PageAdmin = () => {
    
    return (
        <div>
            <h1>Admin Page</h1>
            <ListePiecesAdmin pieces={pieces}/>
        </div>
    );
};

