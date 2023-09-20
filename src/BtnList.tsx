import { useCallback, useEffect, useState } from "react"
import { TBtn } from "./types"
import { addOutsideProperty, dispatchAddBtn } from "./helpers"
import style from "./BtnList.module.scss"

class BtnEvent extends Event {
  detail?: {
    btn?: TBtn
  }
}

export function BtnList() {
  const [list, setList] = useState<TBtn[]>([])
  const addBtn = useCallback(
    (e: BtnEvent) => {
      if (!e.detail?.btn) {
        console.error("Wrong event AddBtn")
        return
      }
      setList([...list, e.detail?.btn])
    },
    [list],
  )

  useEffect(() => {
    const eventName = process.env.REACT_APP_EVENT_ADD_BUTTTON
    if (!eventName) {
      console.error("ENV REACT_APP_EVENT_ADD_BUTTTON not found")
      return
    }
    document.addEventListener(eventName, addBtn)
    addOutsideProperty(eventName, dispatchAddBtn)
  }, [addBtn])

  if (!list.length) {
    return null
  }

  return (
    <div className={style.wrap}>
      <button type="button">
        <img
          src="//helper.kvanyukov.ru/images/logo/logo_57x57.png"
          alt="KV logo"
          width={32}
          height={32}
        />
      </button>

      <div className={style.list}>
        {list.map(item => (
          <button
            onClick={item.fn}
            className={style.btn}
            key={item.id}
            type="button"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  )
}
