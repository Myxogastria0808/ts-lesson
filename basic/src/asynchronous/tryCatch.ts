//* 参考文献: https://zenn.dev/harryduck/articles/05a0ff1b501fd1

const url: string = 'https://api.github.com/users/Myxogastria0808';

type tryCatch = {
    (): Promise<object | null>;
};

const tryCatchFunc: tryCatch = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default tryCatchFunc;
