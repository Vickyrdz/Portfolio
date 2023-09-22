import { useTranslation } from "react-i18next"; 

const ScrollDown = () => {

  const {t} = useTranslation(["home"]);

    return (
      <div className= 'text-white'>
        <div className="mt-16 text-xl border-2 p-3 border-pink rounded-3xl flex">
           {t("scroll")}
           <img className="ml-2 h-7 self-center" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgUlEQVR4nO3UvUrEQBAH8PgQgnBPIJYWWiqC4BtYeY2P4M3GdDYiWFxzTyQ4s1frTrg7QXwBwd4jsqhnTHJJLvuRFBlIt9n/byc7CYK++uqrfj2O1IkM+TRoqQjU2dp8FHxBgpPvR42944Qa/+aj4Mv8AlA3f0C/SErhfrJvc4serufbBLzwjaQsDnihLYWLp1fPOyiYs8gkSLZc4BDUXToLBc8xmg1KX/KFxCY4X0g0wblGog2cKyTaxNlGogucLSTawBE87ZLgFwT1SqE6yIVEs4HeeNP/JGX+c+twOpMEv+n8Kai9/CkF3682AfUhgQ9NkVQTp7N0Zip/kttMjuJjBLW0haTmuCWJ+Kj4xMDnJNRnFbLqTmLNOyfDeJ+A39M4BB4W4lYdAh6adJIMOleJs9NJdtM520h0iTNFog9cUyT6xDUanMjyQNjupNfOmSKlT9ymSNkGri5StomrQsou4MqmG11Pq2knqUu4ks/dHVwW2Unc/zvZUVxffQXN6gtR7paD+Iv6/gAAAABJRU5ErkJggg=="></img>
        </div>
      </div>
    );
  };
  
  export default ScrollDown;

  