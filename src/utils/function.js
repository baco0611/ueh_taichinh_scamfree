const getFatherElementByClass = (element, className) => {
    while (element && element !== document.body) {
        if (element.classList.contains(className)) {
            return element;
        }
        element = element.parentElement;
        }
    return null;
};

const getFatherElementById = (element, id) => {
    while (element && element !== document.body) {
        if (element.id === id) {
            return element;
        }
        element = element.parentElement;
    }
    return null; // Trả về null nếu không tìm thấy
};

export {
    getFatherElementByClass,
    getFatherElementById,
}