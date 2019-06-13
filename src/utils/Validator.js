/* eslint-disable no-unreachable */
export default class Validator {
  static validate (element, value, compareTo = false) {
    let field = element
    let data = value
    let compare = compareTo
    switch (field) {
      case 'name' :
        if (field.length > 2) {
          return {
            validated: true,
            error: ''
          }
        } else {
          return {
            validated: false,
            error: 'Polje ime mora imati minimum 3 karaktera!'
          }
        }
        break
      case 'email' :
        // eslint-disable-next-line no-useless-escape
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
          return {
            validated: true,
            error: ''
          }
        } else {
          return {
            validated: false,
            error: 'Unesite ispravni format email adrese!'
          }
        }
        break
      case 'password' :
        if (/^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(data)) {
          return {
            validated: true,
            error: ''
          }
        } else {
          return {
            validated: false,
            error: 'Šifra mora imati minimum 6 karaktera, jedno veliko/malo slovo, specijalni karakter i broj'
          }
        }
        break
      case 'repeatPassword' :
        if (compare) {
          if (data === compare) {
            return {
              validated: true,
              error: ''
            }
          } else {
            return {
              validated: false,
              error: 'Polje nije identično sa šifrom!'
            }
          }
        }
        break
      default:
        return false
    }
  }
}
