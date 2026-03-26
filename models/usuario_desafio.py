class UsuarioDesafio:
    def __init__(self, usuario_id, desafio_id):
        self.usuario_id = usuario_id  # Foreign key for Usuario
        self.desafio_id = desafio_id  # Foreign key for Desafio

    def __repr__(self):
        return f"<UsuarioDesafio(usuario_id={self.usuario_id}, desafio_id={self.desafio_id})>"