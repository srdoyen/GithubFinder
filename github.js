class Github {
  constructor() {
    this.client_id = "7e3467935094386e3483";
    this.client_secret = "390d3afc023aad1715c33dcc30f6132a3ff02317";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    return {
      profile
    };
  }
}
