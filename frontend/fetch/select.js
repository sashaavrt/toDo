export async function select() {
    let url = 'http://localhost:3000';
    let response = await fetch(url);
    let commits = await response.json(); // читаем ответ в формате JSON
    console.log(commits);
}

