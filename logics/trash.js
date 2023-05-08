const createTrash = (titleInput, descriptionInput, noteId) => {
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
  trashContainerBottom.appendChild(note);

  return trashContainerBottom;
};
btnTrash.addEventListener("click", () => {
  trashContainerTopRight.style.display = "none";
  selectAllTrashBtn.style.display = "none";
  cancelTrashBtn.style.display = "none";
});

selectTrashBtn.addEventListener("click", () => {
  cancelTrashBtn.style.display = "block";
  selectTrashBtn.style.display = "none";
  let allTrashCheckbox = trashContainerBottom.querySelectorAll(
    ".note-top-left-checkbox"
  );
  Array.from(allTrashCheckbox).forEach((trash) => {
    trash.classList.add("trash-checkbox");
    trash.addEventListener("click", () => {
      selectAllTrashBtn.style.display = "block";
      trashContainerTopRight.style.display = "flex";
    });
  });

  selectAllTrashBtn.addEventListener("click", () => {
    let allTrashCheckbox = trashContainerBottom.querySelectorAll(
      ".note-top-left-checkbox"
    );
    Array.from(allTrashCheckbox).forEach((trashCheck) => {
      trashCheck.checked = true;
    });
  });

  cancelTrashBtn.addEventListener("click", () => {
      cancelTrashBtn.style.display = "none";
      selectAllTrashBtn.style.display = 'none'
      trashContainerTopRight.style.display = 'none'
    selectTrashBtn.style.display = "block";
    let allTrashCheckbox = trashContainerBottom.querySelectorAll(
      ".note-top-left-checkbox"
    );
    Array.from(allTrashCheckbox).forEach((trashCheck) => {
      trashCheck.checked = false;
      trashCheck.classList.remove("trash-checkbox");
    });
  });
});
