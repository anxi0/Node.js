//TODO: 82p: axios
const axios = require('axios');
(async () => {
    try {
        const result = await axios.get('https://www.zerocho.com/api/get')
        // console.log(result);
        console.log("get",result.data);
    } catch (error) {
        console.error(error);
    }
})();
(async () => {
    try {
        const result = await axios.post("https://www.zerocho.com/api/post/json", {
            name: 'zerocho',
            birth: 1994,
        });
        // console.log(result);
        console.log("post",result.data);
    } catch (e) {
        console.error(e);
    }
})();

const FormData = require('form-data');
//TODO: 83p: Form Data
const formData = new FormData();
formData.append('name', 'jang');
formData.append('item', 'knife');
formData.append('item', 'hammer');
// formData.has('jang');
// formData.get('item') //first of array
// formData.getAll('item')
// formData.set('item', '❤️') //Reset index
//When using korean in URI
// axios.post(`https://www.zerocho.com/api/search/${encodeURIComponent('노드')}`);
//When decode
// console.log(decodeURIComponent("%EB%85%B8%EB%93%9C"))//decoded to 노드

//TODO: 86p: data-set
//if you wanna use invulnerable data in HTML5
// <li data-id="1" data-fuck="hey">asdf</li>
// <li data-id="2" data-fuck="why">asdf</li>
//<script>console.log(document.querySelector('li').dataset)</script> 