const createPinned = (titleInput, descriptionInput, noteId) => {
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
  pinnedContainerBottom.appendChild(note);

  return pinnedContainerBottom;
};

btnPinned.addEventListener("click", () => {
  pinnedContainerTopRight.style.display = "none";
  selectAllPinnedBtn.style.display = "none";
  cancelPinnedBtn.style.display = "none";

  let notes = notesFromLS();
  notes = notes.filter((note) => {
    return note.isPinned;
  });
  if (notes.length == 0) {
    pinnedMsg.style.display = "block";
    pinnedContainerTopRight.style.display = "none";
    pinnedContainerTopLeft.style.display = "none";
  } else {
    pinnedMsg.style.display = "none";
    pinnedContainerTopRight.style.display = "flex";
    pinnedContainerTopLeft.style.display = "flex";
  }
});

selectPinnedBtn.addEventListener("click", () => {
  selectPinnedBtn.style.display = "none";
  cancelPinnedBtn.style.display = "block";
  let allPinnedCheckBox = pinnedContainerBottom.querySelectorAll(
    ".note-top-left-checkbox"
  );
  Array.from(allPinnedCheckBox).forEach((pinnedCheckbox) => {
    pinnedCheckbox.style.display = "block";
  });

  cancelPinnedBtn.addEventListener("click", () => {
    cancelPinnedBtn.style.display = "none";
    selectPinnedBtn.style.display = "block";
    Array.from(allPinnedCheckBox).forEach((pinnedCheckbox) => {
      pinnedCheckbox.style.display = "none";
      pinnedCheckbox.checked = false;
    });
  });

  Array.from(allPinnedCheckBox).forEach((pinnedCheckbox) => {
    pinnedCheckbox.addEventListener("click", () => {
      selectAllPinnedBtn.style.display = "block";
      pinnedContainerTopRight.style.display = "block";
    });
  });
  selectAllPinnedBtn.addEventListener("click", () => {
    Array.from(allPinnedCheckBox).forEach((pinnedCheckbox) => {
      pinnedCheckbox.checked = true;
    });
  });
});

unpinPinnedBtn.addEventListener("click", () => {
  let allPinned = pinnedContainerBottom.querySelectorAll(".note-container");
  let allNote = notesBottom.querySelectorAll(".note-container");
  let notes = notesFromLS();

  Array.from(allPinned).forEach((pinnedEl) => {
    Array.from(notes).filter((note) => {
      Array.from(allNote).forEach((noteAll) => {
        if (
          pinnedEl.id == noteAll.id &&
          pinnedEl.firstElementChild.firstElementChild.firstElementChild.checked
        ) {
          noteAll.firstElementChild.firstElementChild.lastElementChild.style.display =
            "none";
        }
      });

      if (
        pinnedEl.id == note.noteId &&
        pinnedEl.firstElementChild.firstElementChild.firstElementChild.checked
      ) {
        note.isPinned = false;
        pinnedContainerBottom.removeChild(pinnedEl);
      }
    });
  });
  localStorage.setItem("notes", JSON.stringify(notes));

  notes = notes.filter((note) => {
    return note.isPinned;
  });
  if (notes.length == 0) {
    pinnedMsg.style.display = "block";
    pinnedContainerTopRight.style.display = "none";
    pinnedContainerTopLeft.style.display = "none";
  } else {
    pinnedMsg.style.display = "none";
    pinnedContainerTopRight.style.display = "flex";
    pinnedContainerTopLeft.style.display = "flex";
  }
});
