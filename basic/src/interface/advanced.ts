//*interface
//親のinterfaceを継承できる
interface Book {
    page: number;
    title: string;
}

interface Magazine extends Book {
    cycle: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

//extendsで継承
const jumpMazagazine: Magazine = {
    page: 300,
    title: '週刊少年ジャンプ',
    cycle: 'weekly',
};

//*型エイリアスを親に持つinterfaceも継承できる
type BookType = {
    page: number;
    title: string;
};

interface HelloBook extends BookType {
    theme: string;
}

const hello: HelloBook = {
    page: 20,
    title: 'Hello, World',
    theme: '世界のあいさつ',
};

//*implementsを使ってclassに型を定義する

class Comic implements Book {
    page: number;
    title: string;
    private publishYear: number;
    constructor(page: number, title: string, publishYear: number) {
        this.page = page;
        this.title = title;
        this.publishYear = publishYear;
    }

    getPublishYear() {
        return `${this.title}が発売されたのは、${this.publishYear}年です。`;
    }
}

export { Comic };
