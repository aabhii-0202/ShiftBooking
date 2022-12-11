import API from './api';

export const getShift = async (credentials) => {
    return await API({
        method: 'GET',
        url: '/shifts',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(result => {return result.data;})
    .catch((err) => {return err;});
};

export const getShiftById = async (id) => {
    return await API({
        method: 'GET',
        url: `/shifts/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(result => {return result.data;})
    .catch((err) => {return err;});
};


export const bookShift = async (id) => {
    return await API({
        method: 'POST',
        url: `/shifts/${id}/book`,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(result => {return result.data;})
    .catch((err) => {return err;});
};

export const cancelShift = async (id) => {
    return await API({
        method: 'POST',
        url: `/shifts/${id}/cancel`,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(result => {return result.data;})
    .catch((err) => {return err;});
};



