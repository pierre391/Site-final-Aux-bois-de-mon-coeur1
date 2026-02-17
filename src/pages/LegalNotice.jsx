export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Mentions Légales</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Éditeur du site</h2>
            <div className="text-neutral-700 space-y-2">
              <p><strong>Raison sociale :</strong> Aux Bois De Mon Cœur</p>
              <p><strong>Forme juridique :</strong> Entreprise individuelle / Micro-entreprise</p>
              <p><strong>Adresse :</strong> France</p>
              <p><strong>Email :</strong> contact@auxboisdemoncoeur.fr</p>
              <p><strong>Numéro SIRET :</strong> [À compléter]</p>
              <p><strong>Directeur de la publication :</strong> [Nom du gérant]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Hébergement</h2>
            <div className="text-neutral-700 space-y-2">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">vercel.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Propriété intellectuelle</h2>
            <div className="text-neutral-700 space-y-2">
              <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
              <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Données personnelles</h2>
            <div className="text-neutral-700 space-y-2">
              <p>Conformément à la loi « Informatique et Libertés » n° 78-17 du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.</p>
              <p>Pour exercer ce droit, veuillez nous contacter à l'adresse email suivante : contact@auxboisdemoncoeur.fr</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Cookies</h2>
            <div className="text-neutral-700 space-y-2">
              <p>Ce site n'utilise pas de cookies de suivi ou de publicité. Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Crédits</h2>
            <div className="text-neutral-700 space-y-2">
              <p><strong>Conception et réalisation :</strong> Aux Bois De Mon Cœur</p>
              <p><strong>Photographies :</strong> © Aux Bois De Mon Cœur - Tous droits réservés</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Limitation de responsabilité</h2>
            <div className="text-neutral-700 space-y-2">
              <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
              <p>Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email à contact@auxboisdemoncoeur.fr en décrivant le problème de la manière la plus précise possible.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Droit applicable</h2>
            <div className="text-neutral-700 space-y-2">
              <p>Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
