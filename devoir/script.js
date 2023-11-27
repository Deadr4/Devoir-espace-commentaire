// Fonction appelée lors de la soumission du formulaire
function submitComment() {
  // Récupérer les valeurs des champs du formulaire
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var message = document.getElementById("message").value;

  // Vérifier si tous les champs sont remplis
  if (firstName === "" || lastName === "" || message === "") {
    // Afficher un message d'erreur
    document.getElementById("error-message").style.display = "block";
    return;
  }

  // Créer un nouvel élément de commentaire
  var commentElement = document.createElement("div");
  commentElement.className = "flex space-x-4 text-sm text-gray-500";
  commentElement.innerHTML = `
    <div class="flex-1 py-10 border-t border-gray-200">
      <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
      <div class="prose prose-sm mt-4 max-w-none text-gray-500">
        <p>${message}</p>
      </div>
    </div>
  `;

  // Ajouter le nouvel élément de commentaire à la liste
  var commentList = document.getElementById("comment-list");
  commentList.appendChild(commentElement);

  // Effacer le formulaire
  document.getElementById("myForm").reset();

  // Masquer le message d'erreur s'il était affiché
  document.getElementById("error-message").style.display = "none";
}

// Ajouter un écouteur d'événement au formulaire
document.getElementById("myForm").addEventListener("submit", function (event) {
  // Empêcher le rechargement de la page
  event.preventDefault();
  // Appeler la fonction submitComment lors de la soumission du formulaire
  submitComment();
});
