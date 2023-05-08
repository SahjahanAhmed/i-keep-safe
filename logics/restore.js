restoreBtn.addEventListener("click", () => {
  let trashes = trashesFromLS();
  let allTrashes = trashContainerBottom.querySelectorAll(".note-container");
  let notes = notesFromLS();

  Array.from(trashes).map((Trash) => {
    Array.from(allTrashes).forEach((trash) => {
      if (
        Trash.noteId == trash.id &&
        trash.firstElementChild.firstElementChild.firstElementChild.checked
      ) {
        trash.style.display = "none";
        trashes = trashes.filter((trashf) => {
          if (trash.id == trashf.noteId) {
            createNote(
              trashf.titleInput,
              trashf.descriptionInput,
              trashf.noteId
            );
            notes.push(trashf);
          }
          return trash.id != trashf.noteId;
        });
      }
    });
  });
  localStorage.setItem("trashes", JSON.stringify(trashes));
  localStorage.setItem("notes", JSON.stringify(notes));

  if (trashes.length == 0) {
    trashMsg.style.display = "block";
    trashContainerTopRight.style.display = "none";
    trashContainerTopLeft.style.display = "none";
  } else {
    trashMsg.style.display = "none";
    trashContainerTopRight.style.display = "flex";
    trashContainerTopLeft.style.display = "flex";
  }
  if (notes.length == 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
  }

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
});
