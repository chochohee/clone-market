const form = document.getElementById("write-form");

const handleSubmitForm = async (event) => {
  event.preventDefault();
  try {
    const res = await fetch("/items", {
      method: "POST",
      body: new FormData(form),
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/";
  } catch (e) {
    console.error("이미지 업로드에 실패했습니다.");
  }
  console.log("제출");
};

form.addEventListener("submit", handleSubmitForm);
