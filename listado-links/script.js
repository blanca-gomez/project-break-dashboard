let urlName = document.getElementById('URL-name');
let url = document.getElementById('URL');
let buttonLinks= document.getElementById('generate-link');
let linksList = document.getElementById('links-results');


let persistentLinkList = [];

const createListElement = (name, urlInput) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href=${urlInput} target="_blank">${name}</a>`;
    return listItem;
}

const createDeleteButton = (listItem,urlInput) => {
    const deleteItem = document.createElement('button');
    deleteItem.textContent = 'X';
    deleteItem.addEventListener('click', () =>{
        listItem.remove();
        localStorage.removeItem(urlInput);
    });
    return deleteItem;
}

const handleNewLink = () => {
    const name = urlName.value;
    const urlInput = url.value;

    const newListItem = createListElement(name,urlInput);
    const removeButton = createDeleteButton(newListItem, urlInput);

    linksList.appendChild(newListItem);
    newListItem.appendChild(removeButton);
    
    persistentLinkList.push(urlInput);
    let jsonLinkList = JSON.stringify(persistentLinkList);
    localStorage.setItem(name, jsonLinkList);
}



buttonLinks.addEventListener('click', () => {
    handleNewLink ();
})