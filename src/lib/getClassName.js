const getClassName = (initialClass, ...additionalClass) => {
    let basis = initialClass;
    additionalClass.length && additionalClass.forEach(item => basis += item ? ` ${item}` : '');
    return basis;
};

export default getClassName;