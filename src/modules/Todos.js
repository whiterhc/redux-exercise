// 액션 타입 정의하기
export const input = () => ({ type: INPUT })
export const changeInput = () => ({ type: CHANGEINPUT })
export const insert = () => ({ type: INSERT })
export const toggle = () => ({ type: TOGGLE })
export const remove = () => ({ type: REMOVE })

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
})

let id = 3;
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  type: REMOVE,
  id
});
