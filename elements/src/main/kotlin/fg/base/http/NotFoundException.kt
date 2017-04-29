package fg.base.http

class NotFoundException(message: String) :
        UnexpectedStatusException("Not fond: $message")