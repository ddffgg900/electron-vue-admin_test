const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  fullHeight: state => state.app.fullHeight,
  token: state => state.user.token,
  // avatar: state => state.user.avatar,
  logged: state => state.user.logged,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters
