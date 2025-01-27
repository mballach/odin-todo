import { retrieveTasksfromJSON } from "./retrievetasks";

function resetIndex() {
  let data = retrieveTasksfromJSON();
  if (data === false) {
    return;
  } else
    for (let i = 0; i < data.length; i++) {
      data[i]["index"] = i;
    }
  localStorage.setItem("taskJSON", JSON.stringify(data));
}

export { resetIndex };
