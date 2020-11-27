const pfone = {
    model: "apple"
}

function getModel() {
    telephone.program = "Android";
    telephone.country = "China";
    for(let key in telephone){
        if(telephone.hasOwnProperty(key)){
            console.log(`Ключ - ${key}, значение - ${telephone[key]}`)
        }
    }
}

const telephone = Object.create(pfone);
getModel(telephone);