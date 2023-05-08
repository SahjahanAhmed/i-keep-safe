const handelSelectBtn = (notesBottom) => {
  selectBtn.style.display = "none";
  cancelBtn.style.display = "block";
  let notes = notesFromLS();
  let trashes = trashesFromLS();

  let allNote = notesBottom.querySelectorAll(".note-container");
  let allCheckBox = notesBottom.querySelectorAll(".note-top-left-checkbox");

  cancelBtn.addEventListener("click", () => {
    Array.from(allCheckBox).map((singleCheckBox) => {
      singleCheckBox.checked = false;
      singleCheckBox.style.display = "none";
      cancelBtn.style.display = "none";
      selectBtn.style.display = "block";
    });
  });

  Array.from(allCheckBox).forEach((singleCheckBox) => {
    singleCheckBox.style.display = "block";
  });
  Array.from(allCheckBox).forEach((singleCheckBox) => {
    singleCheckBox.addEventListener("click", () => {
      selectAllBtn.style.display = "block";
      selectedNoteOperationButtons.style.display = "flex";
    });
  });

  selectAllBtn.addEventListener("click", () => {
    Array.from(allCheckBox).map((singleCheckBox) => {
      singleCheckBox.checked = true;
    });
  });

  selectedNoteDeleteBtn.addEventListener("click", () => {
    Array.from(notes).map((Note) => {
      Array.from(allNote).forEach((note) => {
        if (
          Note.noteId == note.id &&
          note.firstElementChild.firstElementChild.firstElementChild.checked
        ) {
          note.style.display = "none";

          notes = Array.from(notes).filter((notef) => {
            return notef.noteId != note.id;
          });
        }
      });
    });
    localStorage.setItem("notes", JSON.stringify(notes));

    if (notes.length == 0) {
      notesTop.style.display = "none";
      emptyMsg.style.display = "block";
    } else {
      emptyMsg.style.display = "none";
    }
    let allTrash = trashContainerBottom.querySelectorAll(".note-container");
    if (allTrash.length == 0) {
      trashContainerTop.style.display = "none";
      trashMsg.style.display = "block";
    } else {
      trashContainerTop.style.display = "flex";
      trashMsg.style.display = "none";
    }
  });

  selectedNoteHighlightBtn.addEventListener("click", () => {
    Array.from(notes).map((Note) => {
      Array.from(allNote).forEach((note) => {
        if (
          Note.noteId == note.id &&
          note.firstElementChild.firstElementChild.firstElementChild.checked
        ) {
          note.classList.add("highlighted");
          Note.isHighlighted = true;
        }
      });
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  selectedNoteMinimizeBtn.addEventListener("click", () => {
    Array.from(notes).map((Note) => {
      Array.from(allNote).forEach((note) => {
        if (
          Note.noteId == note.id &&
          note.firstElementChild.firstElementChild.firstElementChild.checked
        ) {
          note.classList.add("note-container-sm");
          note.classList.remove("to-single-column");
          Note.isMinimize = true;
          Note.isSingleColumn = false;
        }
      });
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  selectedNoteMaximizeBtn.addEventListener("click", () => {
    Array.from(notes).map((Note) => {
      Array.from(allNote).forEach((note) => {
        if (
          Note.noteId == note.id &&
          note.firstElementChild.firstElementChild.firstElementChild.checked
        ) {
          note.classList.remove("note-container-sm");
          note.classList.remove("to-single-column");
          Note.isMinimize = false;
          Note.isSingleColumn = false;
        }
      });
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  selectedNotePinBtn.addEventListener("click", () => {
    Array.from(notes).map((Note) => {
      Array.from(allNote).forEach((note) => {
        if (
          Note.noteId == note.id &&
          note.firstElementChild.firstElementChild.firstElementChild.checked
        ) {
          note.firstElementChild.firstElementChild.lastElementChild.style.display =
            "block";
          Note.isPinned = true;
        }
      });
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  });
};

selectedNoteDeleteBtn.addEventListener("click", () => {
  let notes = notesFromLS();
  let trashes = trashesFromLS();
  let allNote = notesBottom.querySelectorAll(".note-container");
  Array.from(allNote).forEach((Note) => {
    Array.from(notes).filter((note) => {
      if (
        Note.id == note.noteId &&
        Note.firstElementChild.firstElementChild.firstElementChild.checked
      ) {
        createTrash(note.titleInput, note.descriptionInput, note.noteId);
        trashes.push(note);
      }
    });
  });
  localStorage.setItem("trashes", JSON.stringify(trashes));

  let allHighlighted =
    highLightedContainerBottom.querySelectorAll(".note-container");
  let allNoteEl = document.querySelectorAll(".note-container");
  Array.from(allNoteEl).forEach((Note) => {
    Array.from(allHighlighted).filter((note) => {
      if (Note.id == note.id) {
        note.style.display = "none";
      }
    });
  });
  let allPinned = pinnedContainerBottom.querySelectorAll(".note-container");
  let allNoteEl2 = notesBottom.querySelectorAll(".note-container");
  Array.from(allNoteEl2).forEach((Note) => {
    Array.from(allPinned).filter((note) => {
      if (Note.id == note.id) {
        pinnedContainerBottom.removeChild(note);
      }
    });
  });
});

selectedNoteHighlightBtn.addEventListener("click", () => {
  let notes = notesFromLS();
  let allNote = notesBottom.querySelectorAll(".note-container");

  Array.from(allNote).forEach((Note) => {
    Array.from(notes).filter((note) => {
      if (
        Note.id == note.noteId &&
        Note.firstElementChild.firstElementChild.firstElementChild.checked &&
        !note.isHighlighted
      ) {
        createHighlight(note.titleInput, note.descriptionInput, note.noteId);
      }
    });
  });
});

selectedNotePinBtn.addEventListener("click", () => {
  let notes = notesFromLS();
  let allNote = notesBottom.querySelectorAll(".note-container");
  Array.from(allNote).forEach((Note) => {
    Array.from(notes).filter((note) => {
      if (
        Note.id == note.noteId &&
        Note.firstElementChild.firstElementChild.firstElementChild.checked &&
        !note.isPinned
      ) {
        createPinned(note.titleInput, note.descriptionInput, note.noteId);
      }
    });
  });

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
