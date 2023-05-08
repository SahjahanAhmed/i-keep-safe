btnNotes.addEventListener("click", () => {
  let notes = notesFromLS();
  trashContainer.style.display = "none";
  highLightedContainer.style.display = "none";
  pinnedContainer.style.display = "none";
  settingsContainer.style.display = "none";
  helpContainer.style.display = "none";
  addNoteBtnPlus.style.display = "block";
  btnNotes.classList.add("active");
  emptyMsg.style.display = "block";
  if (notes.length >= 1) {
    emptyMsg.style.display = "none";
    notesTop.style.display = "flex";
  }

  btnTrash.classList.remove("active");
  btnHighlighted.classList.remove("active");
  btnPinned.classList.remove("active");
  btnSetting.classList.remove("active");
  btnHelp.classList.remove("active");
});

btnTrash.addEventListener("click", () => {
  let trashes = trashesFromLS();
  trashContainer.style.display = "flex";
  addNoteBtnPlus.style.display = "none";
  emptyMsg.style.display = "none";
  highLightedContainer.style.display = "none";
  pinnedContainer.style.display = "none";
  settingsContainer.style.display = "none";
  helpContainer.style.display = "none";

  trashContainerTop.style.display = "flex";
  selectTrashBtn.style.display = "block";

  if (trashes.length == 0) {
    trashContainerTopLeft.style.display = "none";
  } else {
    trashContainerTopLeft.style.display = "flex";
  }

  btnTrash.classList.add("active");
  btnNotes.classList.remove("active");
  btnHighlighted.classList.remove("active");
  btnPinned.classList.remove("active");
  btnSetting.classList.remove("active");
  btnHelp.classList.remove("active");
});

btnHighlighted.addEventListener("click", () => {
  let notes = notesFromLS();
  selectHighlightedBtn.style.display = "block";
  highLightedContainer.style.display = "flex";
  trashContainer.style.display = "none";
  addNoteBtnPlus.style.display = "none";
  settingsContainer.style.display = "none";
  helpContainer.style.display = "none";

  emptyMsg.style.display = "none";
  pinnedContainer.style.display = "none";
  notes = notes.filter((note) => {
    return note.isHighlighted == true;
  });

  if (notes.length == 0) {
    highLightedContainerTopLeft.style.display = "none";
    highLightedContainerTopRight.style.display = "none";
  } else {
    highLightedContainer.style.display = "flex";
    highLightedContainerTopLeft.style.display = "flex";
    highLightedContainerTopRight.style.display = "flex";
    selectHighlightedBtn.style.display = "block";
  }

  notes = notes.filter((note) => {
    return note.isHighlighted;
  });
  if (notes.length == 0) {
    highlightMsg.style.display = "block";
  } else {
    highlightMsg.style.display = "none";
  }
  btnHighlighted.classList.add("active");
  btnNotes.classList.remove("active");
  btnTrash.classList.remove("active");
  btnPinned.classList.remove("active");
  btnSetting.classList.remove("active");
  btnHelp.classList.remove("active");
});

btnPinned.addEventListener("click", () => {
  pinnedContainer.style.display = "flex";
  highLightedContainer.style.display = "none";
  trashContainer.style.display = "none";
  settingsContainer.style.display = "none";
  helpContainer.style.display = "none";

  addNoteBtnPlus.style.display = "none";
  emptyMsg.style.display = "none";

  btnPinned.classList.add("active");
  btnNotes.classList.remove("active");
  btnTrash.classList.remove("active");
  btnHighlighted.classList.remove("active");
  btnSetting.classList.remove("active");
  btnHelp.classList.remove("active");
});

btnSetting.addEventListener("click", () => {
  settingsContainer.style.display = "flex";
  highLightedContainer.style.display = "none";
  trashContainer.style.display = "none";
  pinnedContainer.style.display = "none";
  addNoteBtnPlus.style.display = "none";
  helpContainer.style.display = "none";
  emptyMsg.style.display = "none";

  btnSetting.classList.add("active");
  btnPinned.classList.remove("active");
  btnNotes.classList.remove("active");
  btnTrash.classList.remove("active");
  btnHighlighted.classList.remove("active");
  btnHelp.classList.remove("active");
});
btnHelp.addEventListener("click", () => {
  helpContainer.style.display = "flex";
  settingsContainer.style.display = "none";
  highLightedContainer.style.display = "none";
  trashContainer.style.display = "none";
  pinnedContainer.style.display = "none";
  addNoteBtnPlus.style.display = "none";
  emptyMsg.style.display = "none";
  btnHelp.classList.add("active");
  btnSetting.classList.remove("active");
  btnPinned.classList.remove("active");
  btnNotes.classList.remove("active");
  btnTrash.classList.remove("active");
  btnHighlighted.classList.remove("active");
});
