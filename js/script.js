
const lamp = document.getElementById('lamp');
const interruptor = document.getElementById('interruptor');

// Sons configurados corretamente (sem loop)
const clickSound = new Audio('../assets/interruptor.mp3');
clickSound.loop = false; // 🔄 Garante que não vai repetir

const breakSound = new Audio('../assets/quebrando.mp3');
breakSound.loop = false; // 🔄 Garante que não vai repetir


// Lógica do Interruptor
interruptor.addEventListener('click', () => {
    if (!lamp.classList.contains('explodido')) {
        clickSound.currentTime = 0; // ⏮️ Reinicia o áudio
        clickSound.play(); // ▶️ Toca uma única vez
        
        // (o resto da lógica permanece igual)
        if (lamp.classList.contains('desligado')) {
            lamp.classList.replace('desligado', 'ligado');
            interruptor.classList.replace('interruptor-desligado', 'interruptor-ligado');
        } else {
            lamp.classList.replace('ligado', 'desligado');
            interruptor.classList.replace('interruptor-ligado', 'interruptor-desligado');
        }
    }
});

// Lógica de Explosão
lamp.addEventListener('click', () => {
    if (!lamp.classList.contains('explodido')) {
        breakSound.currentTime = 0; // ⏮️ Reinicia o áudio
        breakSound.play(); // ▶️ Toca uma única vez
        
        // (o resto da lógica permanece igual)
        lamp.classList.add('explodido');
        lamp.classList.remove('ligado', 'desligado');
        interruptor.classList.replace('interruptor-ligado', 'interruptor-desligado');
        
        // Efeito de tremor
        lamp.style.animation = 'shake 0.5s';
        setTimeout(() => {
            lamp.style.animation = '';
        }, 500);
    }
    const reiniciar = document.getElementById('reiniciar');

// Lógica para reiniciar o estado da lâmpada e do interruptor
reiniciar.addEventListener('click', () => {
lamp.classList.remove('explodido'); // Remove a classe de lâmpada quebrada
lamp.classList.add('desligado'); // Restaura o estado desligado
lamp.classList.remove('ligado'); // Remove qualquer estado ligado (se estiver)

interruptor.classList.remove('interruptor-ligado'); // Garante que o interruptor está desligado
interruptor.classList.add('interruptor-desligado'); // Restaura o estado desligado do interruptor

// Opcional: Remove animações/reseta o estilo de tremor
lamp.style.animation = '';

console.log('Reiniciado com sucesso!'); // Apenas para debug
});

});
