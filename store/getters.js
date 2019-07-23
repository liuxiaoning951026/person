export default {
  changePeople: (state) => {
    return state.people.filter(item => {
      if (item.age > 25) {
        return true
      }
    })
  }
}