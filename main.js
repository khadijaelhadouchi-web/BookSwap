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
let divLivres = document.getElementById("livres")
function afficher(data) {
 divLivres.textContent=""
  data.forEach(element => {
    divLivres.innerHTML += `  <div class="border"> <p class="text-[#1F675D]">Book</p>
                                <h3>${element.book.title} </h3>
                                <p class="text-[#687673]">${element.book.author} </p>
                                <p class="text-[#687673]">${element.book.description}</p>
                                <div lktouba>
                                    <span>Clean code
                                    </span>
                                    <span>Architecture</span>

                                </div>
                                </div>`

  });
}
const exchangeBook = document.getElementById("exchangeBook");
function exchange(data) {

  data.forEach(book => {
    if (book.offers_count) {
      book.offers.forEach(offer => {
        exchangeBook.innerHTML += `<div class="border"> 
                                <p class="text-[#1F675D]">Book  Exchange</p>
                                <h3>${offer.exchange_type} </h3>
                                <p class="text-[#687673]">${offer.status} </p>
                                <p class="text-[#687673]">${offer.message}</p>
                                <div lktouba>
                                    <span>Clean code
                                    </span>
                                    <span>Architecture</span>

                                </div>
                                </div>` 
      })

    }
  })

}
