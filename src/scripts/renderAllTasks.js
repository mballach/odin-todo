import { clearDOM } from "./cleardom"
import { retrieveTasksfromJSON } from "./retrievetasks"
import { renderTaskTable } from "./rendertasktable"

function renderAllTasks(){
    clearDOM()
    renderTaskTable(retrieveTasksfromJSON())
    document.getElementById('area-header').innerText = 'All Tasks'
}

export {renderAllTasks}

