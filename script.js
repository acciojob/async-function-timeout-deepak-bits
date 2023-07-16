//your JS code here. If required.

const showMessage = async () => {
    const text = document.getElementById('text').value;
    const delay = +document.getElementById('delay').value;

    if(!text || !delay) return;

    await new Promise((resolve) => setTimeout(resolve, delay));

    document.getElementById('output').textContent = text;
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', showMessage);

