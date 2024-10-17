document.addEventListener('DOMContentLoaded', function() {
    // URL do perfil do GitHub
    fetch('https://api.github.com/users/FabiusCaesar')
    .then(function(resposta) {
        // Verifica se a resposta foi bem-sucedida
        if (!resposta.ok) {
            throw new Error('Erro ao buscar os dados');
        }
        return resposta.json();
    })
    .then(function(data) {
        //Atualiza o avatar
        document.getElementById('avatar').src = data.avatar_url;
        //Atualiza o nome
        document.getElementById('name').textContent = data.name;
        //Atualiza o username
        document.getElementById('username').textContent = `@${data.login}`;
        //Atualiza o número de repositórios
        document.getElementById('repositorios').textContent = data.public_repos;
        //Atualiza o número de seguidores
        document.getElementById('seguidores').textContent = data.followers;
        //Atualiza o número de pessoas que está seguindo
        document.getElementById('seguindo').textContent = data.following;
        //Atualiza o link do perfil
        document.getElementById('link-github').href = data.html_url;


    })
    .catch(function(error) {
        console.error('Erro:', error);
    });
});
