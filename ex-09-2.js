const addButton = document.getElementById('add') // id="add"の要素を取得
const removeButton = document.getElementById('remove') // id="remove"の要素を取得
const list = document.getElementById('list') // id="list"の要素を取得

let i = 1;

addButton.addEventListener('click', event => { // 追加ボタンクリック時
    const newItem = document.createElement('li') // <li></li>を作成
    const img_element = document.createElement('img') // <img>
    const li_span = document.createElement('span') // <span></span>を作成
    img_element.src = 'http://placehold.it/64x64' //画像パス
    img_element.alt = `アイテム${[i]}` // alt属性
    li_span.textContent = `アイテム${[i]}`
    list.appendChild(newItem) // アイテム１から表示開始
    i += 1; // アイテム番号が順にカウントされる
    newItem.appendChild(img_element);
    newItem.appendChild(li_span);
})

removeButton.addEventListener('click', event => { // 削除ボタンクリック時
    const count = list.childElementCount // listの子要素(li)の数を返す
    if (count > 0) {
        list.removeChild(list.lastElementChild); // listの子要素が0以上の時、最後の子要素(li)を削除
    }
})