const notes = [
    {
        id: 1,
        subject:"GitHub",
        date: 'July 11, 2021',
        feeling: 'A little lost',
        timeSpent: 4
    },
    {
        id: 2, 
        subject: 'Git',
        date: 'July 12, 2021',
        feeling:'feeling good',
        timeSpent: 4 
    },
    {
        id:3,
        subject: 'team project',
        date: 'July1 13, 2021',
        feeling: 'feeling code',
        timeSpent: 5
    }
]

const array ={
    id: 4,
    subject: 'array',
    date: 'July 16, 2021',
    feeling: 'feeling confident',
    timeSpent: 3
}
notes.push(array);
 //console.log(notes);
// for (const note of notes) {
//     console.log(note.subject);
// }

// for (const note of notes) {
//     console.log(`Notes: ${note.id}
//     Subject: ${note.subject}
//     date: ${note.date}
//     feeling: ${note.feeling}
//     timespent: ${note.timeSpent}
//     ------------------`)
    
// }

// const searchTerm = "feeling confident";

// for (const note of notes) {
//     if (note.feeling === searchTerm) {
//         console.log(`the subject: ${note.subject} i felt pretty confident`)

//     }
// }

const createNote = (note) => {
const today = new Date()
let currentDate  = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'/'+
today.toLocaleTimeString();
const lastIndex = notes.length -1;
const currentLastNote = notes[lastIndex];
const maxId = currentLastNote.id;
const newIdForNote = maxId + 1;
note.date = currentDate;
note.id = newIdForNote;
notes.push(note);

};


const moreNewerNote ={
    subject: 'adding objects to a array',
    feeling: 'confused',
    timeSpent: 4,
    date:''
    
};

createNote(moreNewerNote);
console.log(notes);
