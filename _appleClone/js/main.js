(() => {
  // 각 Scene 에 대한 정보를 담은 객체들
  /**
   * 각 객체에는
   * - 1️⃣ heightNum : 각 Scene 에 높이를 설정할 때, 브라우저에 몇 배 ?
   * - 2️⃣ scrollHeight : 각 Scene 에 전체 높이(default = 0, 왜냐하면, 특정 높이로 초기설정하면 -> 디바이스 크기가 다르다면 ?)
   * - 3️⃣ type : 각 Scene 이 Scroll 애니메이션이 들어가 있다면(sticky), 아니면(normal)
   * - 4️⃣ objs : 각 Scene 을 의미하는 section DOM 객체
   */
  const sceneInfo = [
    {
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
      },
    },
    {
      type: "normal",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-2"),
      },
    },
    {
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
      },
    },
  ];
  let yOffset = 0;

  function setLayout() {
    sceneInfo.forEach((scene) => {
      scene.scrollHeight = scene.heightNum * window.innerHeight;
      scene.objs.container.style.height = `${scene.scrollHeight}px`;
    });
  }
  function scrollLoop() {
    console.log(yOffset);
  }

  window.addEventListener("resize", setLayout);
  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
  setLayout();
})();
