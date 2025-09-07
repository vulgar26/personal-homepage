document.getElementById('year').textContent = new Date().getFullYear();

const messageForm = document.getElementById('message-form');
const messageList = document.getElementById('message-list');

messageForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !message) {
        alert('请填写完整信息！');
        return;
    }

    const li = document.getElement('li');
    li.innerHTML = `<strong>${name}</strong>: ${message}`;

    messageList.appendChild(li);

    li.addEventListener('click', function() {
        alert(`你点击了:${this.textContent}`);
    });

    alert(`感谢留言!\n名字:${name} \n留言内容:${message}`);
    messageForm.reset();
});

document.getElementById('delete-last-message').addEventListener('click',function(){
    if (messageList.children.length > 0) {
        messageList.removeChild(messageList.lastChild);
    } else {
        alert('留言板没有留言可以删除');
    }
});

let quotes = [
    "生命不止，奋斗不息。",
    "活在当下，未来可期。",
    "无论多么漫长，成功只属于那些努力过的人。",
    "成功属于最坚韧的人。",
    "人生就像一本书，愚蠢的人随便翻动，聪明的人细细品味。",
    "go busy dying go busy living",
];

const quoteDisplay = document.getElementById('quote-display');
const container = document.getElementById('container');

function renderQuotes() {
    container.innerHTML = '';  // 清空现有的 div 内容
    quotes.forEach((quote, index)=> {
        const div = document.createElement('div');
        div.textContent = `${index + 1}. ${quote}`;
        div.classList.add('dynamic-div');  // 添加样式类
        container.appendChild(div);  // 添加到容器中
    });
}

document.getElementById('quote-btn').addEventListener('click', function(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
});

document.getElementById('add-div-btn').addEventListener('click', function() {
    const newQuote = prompt('请输入新的名言:');
    if (newQuote && newQuote.trim()) {
        quotes.push(newQuote.trim());
        renderQuotes();
    }
});

document.getElementById('remove-div-btn').addEventListener('click', function() {
    if (quotes.length > 0) {
        quotes.pop();
        renderQuotes();
    } else {
        alert('没有名言可以删除');
    }
});

document.getElementById('replace-div-btn').addEventListener('click', function() {
    if (quotes.length > 0) {
        const newQuote = prompt('请输入新的名言替换第一条:', quotes[0]);
        if (newQuote && newQuote.trim()) {
            quotes[0] = newQuote.trim();
            renderQuotes();
        }
    } else {
        alert('没有名言可以替换');
    }
});

document.getElementById('char-count-input').addEventListener('input', function(e){
    charCount = e.target.value.length;
    document.getElementById('char-count').textContent = `字符数: ${charCount}`;
});

document.getElementById('theme-toggle').addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');

    const isDark = document.body.classList.contains('dark-theme');
    if (isDark) {
        this.textContent = '🌞';
    } else {
        this.textContent = '🌓';
    }
});

let debounceTimer;  // 用于存储定时器  // 获取输入框和搜索结果显示区域
const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');

// 防抖功能：添加输入事件监听
searchInput.addEventListener('input', function(e) {
    // 清除上一个定时器
    clearTimeout(debounceTimer);

    const query = e.target.value.trim();
    if(!query) {
        searchResult.textContent = '请输入内容';
        return;
    }

    searchResult.textContent = '正在搜索...';
    // 设置新的定时器，500ms 后才执行搜索
    debounceTimer = setTimeout(function() {
        // 模拟搜索操作（这里你可以发起请求或执行其他操作）
        const mockResults = [
            '找到相关内容：JavaScript 学习资源',
            '搜索结果：前端开发最佳实践',
            '相关推荐：全栈开发路径',
            '热门话题：Web开发趋势'
        ];
        const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
        searchResult.innerHTML = `🔍 <strong>${query}</strong> - ${randomResult}`;
    }, 500);  // 500ms 后才执行
});

renderQuotes();

document.addEventListener('DOMContentLoaded', function(){
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) =>{
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});