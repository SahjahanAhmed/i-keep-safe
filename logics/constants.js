// all small starts here msgs
const navigationMenuBtnMsg = document.querySelector(".navigation-menu-btn-msg");
const singleColumnView = document.querySelector(".single-column-view");
const multiColumnView = document.querySelector(".multi-column-view");
const addNoteBtnMsg = document.querySelector(".add-note-btn-msg");
const selectedNoteDeleteBtnMsg = document.querySelector(
  ".selected-note-delete-btn-msg"
);
const selectedNotehighlightBtnMsg = document.querySelector(
  ".selected-note-highlight-btn-msg"
);
const selectedNoteMinimizeBtnMsg = document.querySelector(
  ".selected-note-minimize-btn-msg"
);
const selectedNotePinBtnMsg = document.querySelector(
  ".selected-note-pin-btn-msg"
);
const selectedNoteMaximizeBtnMsg = document.querySelector(
  ".selected-note-maximize-btn-msg"
);
const navigationMenuBackBtnMsg = document.querySelector(
  ".navigation-menu-back-btn-msg"
);

// all small ends here msgs

const body = document.body;
const navigationMenuBtn = document.querySelector(".navigation-menu-btn");
const orientation1Btn = document.querySelector(".orientation-1-btn");
const orientation2Btn = document.querySelector(".orientation-2-btn");
const backFromSearchBtn = document.querySelector(".back-from-search-btn");
const searchNote = document.querySelector("#search-note");
const selectBtn = document.querySelector(".select-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const addNoteBtnPlus = document.querySelector(".add-note-btn");
const emptyMsg = document.querySelector(".empty-msg");
const selectAllBtn = document.querySelector(".select-all-btn");
const selectedNoteOperationButtons = document.querySelector(
  ".selected-note-operation-buttons"
);
const selectedNoteDeleteBtn = document.querySelector(".selected-note-delete");
const selectedNoteHighlightBtn = document.querySelector(
  ".selected-note-highlight"
);
const selectedNoteMinimizeBtn = document.querySelector(
  ".selected-note-minimize"
);
const selectedNoteMaximizeBtn = document.querySelector(
  ".selected-note-maximize"
);
const selectedNotePinBtn = document.querySelector(".selected-note-pin");
const notesTop = document.querySelector(".notes-top");
const notesContainer = document.querySelector(".notes-container");
const notesBottom = document.querySelector(".notes-bottom");

const addNoteCardContainer = document.querySelector(".add-note-card-container");
const addNoteCard = document.querySelector(".add-note-card");
const addNoteCardBackBtn = document.querySelector(".add-note-card-back-btn");

const selectSize = document.querySelector("#select-size");
const selectColor = document.querySelector("#select-color");
const addNoteBtn = document.querySelector("#add-note-btn");
const noteTitleInput = document.querySelector("#notes-title");
const noteDescriptionInput = document.querySelector("#notes-description");

const editNoteCard = document.querySelector(".edit-note-card");
const editNoteCardContainer = document.querySelector(
  ".edit-note-card-container"
);
const editNoteCardBackBtn = document.querySelector(".edit-note-card-back-btn");
const selectSizeEdit = document.querySelector("#select-size-edit");
const selectColorEdit = document.querySelector("#select-color-edit");
const editNoteSaveChangesBtn = document.querySelector(
  ".edit-note-save-changes-btn"
);
const noteTitleEditInput = document.querySelector("#notes-title-edit");
const noteDescriptionEditInput = document.querySelector(
  "#notes-description-edit"
);

const navigationMenuContainer = document.querySelector(
  ".navigation-menu-container"
);
const navigationMenuBackBtn = document.querySelector(
  ".navigation-menu-back-btn"
);
const btnNotes = document.querySelector("#btn-notes");
const btnTrash = document.querySelector("#btn-trash");
const btnHighlighted = document.querySelector("#btn-highlighted");
const btnPinned = document.querySelector("#btn-pinned");
const btnSetting = document.querySelector("#btn-settings");
const btnHelp = document.querySelector("#btn-help");

const trashContainer = document.querySelector(".trash-container");
const trashContainerTop = document.querySelector(".trash-container-top");
const trashContainerTopRight = document.querySelector(
  ".trash-container-top-right"
);
const trashContainerTopLeft = document.querySelector(
  ".trash-container-top-left"
);
const trashContainerBottom = document.querySelector(".trash-container-bottom");
const trashMsg = document.querySelector(".trash-msg");
const selectTrashBtn = document.querySelector(".select-trash-btn");
const cancelTrashBtn = document.querySelector(".cancel-trash-btn");
const selectAllTrashBtn = document.querySelector(".select-all-trash-btn");
const restoreBtn = document.querySelector(".restore-trash-btn");
const deleteForeverBtn = document.querySelector(".delete-trash-forever-btn");

const highLightedContainer = document.querySelector(".highlighted-container");
const highLightedContainerTop = document.querySelector(
  ".highlighted-container-top"
);
const highLightedContainerTopRight = document.querySelector(
  ".highlighted-container-top-right"
);
const highLightedContainerTopLeft = document.querySelector(
  ".highlighted-container-top-left"
);
const highLightedContainerBottom = document.querySelector(
  ".highlighted-container-bottom"
);
const selectHighlightedBtn = document.querySelector(".select-highlighted-btn");
const cancelHighlightedBtn = document.querySelector(".cancel-highlighted-btn");
const selectAllHighlightedBtn = document.querySelector(
  ".select-all-highlighted-btn"
);
const unhighlightBtn = document.querySelector(
  ".unhighlight-selected-notes-btn"
);
const highlightMsg = document.querySelector(".highlight-msg");

const pinnedContainer = document.querySelector(".pinned-container");
const pinnedContainerTop = document.querySelector(".pinned-container-top");
const pinnedContainerTopLeft = document.querySelector(
  ".pinned-container-top-left"
);
const pinnedContainerTopRight = document.querySelector(
  ".pinned-container-top-right"
);
const pinnedContainerBottom = document.querySelector(
  ".pinned-container-bottom"
);
const selectPinnedBtn = document.querySelector(".select-pinned-btn");
const cancelPinnedBtn = document.querySelector(".cancel-pinned-btn");
const selectAllPinnedBtn = document.querySelector(".select-all-pinned-btn");
const unpinPinnedBtn = document.querySelector(".unpin-pinned-btn");
const pinnedMsg = document.querySelector(".pinned-msg");

const settingsContainer = document.querySelector(".settings-container");
const showInstractionTextToggle = document.querySelector(
  ".show-instraction-text-toggle"
);

const helpContainer = document.querySelector(".help");

const animationsToggle = document.querySelector(".animations-toggle");
const enableDarkModeTogle = document.querySelector(".enable-dark-mode-toggle");

const notesFromLS = () => {
  return localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
};
const trashesFromLS = () => {
  return localStorage.getItem("trashes")
    ? JSON.parse(localStorage.getItem("trashes"))
    : [];
};

let settingsFromLS = () => {
  return localStorage.getItem("settings")
    ? JSON.parse(localStorage.getItem("settings"))
    : [];
};
