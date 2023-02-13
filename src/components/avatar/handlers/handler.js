const handler = propety => e => {
  const { target } = e
  dispatch({
    type: actions.UPDATE_AVATAR,
    payload: { ...avatar, propety: target.value }
  })
}
export { handler }
