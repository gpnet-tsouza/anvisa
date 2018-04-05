CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	matricula INT(11),
	nome VARCHAR(60),
	id_permissao INT,
	FOREIGN KEY (id_permissao) REFERENCES permissao(id)
)

CREATE TABLE permissao(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(30),
	descricao VARCHAR(60)
)


CREATE TABLE os (
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao TEXT,
	data_inicial DATE,
	data_final DATE
)

CREATE TABLE os_servico (
	id INT PRIMARY KEY AUTO_INCREMENT,
	id_servico INT,
	id_os INT,
	FOREIGN KEY (id_servico) REFERENCES servico(id),
	FOREIGN KEY (id_os) REFERENCES os(id)
)