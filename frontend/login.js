const form = document.querySelector("#login-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);
  console.log(formData.get("password"));

  const res = await fetch("/login", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  const accessToken = data.access_token;
  if (res.status === 401) {
    alert("아이디 또는 비밀번호가 틀렸습니다.");
    console.log(res.status);
  } else if (res.status === 200) {
    alert("로그인되었습니다."),
      window.localStorage.setItem("token", accessToken);
    window.location.pathname = "/";
  }

  console.log(accessToken);
};

form.addEventListener("submit", handleSubmit);
