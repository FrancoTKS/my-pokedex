import { POKE_API } from "../constants/Api.constants";

class pokemon_services {
  async getAlltypes(type) {
    try {
      const response = await fetch(POKE_API.type(type));
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getbyId(id) {
    try {
      const response = await fetch(POKE_API.pokemon_by_id(id));
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getbyName(name) {
    try {
      const response = await fetch(POKE_API.pokemon_by_name(name));
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getpages(page) {
    try {
      const response = await fetch(POKE_API.pages(page));
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getEvolution(id) {
    try {
      const response = await fetch(POKE_API.evolution(id));
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

}
export default new pokemon_services();
