document.getElementById('year').textContent = new Date().getFullYear();
        
document.querySelector('.message-form')?.addEventListener('submit',e =>{
    e.preventDefault();

    const name = e.target.name.value;
    const message = e.target.message.value;

    const li = document.createElement('li');
    li.textContent = `${name} says: ${message}`;

    const messageList = document.getElementById('message-list');
    messageList.appendChild(li);

    alert(`感谢留言！\n名字: ${name}\n留言内容：${message}`);
    document.querySelector('.message-form').reset();  // 清空表单
});

document.getElementById('delete-last-message').addEventListener('click',function(){
    const messageList = document.getElementById('message-list');

    if (messageList.children.length > 0) {
        messageList.removeChild(messageList.lastChild);
    } else {
        alert('留言板没有留言可以删除');
    }
});

document.getElementById('message-list').addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        alert(`你点击了:${e.target.textContent}`);
    }
});

document.querySelector('#toggleButton')?.addEventListener('click', () => {
    let textElement = document.querySelector('toggleText');
    if (textElement.style.display == 'none') {
        textElement.style.display = 'block';
    }else {
        textElement.style.display = 'none';
    }
});

document.querySelector('#myInput')?.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'lightblue';
});

document.querySelector('#myInput')?.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = '';
});

document.getElementById('quote-btn').addEventListener('click', function(){
    const quotes = [
        "生命不止，奋斗不息。",
        "活在当下，未来可期。",
        "无论多么漫长，成功只属于那些努力过的人。",
        "成功属于最坚韧的人。",
        "人生就像一本书，愚蠢的人随便翻动，聪明的人细细品味。",
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').textContent = quotes[randomIndex];
});

document.getElementById('char-count-input').addEventListener('input', function(e){
    charCount = e.target.value.length;
    document.getElementById('char-count').textContent = `字符数: ${charCount}`;
});

document.getElementById('theme-toggle-btn').addEventListener('click', function(){
    document.body.classList.toggle('dark-rheme');
});

let debounceTimer;  // 用于存储定时器

// 获取输入框和搜索结果显示区域
const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');

// 防抖功能：添加输入事件监听
searchInput.addEventListener('input', function(e) {
    // 清除上一个定时器
    clearTimeout(debounceTimer);

    // 设置新的定时器，500ms 后才执行搜索
    debounceTimer = setTimeout(function() {
        // 模拟搜索操作（这里你可以发起请求或执行其他操作）
        searchResult.textContent = `正在搜索: ${e.target.value}`;
    }, 500);  // 500ms 后才执行
});
