interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
    firstName: 'Johann',
    lastName: 'Kerbat',
    age: 45,
    location: 'San Francisco'
}

const student2: Student = {
    firstName: 'Uber',
    lastName: 'Works',
    age: 12,
    location: 'San Francisco'
}

const studentsList: Array<Student> = [
    student1,
    student2
]

const styleRules = `
    html {
        margin: 0;
        height: 100%;
    }

    body {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80%;
        margin: 10%;
    }

    table {
        border-collapse: collapse;
    }

    thead {
        font-weight: bolder;
    }

    td {
        padding: 10px;
        border: 1px solid gray;
        cursor: pointer;
    }

    td:hover {
        background: gainsboro;
    }

    td:nth-child(1) {
        text-align: center;
    }
`;

export const displayStudents = (students: Student[]): void => {
    const tableObj = {
        table: document.createElement('table'),
        thead: document.createElement('thead'),
        tr: document.createElement('tr'),
        tbody: document.createElement('tbody'),
    }

    tableObj.tr.insertAdjacentHTML('beforeend', '<td>First Name</td>');
    tableObj.tr.insertAdjacentHTML('beforeend', '<td>Location</td>');
    tableObj.thead.insertAdjacentElement('beforeend', tableObj.tr);

    for (const student of students) {
        const tr = document.createElement('tr');
        tr.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        tr.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        tableObj.tbody.insertAdjacentElement('beforeend', tr);
    }

    tableObj.table.insertAdjacentElement('beforeend', tableObj.thead);
    tableObj.table.insertAdjacentElement('beforeend', tableObj.tbody);
    document.body.insertAdjacentElement('beforeend', tableObj.table);
};

displayStudents(studentsList);
const style: HTMLStyleElement = document.createElement('style');
style.innerHTML = styleRules;
document.head.insertAdjacentElement('beforeend', style);
document.head.title = 'Task 0';
