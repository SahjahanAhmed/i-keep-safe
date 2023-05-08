const createHighlight = (titleInput, descriptionInput, noteId) => {
  let note = document.createElement("div");
  note.classList.add("note-container");
  note.classList.add("note-container-sm");
  note.id = noteId;
  note.innerHTML = `
<div class="note-top">
  <div class="note-top-left">
     <input type="checkbox" class="note-top-left-checkbox" />
  </div>
  <div class="note-top-right">
    <div class="note-top-right-buttons d-none">
      <button class="note-edit-btn">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button class="note-delete-btn">
        <i class="fa fa-trash"></i>
      </button>
    </div>
  </div>
</div>
<div class="note-bottom">
  <div class="note-title">
  ${titleInput}
  </div>
  <div class="note-descreption">
  ${descriptionInput}
  </div>
</div> 
    `;
  highLightedContainerBottom.appendChild(note);

  return trashContainerBottom;
};

btnHighlighted.addEventListener("click", () => {
  highLightedContainerTopRight.style.display = "none";
  cancelHighlightedBtn.style.display = "none";
  selectAllHighlightedBtn.style.display = "none";
});

selectHighlightedBtn.addEventListener("click", () => {
  selectHighlightedBtn.style.display = "none";
  cancelHighlightedBtn.style.display = "block";
  let allHighlightedCheckbox = highLightedContainerBottom.querySelectorAll(
    ".note-top-left-checkbox"
  );
  Array.from(allHighlightedCheckbox).forEach((highlightedCkeckbox) => {
    highlightedCkeckbox.style.display = "block";
  });
  cancelHighlightedBtn.addEventListener("click", () => {
    cancelHighlightedBtn.style.display = "none";
    selectHighlightedBtn.style.display = "block";
    Array.from(allHighlightedCheckbox).forEach((highlightedCkeckbox) => {
      highlightedCkeckbox.style.display = "none";
      highlightedCkeckbox.checked = false;
    });
  });
  Array.from(allHighlightedCheckbox).forEach((highlightedCkeckbox) => {
    highlightedCkeckbox.addEventListener("click", () => {
      selectAllHighlightedBtn.style.display = "block";
      highLightedContainerTopRight.style.display = "flex";
    });
  });

  selectAllHighlightedBtn.addEventListener("click", () => {
    Array.from(allHighlightedCheckbox).forEach((highlightedCkeckbox) => {
      highlightedCkeckbox.checked = true;
    });
  });
});

unhighlightBtn.addEventListener("click", () => {
  let allHighlighted =
    highLightedContainerBottom.querySelectorAll(".note-container");
  let allNote = notesBottom.querySelectorAll(".note-container");
  let notes = notesFromLS();

  Array.from(allHighlighted).forEach((highlighted) => {
    Array.from(notes).filter((note) => {
      Array.from(allNote).forEach((noteAll) => {
        if (
          noteAll.id == highlighted.id &&
          highlighted.firstElementChild.firstElementChild.firstElementChild
            .checked
        ) {
          noteAll.classList.remove("highlighted");
        }
      });

      if (
        highlighted.id == note.noteId &&
        highlighted.firstElementChild.firstElementChild.firstElementChild
          .checked
      ) {
        note.isHighlighted = false;
        highLightedContainerBottom.removeChild(highlighted);
      }
    });
  });
  localStorage.setItem("notes", JSON.stringify(notes));

  notes = notes.filter((note) => {
    return note.isHighlighted;
  });
  if (notes.length == 0) {
    highlightMsg.style.display = "block";
    highLightedContainerTopRight.style.display = "none";
    selectAllHighlightedBtn.style.display = "none";
    cancelHighlightedBtn.style.display = "none";
  } else {
    highlightMsg.style.display = "none";
  }
});
