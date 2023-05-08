addNoteBtnPlus.addEventListener("click", () => {
  emptyMsg.style.display = "none";
  addNoteCardContainer.style.top = "50%";
});
addNoteCardBackBtn.addEventListener("click", () => {
  addNoteCardContainer.style.top = "-2000px";
});

const createNote = (titleInput, descriptionInput, noteId) => {
  let note = document.createElement("div");
  note.classList.add("note-container");

  let notes = notesFromLS();
  Array.from(notes).map((Note) => {
    if (Note.isSingleColumn) {
      note.classList.add("to-single-column");
    }
  });

  note.id = noteId;
  note.innerHTML = `
<div class="note-top">
  <div class="note-top-left">
    <input type="checkbox" class="note-top-left-checkbox" />
    <button class='pin'>
    <i class='fa-solid fa-thumbtack'></i>
    </button>
  </div>
  <div class="note-top-right">
    <button class="three-dot">
      <i class="fa fa-ellipsis-vertical"></i>
    </button>
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

  notesBottom.appendChild(note);
  fontSize(note);
  fontColor(note);

  let threeDotBtn = note.querySelector(".three-dot");
  let noteTopRightButtons = note.querySelector(".note-top-right-buttons");
  threeDotBtn.addEventListener("click", () => {
    noteTopRightButtons.classList.toggle("d-none");
  });
  let noteDeleteBtn = note.querySelector(".note-delete-btn");
  noteDeleteBtn.addEventListener("click", deleteNote);
  selectBtn.addEventListener("click", () => {
    handelSelectBtn(notesBottom);
  });
  let editBtn = note.querySelector(".note-edit-btn");
  editBtn.addEventListener("click", editNote);
};

const addNote = (e) => {
  e.preventDefault();
  notesTop.style.display = "flex";
  emptyMsg.style.display = "none";
  addNoteCardContainer.style.top = "-2000px";

  let titleInput = noteTitleInput.value;
  let descriptionInput = noteDescriptionInput.value;
  let noteId = Math.floor(Math.random() * 100000000000000);
  let isChecked = false;
  let isPinned = false;
  let isHighlighted = false;
  let isMinimize = false;
  let isSingleColumn = false;
  let fontSize = selectSize.value;
  let fontColor = selectColor.value;

  //create note
  createNote(titleInput, descriptionInput, noteId);
  let note = {
    titleInput,
    descriptionInput,
    noteId,
    fontSize,
    fontColor,
    isChecked,
    isPinned,
    isHighlighted,
    isMinimize,
    isSingleColumn,
  };
  let notes = notesFromLS();
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));

  noteTitleInput.value = "";
  noteDescriptionInput.value = "";
};
addNoteBtn.addEventListener("click", addNote);

navigationMenuBtn.addEventListener("click", () => {
  navigationMenuContainer.style.left = "0px";
  navigationMenuContainer.style.zIndex = "1";
});
navigationMenuBackBtn.addEventListener("click", () => {
  navigationMenuContainer.style.left = "-2000px";
  navigationMenuContainer.style.zIndex = "-1";
});
let allBtns = document.querySelectorAll(".navlist button");

Array.from(allBtns).forEach((btn) => {
  btn.addEventListener("click", () => {
    navigationMenuContainer.style.left = "-2000px";
    navigationMenuContainer.style.zIndex = "-1";
  });
});
