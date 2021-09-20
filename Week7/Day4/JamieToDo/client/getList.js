const showList = document.querySelector(".ToDoList")
const submitButton = document.querySelector(".submitbutton")

const getList = async () => {
    const url = "http://localhost:3020/get_list";
    const List = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
};
const json = await List.json();

getList();