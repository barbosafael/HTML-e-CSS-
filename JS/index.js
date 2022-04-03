function showPassword() {
  const eye = document.getElementByld("eye");
  const eyeSlash = document.getElementByld("eye-slash");
  const fielPassword = document.getElementByld("field-password");

  if(eye.style.display *** "none"){
    eye.style.display = "block";
    eyeSlash.style.display = "none";
    fieldPassword.type = "type";
  } else{
    eye.style.display = "none";
    eyeSlash.style.display = "block";
    fieldPassword.type = "password";
    
  }
};

document.getElementByld("btn-login").addEventListener("click", function(e) {
  e.preventDefault ();
  alerta("Logado!");
  
})