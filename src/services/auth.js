export function API_LOGIN (user, accounts) {
  if ((user.email === 'admin@datt.com' && user.password === 'admin') || accounts.some((account) => account.email === user.email && account.password === user.password)) {
    return { status: 200, message: '!Que bueno que has regresado!' }
  } else {
    return { status: 401, message: 'Credenciales incorrectas, intenta de nuevo' }
  }
}
