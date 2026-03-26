class Usuario:
    def __init__(self, nome, idade, email):
        self.nome = nome
        self.idade = idade
        self.email = email

    def __str__(self):
        return f"Usuario(nome={self.nome}, idade={self.idade}, email={self.email})"