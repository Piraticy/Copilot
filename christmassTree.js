function createChristmasTree(height) {
    for (let i = 0; i < height; i++) {
        let level = '';
        for (let j = 0; j < height - i - 1; j++) {
            level += ' ';
        }
        for (let k = 0; k < (2 * i + 1); k++) {
            level += '*';
        }
        console.log(level);
    }
}

function discoLights(height) {
    const colors = ['\x1b[31m', '\x1b[32m', '\x1b[33m', '\x1b[34m', '\x1b[35m', '\x1b[36m'];
    setInterval(() => {
        console.clear();
        for (let i = 0; i < height; i++) {
            let level = '';
            for (let j = 0; j < height - i - 1; j++) {
                level += ' ';
            }
            for (let k = 0; k < (2 * i + 1); k++) {
                level += colors[Math.floor(Math.random() * colors.length)] + '*' + '\x1b[0m';
            }
            console.log(level);
        }
    }, 500);
}

const height = 10;
createChristmasTree(height);
discoLights(height);