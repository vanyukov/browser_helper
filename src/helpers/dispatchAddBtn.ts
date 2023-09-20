export function dispatchAddBtn(title: string, fn: () => void) {
  const eventName = process.env.REACT_APP_EVENT_ADD_BUTTTON
  if (!eventName) {
    console.error("ENV REACT_APP_EVENT_ADD_BUTTTON not found")
    return
  }
  const btnEvent = new CustomEvent(eventName, {
    detail: { btn: { title, fn, id: new Date().getTime() } },
  })
  document.dispatchEvent(btnEvent)
}
