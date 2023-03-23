const startFight = async () => {
    const enemyId = document.activeElement.id
    const enemyHealth = document.activeElement.health

    const response = await fetch(`/api/fight/${enemyId}/${enemyHealth}`, {
        method: 'POST'
    });

    if (response.ok) {
        document.location.replace('/fight');
    } else {
        alert('Failed to start fight.')
    }
};

document
    .querySelectorAll('.start-fight')
    .addEventListener('click', startFight)