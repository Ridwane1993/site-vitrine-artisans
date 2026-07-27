const form = document.getElementById('devis-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async function(e){
  e.preventDefault();
  const data = new FormData(form);
  status.style.display = 'block';
  status.style.color = 'rgba(247,245,240,0.7)';
  status.textContent = 'Envoi en cours...';

  try{
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if(response.ok){
      status.style.color = '#c9a877';
      status.textContent = 'Merci ! Votre demande a bien été envoyée, je vous recontacte sous 24h.';
      form.reset();
    } else {
      status.style.color = '#e0a0a0';
      status.textContent = "Une erreur est survenue. Réessayez ou contactez-moi directement par email.";
    }
  } catch(err){
    status.style.color = '#e0a0a0';
    status.textContent = "Impossible d'envoyer le formulaire. Vérifiez votre connexion.";
  }
});
