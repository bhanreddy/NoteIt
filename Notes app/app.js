export const renderNotes = (notes) =>{
    let newNote = notes.map(({id,notes,title,isPinned,isArchived})=>{
        return(
            `<div class = "single-note shadow">
                <div class= " d-flex align-center title-container">
                    <span>${title}</span>
                    <button class="button del-btn v-hidden" data-type="del" data-id=${id}>
                        <span data-type="del"  data-id=${id} class = "material-icons-outlined">
                            delete</span>
                    </button>
                </div>
                <p>${notes}</p>
                <div class="options d-flex gap-md">
                    <button class="button btn pinned-btn v-hidden" data-type="pinned" data-id=${id}>
                    <span  data-id=${id} data-type="pinned" class=${isPinned ? "material-icons" : "material-icons-outlined" }>
                        push_pin
                        </span>
                    </button>
                    <button data-id=${id} class = "button btn pinned-btn v-hidden"  data-type="archive" >
                    <span data-id=${id} data-type="archive" class="material-icons-outlined">
                        archive
                        </span>
                    </button>
                </div>
            </div>`
        )
    });
    newNote = newNote.join("");
    return newNote;
}