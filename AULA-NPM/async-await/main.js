import fetch from "node-fetch";

 async function main() {
    console.log('main()');
    const user = 'ErickPlacidesMartins';
    const apiUrl = 'https://api.github.com';
   /* fetch(`${apiUrl}/users/${user}`)
        .then((response) => {
           return response.json();
       }).then((user) => {
            console.log(user);
        });*/
    const response= await fetch(`${apiUrl}/users/${user}`);
    const githubUser = await response.json();
    console.log(githubUser);

}

main();