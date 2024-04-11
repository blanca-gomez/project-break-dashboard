let urlName = document.getElementById('URL-name');
let url = document.getElementById('URL');
let buttonLinks = document.getElementById('generate-link');
let linksList = document.getElementById('links-results');


let persistentLinkList = JSON.parse(localStorage.getItem('links')) || [];


const createListElement = (name, urlInput) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href=${urlInput} target="_blank">${name}</a>`;
    return listItem;
};


const createDeleteButton = (index) => {
    const deleteItem = document.createElement('button');
    deleteItem.textContent = 'X';
    deleteItem.className = 'delete-item'
    deleteItem.addEventListener('click', () => {
        persistentLinkList.splice(index, 1);
        localStorage.setItem('links', JSON.stringify(persistentLinkList));
        deleteItem.parentNode.remove();
    });
    return deleteItem;
};


const handleNewLink = () => {
    const name = urlName.value;
    const urlInput = url.value;

    persistentLinkList.push({ name, url: urlInput });
    localStorage.setItem('links', JSON.stringify(persistentLinkList));

    const newListItem = createListElement(name, urlInput);
    const deleteButton = createDeleteButton(persistentLinkList.length - 1);

    newListItem.appendChild(deleteButton);
    linksList.appendChild(newListItem);

    urlName.value = '';
    url.value = '';
};


window.addEventListener('DOMContentLoaded', () => {
    persistentLinkList.forEach((link, i) => {
        const listItem = createListElement(link.name, link.url);
        const deleteButton = createDeleteButton(i);
        listItem.appendChild(deleteButton);
        linksList.appendChild(listItem);
    });
});

buttonLinks.addEventListener('click', handleNewLink);