export const POKE_API = {
  URL: "https://pokeapi.co/api/v2",

  type: function (type) {
    return `${this.URL}/type/${type}/`;
  },
    getAlltype: function () {
    return `${this.URL}/type/`;
  },
  pokemon_by_id: function (id) {
    return `${this.URL}/pokemon/${id}/`;
  },
  pokemon_by_name: function (name) {
    return `${this.URL}/pokemon/${name}/`;
  },
  all_pokemons: function () {
    return `${this.URL}/pokemon/`;
  },
  pages: function (num) {
    return `${this.URL}/pokemon/?offset=${num}&limit=20`;
  },
  evolution: function (id) {
    return `${this.URL}/evolution-chain/${id}/`;
  },
  countEvolution: function () {
   return `${this.URL}/evolution-chain/`;
  },

};
