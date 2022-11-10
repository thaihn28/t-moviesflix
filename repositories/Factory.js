export default ($axios) => (resource) => ({
  all() {
    return $axios.get(`/${resource}`)
  },

  show(id) {
    return $axios.$get(`/${resource}/${id}`)
  },

  create(payload) {
    return $axios.$post(`/${resource}/add`, payload)
  },

  update(id, payload) {
    return $axios.$put(`/${resource}/update/${id}`, payload)
  },

  delete(id) {
    return $axios.$delete(`/${resource}/delete/${id}`)
  },
})
