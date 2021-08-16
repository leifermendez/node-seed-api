const bcrypt = require('bcryptjs') //TODO: <--- 😎

//TODO: Encriptamos!!
const encrypt = async (textPlain) => { //TODO: 123456
    const hash = await bcrypt.hash(textPlain, 10) //0404o4ofoto4o
    return hash
}

//TODO: Comparamos!!
const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, compare }