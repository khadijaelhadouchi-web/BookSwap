async function chargerDemandes() {
  const reponse = await fetch('http://127.0.0.1:8000/api/v1/exchange-requests');
  if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`);
  const resultat = await reponse.json();
  afficher(resultat.data)
  console.log(resultat.data)
  recherche(resultat.data)
  exchange(resultat.data)
}

chargerDemandes();
