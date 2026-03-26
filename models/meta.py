class Meta:
    """
    Meta model class for managing metadata.
    """
    def __init__(self, **kwargs):
        self.__dict__.update(kwargs)

    def __repr__(self):
        return f"Meta({self.__dict__})"