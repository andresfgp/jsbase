const cities = ['Medellin', 'Bogota', 'Cali']

const randomString = () => {
    return cities[Math.floor(Math.random() * cities.length)]
}

module.exports = randomString;