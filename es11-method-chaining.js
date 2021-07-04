// Optional Chaining (ES11)


const person1 = {
    name: 'Hyungsuk',
    job: {
        title: 'S/W Engineer',
        manager: {
            name: 'Park Wuseong',
        },
    },
};

const person2 = {
    name: 'Youngsik',
};

function printManager(person){
    console.log(person.job.manager.name);
}

function printManager2(person){
    console.log(person.job?.manager?.name);
}

//printManager(person1);
//printManager(person2);
printManager2(person1);
printManager2(person2);