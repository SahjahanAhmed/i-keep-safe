searchNote.addEventListener("focus", (e) => {
  backFromSearchBtn.style.display = "block";
  let search = e.target;
  let allNotes = document.querySelectorAll(".note-container");

  Array.from(allNotes).forEach((note) => {
    e.target.addEventListener("input", () => {
      check(note, search);
    });
  });
});

let check = (note, search) => {
  if (
    note.lastElementChild.firstElementChild.innerText.includes(
      search.value.toLowerCase()
    ) ||
    note.lastElementChild.lastElementChild.innerText.includes(
      search.value.toLowerCase()
    )
  ) {
    note.style.display = "block";
  } else {
    note.style.display = "none";
  }
  backFromSearchBtn.addEventListener("click", () => {
    searchNote.value = "";
    note.style.display = 'block'
  });
};

