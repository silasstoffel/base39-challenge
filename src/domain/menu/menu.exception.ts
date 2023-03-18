export class MenuAlreadyExistsException extends Error {
    public readonly name = 'MenuAlreadyExistsException';
    public readonly code = 'MENU_ALREADY_EXISTS';

    constructor() {
        super('Menu already exists.');
    }
}

export class InvalidRelatedMenuException extends Error {
    public readonly name = 'InvalidRelatedMenuException';
    public readonly code = 'INVALID_RELATED_MENU';

    constructor() {
        super('Invalid related menu.');
    }
}

export class MenuNotException extends Error {
    public readonly name = 'MenuNotException';
    public readonly code = 'MENU_NOT_FOUND';

    constructor() {
        super('Menu not found.');
    }
}

export class MenuRequiredParameterException extends Error {
    public readonly name = 'MenuRequiredParameterException';
    public readonly code = 'MENU_REQUIRED_PARAMETER';

    constructor() {
        super('Parameter name is required.');
    }
}
