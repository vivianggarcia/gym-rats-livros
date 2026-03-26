class Leitura:
    def __init__(self, titulo, autor, ano):
        self.titulo = titulo
        self.autor = autor
        self.ano = ano

    def __str__(self):
        return f'Leitura(titulo={self.titulo}, autor={self.autor}, ano={self.ano})'