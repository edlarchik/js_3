const input = document.getElementById('input');
const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    const text = input.value;

    const length = text.length;
    const hasE = text.includes('e') ? 'Yes' : 'No';
    const startsWithCode = text.startsWith('code') ? 'Yes' : 'No';
    const endsWithCode = text.endsWith('code') ? 'Yes' : 'No';
    const replacedText = text.replaceAll('t', '####') ? 'Yes' : 'No';

    result.innerHTML = `
        1. Length: <b>${length}</b><br>
        2. Contains "e": <b>${hasE}</b><br>
        3. Starts with "code": <b>${startsWithCode}</b><br>
        4. Ends with "code": <b>${endsWithCode}</b><br>
        5. Replaced "t": <b>${replacedText}</b>
    `;
});