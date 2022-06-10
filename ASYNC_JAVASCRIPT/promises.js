//

const posts = [
  { title: "Post one", body: "this is post one" },
  { title: "Post two", body: "this is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

// async await
async function init() {
  await createPost({ title: "Post three", body: "this is post three" });
  getPosts();
}

init();

// async await fetch call
async function fetchUsers() {
  const res = await fetch("user url");
  const data = await res.json();
  console.log(data);
}

fetchUsers();

// createPost({ title: "Post three", body: "This is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Promise.all
// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
