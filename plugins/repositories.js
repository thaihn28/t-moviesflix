import createRepository from '~/repositories/Repository'

export default (context, inject) => {
  inject('repositories', createRepository(context.$axios))
}
