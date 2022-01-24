const baseURL = 'http://localhost:5000/api/countries/'

export const getCountries = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getCountry = function (country) {
    return fetch(baseUrl + country)
        .then(res => res.json())
};