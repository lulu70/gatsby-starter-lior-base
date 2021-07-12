type GetClassNamesByTabIsUsedState = (tabIsUsed: boolean) => string

const getClassNamesByTabIsUsedState: GetClassNamesByTabIsUsedState = tabIsUsed =>
  tabIsUsed ? "focus" : "focus:outline-none"

export default getClassNamesByTabIsUsedState
