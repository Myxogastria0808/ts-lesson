const aliusSample = () => {
    //型エイリアスのパターン
    type address = {
        zip?: string;
        prefecture: string;
        city: String;
    };

    //型エイリアスで言うインスタンス化っぽいやつ
    const me: address = {
        zip: '000-0000',
        prefecture: 'Tokyo',
        city: 'Minato Area',
    };

    //関数は、完全に分離してしまう。
    //オプショナルのプロパティにしているために、以下の書き方をしている
    const getAddress = (address: address): undefined | string => {
        if (address.zip) {
            const zip = address.zip;
            return zip;
        }
    };
    //実行例
    const meAddress = getAddress(me);
    console.log('meAddress is:', typeof meAddress, meAddress);
};

export { aliusSample };
