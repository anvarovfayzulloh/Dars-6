const $form = document.querySelector(".form");
const $title = document.querySelector(".title");
const $ul = document.querySelector(".list");

let productList = [];



$form.addEventListener("submit", (e) => {
    e.preventDefault()
    if ($title.value.trim() === "") {
        Toastify({
            text: "Input is empty",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "red",
              borderRadius: "10px",
              fontFamily: "Jost",
            },
          }).showToast()
        return;
    }
    else{
    const currentTime = new Date();
    let clickTime = currentTime.toLocaleTimeString();
    let productObject = {
        name: $title.value.trim(),
        time: clickTime,
    }
    productList.push(productObject)
    let $listItem = document.createElement('li');
    $ul.appendChild($listItem);
    $listItem.classList.add('list__item');
    let $titleElement = document.createElement('p');
    $listItem.appendChild($titleElement);
    $titleElement.classList.add('first__input');
    $titleElement.textContent = productObject.name;
    let $deleteElement = document.createElement('p');
    $listItem.appendChild($deleteElement); 
    $deleteElement.classList.add('delete');
    let $timeElement = document.createElement('p');
    $listItem.appendChild($timeElement);
    $timeElement.textContent = clickTime;
    $timeElement.style.color = "#A9A9A9";
    let $deleteBtn = document.createElement('button');
    $deleteElement.appendChild($deleteBtn);
    $deleteBtn.classList.add('delete__btn');
    $deleteBtn.textContent = "Delete";
    $deleteBtn.addEventListener('click', () => {
        $listItem.remove();
    })}
    $title.value = '';
})