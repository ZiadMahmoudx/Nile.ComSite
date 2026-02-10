declare module 'ukiyojs' {
    export default class Ukiyo {
        constructor(elements: any, options?: any);
    }
}

declare module 'imagesloaded' {
    function imagesLoaded(element: any, callback?: any): any;
    export default imagesLoaded;
}

declare module 'split-type' {
    export default class SplitType {
        constructor(element: any, options?: any);
        chars: HTMLElement[];
        words: HTMLElement[];
        lines: HTMLElement[];
    }
}
