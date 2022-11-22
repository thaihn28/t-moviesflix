import createRepository from '~/repositories/Repository'

export default ({$axios, app, store}, inject) => {
  const repositories = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
  })
  inject('repositories', createRepository(repositories))
}
