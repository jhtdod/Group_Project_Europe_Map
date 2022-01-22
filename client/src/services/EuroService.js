const baseURL = 'http://localhost:5000/api/countries/'
const countryURL = 'https://restcountries.com/v3.1/region/europe'

export const getCountries = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postCountry = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteCountry = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const getData = (payload) => {
    return fetch(countryURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then()
}
