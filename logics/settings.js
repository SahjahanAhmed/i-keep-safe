showInstractionTextToggle.addEventListener("click", () => {
  let settings = settingsFromLS();
  Array.from(settings).forEach((setting) => {
    if (setting.isInstractionShown) {
      setting.isInstractionShown = false;
      visibilityHidden();
      showInstractionTextToggle.classList.remove("bg-skyblue");
      showInstractionTextToggle.firstElementChild.classList.remove("toggle-on");
    } else if (setting.isInstractionShown == false) {
      setting.isInstractionShown = true;
      visibilityVisible();
      showInstractionTextToggle.classList.add("bg-skyblue");
      showInstractionTextToggle.firstElementChild.classList.add("toggle-on");
    }
  });
  localStorage.setItem("settings", JSON.stringify(settings));
});

animationsToggle.addEventListener("click", () => {
  let settings = settingsFromLS();
  Array.from(settings).forEach((setting) => {
    if (setting.isAnimationOn) {
      setting.isAnimationOn = false;
      body.classList.add("no-animation");
      animationsToggle.firstElementChild.classList.remove("toggle-on");
      animationsToggle.classList.remove("bg-skyblue");
    } else if (setting.isAnimationOn == false) {
      setting.isAnimationOn = true;
      body.classList.remove("no-animation");
      animationsToggle.firstElementChild.classList.add("toggle-on");
      animationsToggle.classList.add("bg-skyblue");
    }
  });
  localStorage.setItem("settings", JSON.stringify(settings));
});

enableDarkModeTogle.addEventListener("click", () => {
  enableDarkModeTogle.firstElementChild.classList.remove("toggle-on");
  enableDarkModeTogle.classList.remove("bg-skyblue");

  let settings = settingsFromLS();
  Array.from(settings).forEach((setting) => {
    if (setting.isEnableDarkmode) {
      body.classList.remove("mode-dark");
      setting.isEnableDarkmode = false;
      enableDarkModeTogle.firstElementChild.classList.remove("toggle-on");
      enableDarkModeTogle.classList.remove("bg-skyblue");
    } else if (setting.isEnableDarkmode == false) {
      body.classList.add("mode-dark");
      setting.isEnableDarkmode = true;
      enableDarkModeTogle.firstElementChild.classList.add("toggle-on");
      enableDarkModeTogle.classList.add("bg-skyblue");
    }
  });
  localStorage.setItem("settings", JSON.stringify(settings));
});

let settings = settingsFromLS();
if (settings.length == 0) {
  let settings = [
    { isInstractionShown: true },
    { isAnimationOn: true },
    { isEnableDarkmode: true },
  ];
  localStorage.setItem("settings", JSON.stringify(settings));
}

let visibilityHidden = () => {
  navigationMenuBtnMsg.style.visibility = "hidden";
  singleColumnView.style.visibility = "hidden";
  multiColumnView.style.visibility = "hidden";
  addNoteBtnMsg.style.visibility = "hidden";
  selectedNotehighlightBtnMsg.style.visibility = "hidden";
  selectedNoteDeleteBtnMsg.style.visibility = "hidden";
  selectedNoteMinimizeBtnMsg.style.visibility = "hidden";
  selectedNotePinBtnMsg.style.visibility = "hidden";
  selectedNoteMaximizeBtnMsg.style.visibility = "hidden";
  navigationMenuBackBtnMsg.style.visibility = "hidden";
};

let visibilityVisible = () => {
  navigationMenuBtnMsg.style.visibility = "visible";
  singleColumnView.style.visibility = "visible";
  multiColumnView.style.visibility = "visible";
  addNoteBtnMsg.style.visibility = "visible";
  selectedNotehighlightBtnMsg.style.visibility = "visible";
  selectedNoteDeleteBtnMsg.style.visibility = "visible";
  selectedNoteMinimizeBtnMsg.style.visibility = "visible";
  selectedNotePinBtnMsg.style.visibility = "visible";
  selectedNoteMaximizeBtnMsg.style.visibility = "visible";
  navigationMenuBackBtnMsg.style.visibility = "visible";
};
