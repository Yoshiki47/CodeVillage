const addButton = document.getElementById('add') // id="add"の要素を取得
const removeButton = document.getElementById('remove') // id="remove"の要素を取得
const list = document.getElementById('list') // id="list"の要素を取得

let i = 1;

addButton.addEventListener('click', event => { // 追加ボタンクリック時
    const newItem = document.createElement('li') // <li></li>を作成
    newItem.textContent = `アイテム${[i]}` 
    list.appendChild(newItem) // アイテム１から表示開始
    i += 1; // アイテム番号が順にカウントされる
})

removeButton.addEventListener('click', event => { // 削除ボタンクリック時
    const count = list.childElementCount
    if (count > 0) {
        list.removeChild(list.lastElementChild); // listの子要素が0以上の時、最後の子要素(li)を削除
    }
})