const editNote = (e) => {
  let notes = notesFromLS();
  editNoteCardContainer.style.top = "50%";

  let selectedNote =
    e.currentTarget.parentElement.parentElement.parentElement.parentElement;
  let titleValue =
    e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling
      .firstElementChild;
  let descriptionValue =
    e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling
      .lastElementChild;

  selectedNote.firstElementChild.firstElementChild.firstElementChild.checked = true;

  noteTitleEditInput.value = titleValue.innerText;
  noteDescriptionEditInput.value = descriptionValue.innerText;

  Array.from(notes).filter((Note) => {
    if (Note.noteId == selectedNote.id) {
      selectColorEdit.value = Note.fontColor;
      selectSizeEdit.value = Note.fontSize;
    }
  });
  editNoteSaveChangesBtn.addEventListener("click", () => {
    Array.from(notes).map((Note) => {
      if (
        Note.noteId == selectedNote.id &&
        selectedNote.firstElementChild.firstElementChild.firstElementChild
          .checked
      ) {
        Note.titleInput = noteTitleEditInput.value;
        Note.descriptionInput = noteDescriptionEditInput.value;

        titleValue.innerText = noteTitleEditInput.value;
        descriptionValue.innerText = noteDescriptionEditInput.value;

        Note.fontSize = selectSizeEdit.value;
        Note.fontColor = selectColorEdit.value;
        titleValue.style.color = selectColorEdit.value;
        titleValue.style.fontSize = selectSizeEdit.value;
        descriptionValue.style.color = selectColorEdit.value;
        descriptionValue.style.fontSize = selectSizeEdit.value;
      }
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  editNoteCardBackBtn.addEventListener("click", () => {
    editNoteCardContainer.style.top = "-2000px";
    selectedNote.firstElementChild.firstElementChild.firstElementChild.checked = false;
  });
  editNoteSaveChangesBtn.addEventListener("click", () => {
    editNoteCardContainer.style.top = "-2000px";
    selectedNote.firstElementChild.firstElementChild.firstElementChild.checked = false;
  });
};
