
const form = document.getElementById("registroForm");
const modal = document.getElementById("modal");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const rol = document.getElementById("rol").value;

    document.getElementById("mNombre").textContent = nombre;
    document.getElementById("mCorreo").textContent = correo;
    document.getElementById("mRol").textContent = rol;

    modal.style.display = "flex";

    form.style.display = "none"

    setTimeout(() => {
        modal.style.display = "none";
        form.reset();
        form.style.display = "block";
    }, 3000);
});

