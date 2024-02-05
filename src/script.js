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