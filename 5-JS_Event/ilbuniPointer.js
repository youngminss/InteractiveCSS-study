class IlbuniPointer {
  constructor() {
    let elem = document.createElement("div");
    let timerId;

    // ð¡ Element.style.cssText = CSSë¥¼ íë²ì ë¬¸ì ë¦¬í°ë´ ííë¡ ìì±ê°ë¥
    elem.style.cssText = `
			position: absolute;
			left: 0;
			top: 0;
			width: 60px;
			height: 60px;
			margin: -30px 0 0 -30px;
			border-radius: 50%;
			background: url('./images/ilbuni_2.png') no-repeat 0 0 / cover;
			transform: scale(0);
		`;

    document.body.appendChild(elem);

    window.addEventListener("click", (e) => {
      elem.style.animation = "pointer-ani 0.5s linear";
      elem.style.left = `${e.clientX}px`;
      elem.style.top = `${e.clientY}px`;
      timerId = setTimeout(() => {
        elem.style.animation = "none";
        clearTimeout(timerId);
        timerId = null;
      }, 500);
    });
  }
}
