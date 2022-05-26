export const RegEx = {
  username: new RegExp('^[a-z][a-z\d]{1,19}$'),
  password: new RegExp(/^[^а-яА-ЯєЄїЇ\s]{2,20}$/),
  model: new RegExp('^[a-zA-Zа-яА-ЯєЄїЇ]{1,20}$')
}
