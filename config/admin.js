module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'afb61f94b7e72fbe6f6ca7ae537c3280'),
  },
});
