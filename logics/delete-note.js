const deleteNote = (e) => {
  let selectedNote =
    e.currentTarget.parentElement.parentElement.parentElement.parentElement;
  notesBottom.removeChild(selectedNote);

  let notes = notesFromLS();
  let trashes = trashesFromLS();

  notes = notes.filter((note) => {
    if (note.noteId == selectedNote.id) {
      trashes.push(note);
      createTrash(note.titleInput, note.descriptionInput, note.noteId);
    }
    return note.noteId != selectedNote.id;
  });
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("trashes", JSON.stringify(trashes));

  let allNote = notesBottom.querySelectorAll(".note-container");
  if (allNote.length == 0) {
    notesTop.style.display = "none";
    emptyMsg.style.display = "block";
  } else {
    notesTop.style.display = "flex";
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

  let allHighlighted =
    highLightedContainerBottom.querySelectorAll(".note-container");
  Array.from(allHighlighted).filter((note) => {
    if (selectedNote.id == note.id) {
      highLightedContainerBottom.removeChild(note);
    }
  });

  let allPinned = pinnedContainerBottom.querySelectorAll(".note-container");
  Array.from(allPinned).filter((note) => {
    if (selectedNote.id == note.id) {
      pinnedContainerBottom.removeChild(note);
    }
  });
};
