<h1 align=center>
<img src="https://raw.githubusercontent.com/jgsneves/goStackModulo1Backend/master/gostack_rocketseat.png" />
</h1>

<div><h1>Back-end com NodeJS</h1>

<p>Este repositório tem o objetivo de consolidar o conhecimento adquirido na aula "Back-end com NodeJS" do Módulo 01 do bootcamp GoStack da Rocketseat</p>


## O que é este repo?

Basicament é uma API escrita em NodeJS em que exploramos as seguintes requisições HTTP:

<pre><code>https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN
</code></pre>

<p>O resultado da requisição vai ser um JSON conforme o exemplo:</p>

<pre><code>{
	"numero_casas": 10,
	"token":"token_do_usuario",
	"cifrado": "texto criptografado",
	"decifrado": "aqui vai o texto decifrado",
	"resumo_criptografico": "aqui vai o resumo"
}
</code></pre>

<p>O primeiro passo é você salvar o conteúdo do JSON em um arquivo com o nome <strong>answer.json</strong>, que irá usar no restante do desafio.</p>

<p>Você deve usar o número de casas para decifrar o texto e atualizar o arquivo JSON, no campo <strong>decifrado</strong>. O próximo passo é gerar um resumo criptográfico do texto decifrado usando o algoritmo <strong>sha1</strong> e atualizar novamente o arquivo JSON. OBS: você pode usar qualquer biblioteca de criptografia da sua linguagem de programação favorita para gerar o resumo <strong>sha1</strong> do texto decifrado.</p>

<p>Seu programa deve submeter o arquivo atualizado para correção via POST para a API:</p>

<pre><code>https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN
</code></pre>

<p>OBS: a API espera um arquivo sendo enviado como <em>multipart/form-data</em>, como se fosse enviado por um formulário HTML, com um campo do tipo <em>file</em> com o nome <strong>answer</strong>. Considere isso ao enviar o arquivo.</p>

<p>O resultado da submissão vai ser sua nota ou o erro correspondente. Você pode submeter quantas vezes achar necessário, mas a API não vai permitir mais de uma submissão por minuto.</p>
