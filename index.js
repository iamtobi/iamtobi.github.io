function submitRequest() {
  document.querySelector("form").addEventListener("submit", handleSubmit);

  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("hire-form");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };
  return 0;
}
submitRequest();
document.getElementById("sub").innerHTML = "Email";
