export const useScroll = () => {
    const scrollTo = (selector) => {
        const aboutUsSection = document.querySelector(selector);
        if (aboutUsSection) {
            const aboutUsOffsetTop = aboutUsSection.offsetTop;

            window.scrollTo({
                top: aboutUsOffsetTop,
                behavior: 'smooth',
            });
        }
    };

    return {
        scrollTo,
    };
}

export const useTimer = () => {
    const startTimer = () => {
        let cas = 600;
        const casovac = setInterval(() => {
            let minuty = Math.floor(cas / 60);
            let sekundy = cas % 60;

            minuty = minuty < 10 ? "0" + minuty : minuty;
            sekundy = sekundy < 10 ? "0" + sekundy : sekundy;

            console.log(minuty + ":" + sekundy);

            if (cas <= 0) {
                clearInterval(casovac);
                alert("Čas vypršel!");
            }

            cas--;
        }, 1000);
    }

    return {
    startTimer
    }
}