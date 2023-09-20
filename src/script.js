(function () {
  const btnBoxClass = "kv-style_" + Date.now();

  function _addBtnBox() {
    const style = document.createElement("style");
    style.innerHTML = `
.${btnBoxClass}{
position: fixed;
top: 120px;
right: 100px;
z-index: 999999;
display: flex;
gap: 10px;
}
`;
    document.getElementsByTagName("body")[0].appendChild(style);

    const btnBox = document.createElement("div");
    btnBox.classList.add(btnBoxClass);
    document.getElementsByTagName("body")[0].appendChild(btnBox);
  }

  function _addButton(title, fn) {
    // 1. Create the button
    const button = document.createElement("button");
    button.innerHTML = title;

    // 2. Append somewhere
    document.querySelector("." + btnBoxClass).appendChild(button);

    // 3. Add event handler
    button.addEventListener("click", fn);
  }

  _addBtnBox();
  
	window.addEventListener("kv-add-btn", (e)=>{
		console.log(e);
		// _addButton(title, fn)
	})
})();
