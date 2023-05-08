const loadNote = () => {
  let notes = notesFromLS();
  let trashes = trashesFromLS();
  notes.map((note) => {
    createNote(note.titleInput, note.descriptionInput, note.noteId);
  });
  trashes.map((trash) => {
    createTrash(trash.titleInput, trash.descriptionInput, trash.noteId);
  });

  let allNotes = notesBottom.querySelectorAll(".note-container");
  notes.map((note) => {
    allNotes.forEach((noteEl) => {
      if (note.noteId == noteEl.id) {
        let title = noteEl.lastElementChild.firstElementChild;
        let description = noteEl.lastElementChild.lastElementChild;
        title.style.fontSize = note.fontSize;
        title.style.color = note.fontColor;
        description.style.fontSize = note.fontSize;
        description.style.color = note.fontColor;
      }
    });
  });

  notes = notes.filter((note) => {
    return note.titleInput != "" || note.descriptionInput != "";
  });
  localStorage.setItem("notes", JSON.stringify(notes));

  let allTrash = trashContainerBottom.querySelectorAll(".note-container");
  let allNote = notesBottom.querySelectorAll(".note-container");
  Array.from(notes).map((Note) => {
    Array.from(allNote).forEach((note) => {
      if (Note.noteId == note.id && Note.isHighlighted) {
        createHighlight(Note.titleInput, Note.descriptionInput, Note.noteId);
      }
      if (Note.noteId == note.id && Note.isPinned) {
        createPinned(Note.titleInput, Note.descriptionInput, Note.noteId);
      }
      if (Note.noteId == note.id && Note.isPinned) {
        note.firstElementChild.firstElementChild.lastElementChild.style.display =
          "block";
      }
      if (Note.noteId == note.id && Note.isMinimize) {
        note.classList.add("note-container-sm");
        note.classList.remove("to-single-column");
      }
      if (Note.noteId == note.id && Note.isHighlighted) {
        note.classList.add("highlighted");
      }
      if (Note.noteId == note.id && !Note.isHighlighted) {
        note.classList.remove("highlighted");
      }
      if (Note.isSingleColumn == true) {
        note.classList.add("to-single-column");
        orientation1Btn.style.visibility = "hidden";
        orientation2Btn.style.visibility = "visible";
      }
    });
  });

  // highlighted
  notes = notes.filter((note) => {
    return note.isHighlighted;
  });
  if (notes.length == 0) {
    highlightMsg.style.display = "block";
  } else {
    highlightMsg.style.display = "none";
  }

  // pinned
  let notesForPin = notesFromLS();
  notesForPin = notesForPin.filter((note) => {
    return note.isPinned;
  });
  if (notesForPin.length == 0) {
    pinnedMsg.style.display = "block";
  } else {
    pinnedMsg.style.display = "none";
  }

  if (allNote.length == 0) {
    notesTop.style.display = "none";
    emptyMsg.style.display = "block";
  }
  if (allTrash.length == 0) {
    trashContainerTop.style.display = "none";
    trashMsg.style.display = "block";
  } else {
    trashContainerTop.style.display = "flex";
    trashMsg.style.display = "none";
  }

  let settings = settingsFromLS();
  Array.from(settings).map((setting) => {
    if (setting.isInstractionShown) {
      visibilityVisible();
      showInstractionTextToggle.classList.add("bg-skyblue");
      showInstractionTextToggle.firstElementChild.classList.add("toggle-on");
    } else if (setting.isInstractionShown == false) {
      visibilityHidden();
      showInstractionTextToggle.classList.remove("bg-skyblue");
      showInstractionTextToggle.firstElementChild.classList.remove("toggle-on");
    }
    if (setting.isAnimationOn) {
      animationsToggle.classList.add("bg-skyblue");
      animationsToggle.firstElementChild.classList.add("toggle-on");
      body.classList.remove("no-animation");
    }
    if (setting.isAnimationOn == false) {
      body.classList.add("no-animation");
      animationsToggle.classList.remove("bg-skyblue");
      animationsToggle.firstElementChild.classList.remove("toggle-on");
    }
    if (setting.isEnableDarkmode) {
      body.classList.add("mode-dark");
      enableDarkModeTogle.classList.add("bg-skyblue");
      enableDarkModeTogle.firstElementChild.classList.add("toggle-on");
    } else if (setting.isEnableDarkmode == false) {
      body.classList.remove("mode-dark");
      enableDarkModeTogle.classList.remove("bg-skyblue");
      enableDarkModeTogle.firstElementChild.classList.remove("toggle-on");
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  loadNote();
});
