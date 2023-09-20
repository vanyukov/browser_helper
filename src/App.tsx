import { BtnList } from "./BtnList"
import style from "./App.module.scss"

function App() {
  return (
    <div className={style.app}>
      <button type="button">
        <img
          src="//helper.kvanyukov.ru/images/logo/logo_57x57.png"
          alt="KV logo"
          width={32}
          height={32}
        />
      </button>
      <BtnList className={style.btnList}/>
    </div>
  )
}

export default App
