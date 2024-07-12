import React, { useState, useEffect } from 'react';

const RelogioTempoReal = () => {
    const [time, setTime] = useState(new Date());
    const [messageVisible, setMessageVisible] = useState(false);

    useEffect(() => {// Atualiza o relógio a cada segundo
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);

    }, []);

    useEffect(() => {
        if (messageVisible) {
            // Oculta a mensagem após 3 segundos
            const timeoutId = setTimeout(() => {
                setMessageVisible(false);
            }, 3000);

            // Limpa o timeout
            return () => clearTimeout(timeoutId);
        }
    }, [messageVisible]);

    const showMessage = () => {
        setMessageVisible(true);
    };

    return (
        <div>
            <h1>Relógio em Tempo Real</h1>
            <p>{time.toLocaleTimeString()}</p>
            <button onClick={showMessage}>Mostrar Mensagem</button>
            {messageVisible && <p>Esta mensagem desaparecerá em 3 segundos.</p>}
        </div>
    );
};

export default RelogioTempoReal;