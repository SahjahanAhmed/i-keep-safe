orientation1Btn.addEventListener("click", () => {
  orientation1Btn.style.visibility = "hidden";
  orientation2Btn.style.visibility = "visible";
  let notes = notesFromLS();
  let allNote = document.querySelectorAll(".note-container");
  Array.from(allNote).forEach((note) => {
    note.classList.add("to-single-column");
  });

  Array.from(notes).map((Note) => {
    Array.from(allNote).forEach((note) => {
      if (Note.isSingleColumn == false) {
        Note.isSingleColumn = true;
      }
    });
  });
  localStorage.setItem("notes", JSON.stringify(notes));
});
orientation2Btn.addEventListener("click", () => {
  orientation1Btn.style.visibility = "visible";
  orientation2Btn.style.visibility = "hidden";

  let notes = notesFromLS();
  let allNote = document.querySelectorAll(".note-container");
  Array.from(allNote).forEach((note) => {
    note.classList.remove("to-single-column");
  });
  Array.from(notes).map((Note) => {
    Array.from(allNote).forEach((note) => {
      if (Note.isSingleColumn == true) {
        Note.isSingleColumn = false;
      }
    });
  });
  localStorage.setItem("notes", JSON.stringify(notes));
});
