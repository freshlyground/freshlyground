package fg.examples.seedsavers.support.repository

class NotFoundRemoteOrLocallyException(id: Any)
    : RuntimeException("object with $id not found remote or locally")