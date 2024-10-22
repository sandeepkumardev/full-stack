async function getuserdata() {
    try {
        const res = await fetch("https://jsonpladfastfaceholder.typicode.com/users");
        return { ok: true, data: res.json() };
    } catch (error) {
        return { ok: false, error: "something went wrong" };
    }
}
const getdata = async () => {
    const data = await getuserdata();
    if (data.ok) {
        const userDOM = data.user.map((user, index) => {
            return `<div class="card">
            <p>Name - ${user.name}</p>
            <p>Username - ${user.Username}</p>
            <p>Email - ${user.email}</p>
            </div>`;
        })
        CSSContainerRule.innerHTML = userdom.join(" ");
        
    } else {
        
    }
    console.log(data);
};
getdata();
