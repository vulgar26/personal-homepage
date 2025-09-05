document.getElementById('year').textContent = new Date().getFullYear();
        document.querySelector('.message-form')?.addEventListener('submit',(e) =>{
            e.preventDefault();
            const name = e.target.name.value;
            const message = e.target.message.value;
            alert(`感谢留言！\n名字: ${name}\n留言内容：${message}`);
            document.querySelector('.message-form').reset();  // 清空表单
        });
        document.querySelector('#toggleButton')?.addEventListener('click', () => {
            let textElement = document.querySelector('toggleText');
            if (textElement.style.display == 'none') {
                textElement.style.display = 'block';
            }else {
                textElement.style.display = 'none';
            }
        })
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