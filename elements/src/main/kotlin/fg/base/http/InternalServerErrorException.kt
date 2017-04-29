package fg.base.http

class InternalServerErrorException(message: String) :
        UnexpectedStatusException("Internal Server error: $message")