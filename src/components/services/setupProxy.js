const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // La URL base de tu servidor proxy (puedes cambiarla si es necesario)
    createProxyMiddleware({
      target: 'https://pokeapi.co', // La URL de la API de Pokémon
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Elimina '/api' de la ruta
      },
    })
  );
};
