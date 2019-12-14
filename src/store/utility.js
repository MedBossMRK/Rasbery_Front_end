export const updateObject = (oldObject, updatedValues) => {
    let newObject = {
        ...oldObject,
        ...updatedValues
    }
    let initialObjectStateSerialize = JSON.stringify(newObject);
    localStorage.setItem('UserState', initialObjectStateSerialize);
    return newObject;
};