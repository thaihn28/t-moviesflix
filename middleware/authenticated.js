export default function (context) {
  // If the user is not authenticated
  const { redirect, store } = context
  const isLoggedIn = context.$auth.$storage.getCookie('auth_loggedIn')
  if (!store.state.auth.loggedIn && !isLoggedIn) {
    return redirect('/login')
  }
}

