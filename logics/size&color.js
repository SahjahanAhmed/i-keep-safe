const fontSize = (note) => {
  let title = note.querySelector(".note-title");
  let description = note.querySelector(".note-descreption");

  title.style.fontSize = selectSize.value;
  description.style.fontSize = selectSize.value;
};

const fontColor = (note) => {
  let title = note.querySelector(".note-title");
  let description = note.querySelector(".note-descreption");
  title.style.color = selectColor.value;
  description.style.color = selectColor.value;
};
