const blue = 'roseFlower';
const flovers = {
    roseFlower: 'red',
    lily: 'white'
};
function checkStringInObject(str, obj){
    console.log(str in obj);
};

checkStringInObject(blue, flovers);

