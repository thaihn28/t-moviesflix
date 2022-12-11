export default function (context) {
  // If the user is not authenticated
  const { redirect, store } = context
  const user = store.state.user.user
  const isLoggedIn = Object.keys(user).length !== 0
  if (!store.state.auth.loggedIn && !isLoggedIn) {
    return redirect('/login')
  }
}

