// import '../component/noteItem.js'
// import '../component/noteList.js'
import  {notesData}  from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const noteListEl = document.querySelector('note-list')

        const inputTitle = document.querySelector('#title').value
        const inputBody = document.querySelector('#isi').value
        const noteInput = {
            id: generateId(),
            title: inputTitle,
            body: inputBody,
            createdAt: getTimestamp(),
            archived: false,
        }

        notesData.unshift(noteInput)
        console.log(noteInput)

        console.log(notesData)

        noteListEl.setNotesData(notesData)

        form.reset()
    })

    function generateId() {
        const prefix = "notes";
        const randomStr = Math.random().toString(36).substring(2, 8); // 6 karakter acak
        const randomNum = Math.floor(100000 + Math.random() * 900000); // 6 digit angka
    
        return `${prefix}-${randomStr}-${randomNum}`;
    }
    
    function getTimestamp() {
        return new Date().toISOString();
    }
})
