deleteForeverBtn.addEventListener("click", () => {
  let trashes = trashesFromLS();
  let allTrash = trashContainerBottom.querySelectorAll(".note-container");

  Array.from(trashes).map((Trash) => {
    Array.from(allTrash).forEach((trash) => {
      if (
        Trash.noteId == trash.id &&
        trash.firstElementChild.firstElementChild.firstElementChild.checked
      ) {
        trashes = trashes.filter((trashf) => {
          trash.style.display = "none";
          return trashf.noteId != trash.id;
        });
      }
    });
  });
  localStorage.setItem("trashes", JSON.stringify(trashes));

  if (trashes.length == 0) {
    trashMsg.style.display = "block";
    trashContainerTopRight.style.display = "none";
    trashContainerTopLeft.style.display = "none";
  } else {
    trashMsg.style.display = "none";
    trashContainerTopRight.style.display = "flex";
    trashContainerTopLeft.style.display = "flex";
  }
});
