export default function (context) {
  // If the user is not authenticated
  const { redirect, store } = context
  const isLoggedIn = store.state.user.user
  if (!store.state.auth.loggedIn && !isLoggedIn) {
    return redirect('/login')
  }
}

