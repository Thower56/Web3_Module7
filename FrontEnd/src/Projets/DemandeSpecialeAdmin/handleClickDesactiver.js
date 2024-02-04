
export const handleClickDesactiver = async (id, demandeSpeciale, setDemandeSpeciale) => {
    try {
        const reponse = await fetch(`http://localhost:8000/api/demandeSpeciale/inactif/${id}`, {
            method: 'PUT',
        });

        if (reponse.ok) {
            const updatedDemandeSpeciale = demandeSpeciale.map(demande => {
                if (demande._id === id) {
                    const nouveauStatut =  demande.statut === 'actif' ? 'inactif' : 'actif';
                    return { ...demande, statut: nouveauStatut };
                }
                return demande;
            });
            setDemandeSpeciale(updatedDemandeSpeciale);
        } else {
            console.error('Erreur lors de la désactivation de la demande spéciale');
        }
    } catch (error) {
        console.error('Erreur lors de la désactivation de la demande spéciale:', error);
    }
};