const root = document.documentElement;
root.className = "light";


const setTheme = () => {
    const root = document.documentElement;
  
    const newTheme = root.className === "dark" ? "light" : "dark";
  
    root.className = newTheme;
  };
  
document.querySelector(".toggle_btn").addEventListener("click", setTheme);

const captureFormData = (form) => {  
  const formData = new FormData(form);
  const dataObject = {};
  formData.forEach((value, key) => {
      dataObject[key] = value;
  });
  return dataObject;
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formDataObject = captureFormData(form);
  console.log(formDataObject);
});
