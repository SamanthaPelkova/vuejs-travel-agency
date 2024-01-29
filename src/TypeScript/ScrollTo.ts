export const useScrollTo = () => {
    const scrollToElement = (elementSelector: string) => {
        const element = document.querySelector(elementSelector)

        if (!(element instanceof HTMLElement)) {
            return
        }

        element.scrollIntoView()
    }
    const scrollToHtmlElement = (element: Element) => {
        element.scrollIntoView()
    }
    return{
        scrollToElement,
        scrollToHtmlElement
    }
}