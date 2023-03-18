export class Menu {
    constructor(
        public readonly name: string,
        public readonly id?: string,
        public readonly relatedId?: string | null
    ) {}
}
