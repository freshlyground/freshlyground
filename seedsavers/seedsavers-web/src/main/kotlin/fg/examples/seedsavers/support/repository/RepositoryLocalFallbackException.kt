package fg.examples.seedsavers.support.repository

class RepositoryLocalFallbackException(cause: Throwable)
    : Throwable("Exception while falling back to local repository: ${cause.message}", cause) {
}