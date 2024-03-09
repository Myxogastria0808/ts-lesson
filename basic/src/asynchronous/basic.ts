const url: string = 'https://api.github.com/users/Myxogastria0808';

//関数の型エイリアス
type FetchPlofile = {
    (): Promise<object | null>;
};
//省略記法
// type FetchProfile = () => Promise<Profile | null>;

const FetchProfile: FetchPlofile = async () => {
    const response = await fetch(url)
        .then((res) => {
            const response: Promise<object | null> = res.json();
            return response;
        })
        .catch((error) => {
            console.error(error);
            return null;
        });

    return response;
};

export default FetchProfile;
